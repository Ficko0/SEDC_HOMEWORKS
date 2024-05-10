import { EDepartment } from 'src/common/enums/department.enum';
import { Employee } from 'src/employee/employee.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    enum: EDepartment,
    enumName: 'e_department',
  })
  department: EDepartment;

  @Column({
    type: String,
    nullable: true,
  })
  description: string | null;

  @Column({
    type: Boolean,
  })
  isActive: boolean;

  @Column({
    type: String,
  })
  officeLocation: string;

  @Column({
    type: Number,
  })
  budget: number;

  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];
}
