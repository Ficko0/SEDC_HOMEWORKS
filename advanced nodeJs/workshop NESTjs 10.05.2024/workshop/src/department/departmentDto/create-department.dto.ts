import { Transform } from 'class-transformer';
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
  @Transform(({value}) => value.trim())
  description?: string;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsString()
  @IsNotEmpty()
  @Transform(({value}) => value.trim())
  officeLocation: string;

  @IsInt()
  @IsNotEmpty()
  budget: number;
}
