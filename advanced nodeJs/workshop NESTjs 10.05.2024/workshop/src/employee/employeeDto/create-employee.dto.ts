import {
  IsBoolean,
  IsEmail,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';
import { JobTitle } from 'src/common/enums/job-title.enum';
import { JobPayType } from 'src/common/enums/pay-type.enum';

export class CreateEmployeeDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsInt()
  @IsNotEmpty()
  phone: number;

  @IsEnum(JobTitle)
  @IsNotEmpty()
  jobTitle: JobTitle;

  @IsInt()
  @IsNotEmpty()
  payRate: number;

  @IsEnum(JobPayType)
  @IsNotEmpty()
  payType: JobPayType;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  @IsUUID()
  @IsOptional()
  departmentId?: string;
}
