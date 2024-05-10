import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { EDepartment } from 'src/common/enums/department.enum';

export class QueryDepartmentDTO {
  @IsEnum(EDepartment)
  @IsOptional()
  department?: EDepartment;

  @IsString()
  @IsOptional()
  officeLocation?: string;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @IsInt()
  @IsOptional()
  moreThanBudget?: number;

  @IsInt()
  @IsOptional()
  lessThanBudget?: number;
}
