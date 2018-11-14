import Router from 'koa-router';
import { EmployeesRepository } from '../repository/EmployeesRepository';

export const EmployeesController = (prefix) => {
  const router = new Router({
    prefix: prefix
  });

  router.get('/get', EmployeesRepository().getEmployees);
  router.get('/count', EmployeesRepository().getEmployeeCount);

  return router.routes();
};