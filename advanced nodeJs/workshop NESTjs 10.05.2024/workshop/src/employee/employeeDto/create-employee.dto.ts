import { Transform } from 'class-transformer';
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
  @Transform(({value}) => value.trim())
  name: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform(({value}) => value.trim())
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
  @Transform(({value}) => value.trim())
  departmentId?: string;
}
