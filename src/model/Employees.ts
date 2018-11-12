import { Column, Entity, PrimaryColumn } from "typeorm";

enum Gender { 'M', 'F' };

@Entity()
export class Employees {
  @PrimaryColumn()
  emp_no: number;

  @Column('date')
  birth_date: Date;

  @Column("varchar")
  first_name: string;

  @Column('varchar')
  last_name: string;

  @Column('enum')
  gender: Gender;

  @Column('date')
  hire_date: Date;
}
