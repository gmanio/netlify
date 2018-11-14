import Koa from 'koa';
import koaBody from 'koa-body';
import koaJson from 'koa-json';
import { createConnection, getConnectionManager } from 'typeorm';
import { EmployeesController } from './controller/EmployeesController';

const app = new Koa();

app.use(koaBody());
app.use(koaJson());
app.use(async (ctx, next) => {
  if ( !getConnectionManager().has('default') ) {
    await createConnection();
  }
  await next();
});
app.use(EmployeesController('/employees'));

app.listen(5000);
console.log('Server running on port 5000');