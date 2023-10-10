import {Sequelize} from "sequelize";

const db = new Sequelize('railway','root','dfl4GvDG93lkGVfA1H1W',{
    host: 'containers-us-west-75.railway.app',
    port: '5914',
    dialect: 'mysql'
});

export default db;