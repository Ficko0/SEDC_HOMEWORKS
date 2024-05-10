import {
  IsBoolean,
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
} from 'class-validator';
import { JobTitle } from 'src/common/enums/job-title.enum';
import { JobPayType } from 'src/common/enums/pay-type.enum';

export class QueryEmployeeDTO {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEnum(JobTitle)
  @IsOptional()
  jobTitle: JobTitle;

  @IsEnum(JobPayType)
  @IsOptional()
  payType?: JobPayType;

  @IsBoolean()
  @IsOptional()
  isActive: boolean;

  @IsInt()
  @IsOptional()
  minPayRate?: number;

  @IsInt()
  @IsOptional()
  maxPayRate?: number;
}
