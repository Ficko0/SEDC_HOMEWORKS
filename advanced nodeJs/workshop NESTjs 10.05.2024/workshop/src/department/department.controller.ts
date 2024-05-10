import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { DepartmentService } from './department.service';
import { Department } from './department.entity';
import { CreateDepartmentDTO } from './departmentDto/create-department.dto';
import { UpdateDepartmentDTO } from './departmentDto/update-department.dto';
import { QueryDepartmentDTO } from './departmentDto/query-department.dto';

@Controller('department')
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  @Get('/')
  getDepartments(@Query() query: QueryDepartmentDTO): Promise<Department[]> {
    return this.departmentService.getDepartments(query);
  }

  @Get('/:id')
  getDepartment(@Param('id') id: string): Promise<Department> {
    return this.departmentService.getDepartment(id);
  }

  @Post('/')
  createDepartment(@Body() body: CreateDepartmentDTO): Promise<Department> {
    return this.departmentService.createDepartment(body);
  }

  @Put('/:id')
  updateDepartment(
    @Param('id') id: string,
    body: UpdateDepartmentDTO,
  ): Promise<Department> {
    return this.departmentService.updateDepartment(id, body);
  }

  @Delete('/:id')
  deleteDepartment(@Param('id') id: string): Promise<void> {
    return this.departmentService.deleteDepartment(id);
  }
}
