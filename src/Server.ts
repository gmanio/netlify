import Koa from 'koa';
import koaBody from 'koa-body';
import { EmployeeController } from './controller/EmployeeController';
import { Connection, createConnection } from 'typeorm';
const app = new Koa();

app.use(koaBody());
app.use(async (ctx, next) => {
  const connection: Connection = await createConnection();
  await next();
});
app.use(EmployeeController('/employees'));
app.listen(5000);

console.log('Server running on port 5000');