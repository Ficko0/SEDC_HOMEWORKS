import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';
import { CreateEmployeeDTO } from './employeeDto/create-employee.dto';
import { UpdateEmployeeDTO } from './employeeDto/update-employee.dto';
import { QueryEmployeeDTO } from './employeeDto/query-employee.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidUnknownValues: true,
    transform: true,
  }),
)
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get('/')
  getEmployees(@Query() query: QueryEmployeeDTO): Promise<Employee[]> {
    return this.employeeService.getEmployees(query);
  }

  @Get('/:id')
  getEmployee(@Param('id') id: string): Promise<Employee> {
    return this.employeeService.getEmployee(id);
  }

  @Post('/')
  createEmployee(@Body() body: CreateEmployeeDTO): Promise<Employee> {
    return this.employeeService.createEmployee(body);
  }

  @Put('/:id')
  updateEmployee(
    @Param('id') id: string,
    @Body() body: UpdateEmployeeDTO,
  ): Promise<Employee> {
    return this.employeeService.updateEmployee(id, body);
  }

  @Delete('/:id')
  deleteEmployee(@Param('id') id: string): Promise<void> {
    return this.employeeService.deleteEmployee(id);
  }
}
