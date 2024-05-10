import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { EDepartment } from 'src/common/enums/department.enum';

export class CreateDepartmentDTO {
  @IsEnum(EDepartment)
  @IsNotEmpty()
  department: EDepartment;

  @IsOptional()
  @IsString()
  description?: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsString()
  @IsNotEmpty()
  officeLocation: string;

  @IsInt()
  @IsNotEmpty()
  budget: number;
}
