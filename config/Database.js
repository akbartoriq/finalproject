import {Sequelize} from "sequelize";

const db = new Sequelize('railway','root','2qwp7cSaEcqGteOdkk8u',{
    host: 'containers-us-west-75.railway.app',
    port: '6372',
    dialect: 'mysql'
});

export default db;