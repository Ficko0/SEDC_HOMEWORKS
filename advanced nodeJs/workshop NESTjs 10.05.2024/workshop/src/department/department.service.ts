import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Department } from './department.entity';
import {
  Repository,
  FindOptionsWhere,
  ILike,
  Between,
  MoreThanOrEqual,
  LessThanOrEqual,
} from 'typeorm';
import { CreateDepartmentDTO } from './departmentDto/create-department.dto';
import { UpdateDepartmentDTO } from './departmentDto/update-department.dto';
import { QueryDepartmentDTO } from './departmentDto/query-department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    @InjectRepository(Department) private deparmentRepo: Repository<Department>,
  ) {}

  async getDepartments({
    department,
    officeLocation,
    isActive,
    moreThanBudget,
    lessThanBudget,
  }: QueryDepartmentDTO): Promise<Department[]> {
    let query = {} satisfies FindOptionsWhere<Department>;

    if (department) {
      query = {
        ...query,
        department: ILike(`%${department}`),
      };
    }

    if (officeLocation) {
      query = {
        ...query,
        officeLocation: ILike(`%${officeLocation}`),
      };
    }

    if (isActive) {
      query = {
        ...query,
        isActive,
      };
    }

    if (moreThanBudget && lessThanBudget) {
      query = {
        ...query,
        budget: Between(moreThanBudget, lessThanBudget),
      };
    } else if (moreThanBudget) {
      query = {
        ...query,
        budget: MoreThanOrEqual(moreThanBudget),
      };
    } else if (lessThanBudget) {
      query = {
        ...query,
        budget: LessThanOrEqual(lessThanBudget),
      };
    }

    return this.deparmentRepo.find({
      where: query,
      relations: {
        employees: true,
      },
    });
  }

  async getDepartment(id: string): Promise<Department> {
    return this.deparmentRepo.findOneBy({ id });
  }

  async createDepartment(body: CreateDepartmentDTO): Promise<Department> {
    const newDepartment = this.deparmentRepo.create(body);

    return this.deparmentRepo.save(newDepartment);
  }

  async updateDepartment(
    id: string,
    body: UpdateDepartmentDTO,
  ): Promise<Department> {
    const department = await this.deparmentRepo.findOneByOrFail({ id });

    const updatedDepartment = this.deparmentRepo.merge(department, body);

    return this.deparmentRepo.save(updatedDepartment);
  }

  async deleteDepartment(id: string): Promise<void> {
    await this.deparmentRepo.delete({ id });
  }
}
