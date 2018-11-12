import Router from 'koa-router';
import { getConnection, getManager } from 'typeorm';
import { Employees } from '../model/Employees';


export const EmployeeController = (prefix) => {
  const router = new Router({
    prefix: prefix
  });

  router.get('/get', getEmployees);
  router.get('/count', getEmployeeCount);

  return router.routes();
};

const getEmployees = async (ctx) => {
  let employeesRepository = getConnection().getRepository(Employees);
  let employeesList = await employeesRepository.find({ take: 10 });
  console.log(employeesList);

  ctx.body = 'test';
}

const getEmployeeCount = async (ctx) => {
  let employeesRepository = getConnection().getRepository(Employees);
  let employeesCount = await employeesRepository.count();


  ctx.body = employeesCount;
}
