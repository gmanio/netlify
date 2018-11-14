import { getConnection } from 'typeorm';
import { Employees } from '../model/Employees';

export const EmployeesRepository = () => {
  const getEmployees = async (ctx) => {
    let employeesRepository = getConnection().getRepository(Employees);
    let employeesList = await employeesRepository.find({ take: 10 });

    ctx.body = employeesList;
  };

  const getEmployeeCount = async (ctx) => {
    let employeesRepository = getConnection().getRepository(Employees);
    let employeesCount = await employeesRepository.count();

    ctx.body = employeesCount;
  }

  return {
    getEmployees,
    getEmployeeCount
  };
};


