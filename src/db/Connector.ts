import 'reflect-metadata';
import { ConnectionManager, getConnectionManager } from 'typeorm';

// class Connector {
//   public static makeConnection = async (ctx, next) => {
//     const connection = getConnectionManager().create({
//       type: 'mysql',
//       host: '49.236.147.142',
//       port: 3306,
//       username: 'root',
//       password: 'wlakscjs87',
//       database: 'employees',
//       synchronize: false,
//       logging: false,
//       entities: [
//         'src/model/**/*.ts',
//       ]
//     });
//
//     await connection.connect();
//     await next();
//   }
// }
//
// export default Connector;

export const makeConnection = async (ctx, next) => {
  const connectionManager = new ConnectionManager();

  const connection = connectionManager.create({
    type: 'mysql',
    host: '49.236.147.142',
    port: 3306,
    username: 'root',
    password: 'wlakscjs87',
    database: 'employees',
    synchronize: false,
    logging: true,
    entities: [
      'src/model/**/*.ts',
    ]
  });

  await connection.connect();
  await next(connectionManager);
}