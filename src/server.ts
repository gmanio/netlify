import Koa from 'koa';
import koaBody from 'koa-body';
import Router from 'koa-router';
import { createConnection } from 'typeorm';
import { Employees } from './entity/employees';
import Connector from './db/connector';

const app = new Koa();
const router = new Router();
const connector = new Connector();

router.get('/emloyees', async (ctx) => {
  const connection = await connector.getConnection();
  let employees = new Employees();
  let employeesRepository = connection.getRepository(Employees);

  let employeesList = await employeesRepository.find();
  console.log(employeesList);
  ctx.body = 'ooooo';
});

router.get('/*', async (ctx) => {
  ctx.body = 'Hello World!';
});

app.use(koaBody());
app.use(router.routes());
app.listen(5000);

console.log('Server running on port 5000');