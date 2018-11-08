import "reflect-metadata";
import { createConnection, Connection } from "typeorm";

class Connector {
  public connection: Promise<Connection>;

  constructor() {
    this.connection = createConnection({
      "type": "mysql",
      "host": "49.236.147.142",
      "port": 3306,
      "username": "root",
      "password": "wlakscjs87",
      "database": "employees",
      "synchronize": false,
      "logging": false,
      "entities": [
        "src/entity/**/*.ts"
      ],
      "migrations": [
        "src/migration/**/*.ts"
      ],
      "subscribers": [
        "src/subscriber/**/*.ts"
      ]
    })
  }
  
  getConnection = async () => {
    return await this.connection;
  }
}

export default Connector;