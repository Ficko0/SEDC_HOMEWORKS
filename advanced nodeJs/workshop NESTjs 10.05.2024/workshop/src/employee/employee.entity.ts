import { JobTitle } from 'src/common/enums/job-title.enum';
import { JobPayType } from 'src/common/enums/pay-type.enum';
import { Department } from 'src/department/department.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: String,
  })
  name: string;

  @Column({
    type: String,
  })
  email: string;

  @CreateDateColumn({
    type: Date,
  })
  hireDate: Date;

  @Column({
    enum: JobTitle,
    enumName: 'job_title',
  })
  jobTitle: JobTitle;

  @Column({
    type: Number,
  })
  payRate: number;

  @Column({
    enum: JobPayType,
    enumName: 'job_pay_type',
  })
  payType: JobPayType;

  @Column({
    type: Boolean,
  })
  isActive: boolean;

  @Column({
    name: 'department_id',
    nullable: true,
  })
  departmentId: string | null;

  @ManyToOne(() => Department, (department) => department.employees)
  @JoinColumn({
    name: 'department_id',
  })
  department: Department;
}
