import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import {
  Between,
  FindOptionsWhere,
  ILike,
  LessThanOrEqual,
  MoreThanOrEqual,
  Repository,
} from 'typeorm';
import { CreateEmployeeDTO } from './employeeDto/create-employee.dto';
import { UpdateEmployeeDTO } from './employeeDto/update-employee.dto';
import { QueryEmployeeDTO } from './employeeDto/query-employee.dto';
import { min } from 'rxjs';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee) private employeeRepo: Repository<Employee>,
  ) {}

  async getEmployees({
    name,
    jobTitle,
    payType,
    isActive,
    minPayRate,
    maxPayRate,
  }: QueryEmployeeDTO): Promise<Employee[]> {
    let query = {} satisfies FindOptionsWhere<Employee>;

    if (name) {
      query = {
        ...query,
        name: ILike(`%${name}%`),
      };
    }

    if (jobTitle) {
      query = {
        ...query,
        jobTitle: ILike(`%${jobTitle}%`),
      };
    }

    if (payType) {
      query = {
        ...query,
        payType: ILike(`%${payType}%`),
      };
    }

    if (isActive) {
      query = {
        ...query,
        isActive,
      };
    }

    if (minPayRate && maxPayRate) {
      query = {
        ...query,
        payRate: Between(minPayRate, maxPayRate),
      };
    } else if (minPayRate) {
      query = {
        ...query,
        payRate: MoreThanOrEqual(minPayRate),
      };
    } else if (maxPayRate) {
      query = {
        ...query,
        payRate: LessThanOrEqual(maxPayRate),
      };
    }

    return this.employeeRepo.find({
      where: query,
      relations: {
        department: true,
      },
    });
  }

  async getEmployee(id: string): Promise<Employee> {
    return this.employeeRepo.findOneBy({ id });
  }

  async createEmployee(body: CreateEmployeeDTO): Promise<Employee> {
    const newEmployee = this.employeeRepo.create(body);

    return this.employeeRepo.save(newEmployee);
  }

  async updateEmployee(id: string, body: UpdateEmployeeDTO): Promise<Employee> {
    const employee = await this.employeeRepo.findOneByOrFail({ id });

    const updatedEmployee = this.employeeRepo.merge(employee, body);

    return this.employeeRepo.save(updatedEmployee);
  }

  async deleteEmployee(id: string): Promise<void> {
    await this.employeeRepo.delete({ id });
  }
}
