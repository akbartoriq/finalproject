import {Sequelize} from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;

const User = db.define('users',{
    no_resi: {
        type: DataTypes.STRING,
      },
      nama_pengirim: {
        type: DataTypes.STRING,
      },
      nama_penerima: {
          type: DataTypes.STRING,
        },
      alamat: {
          type: DataTypes.STRING,
        },
        no_hp: {
          type: DataTypes.STRING,
        },
        keterangan:{
          type: DataTypes.STRING,
        },
},{
    freezeTableName:true
});

export default User;

(async()=>{
    await db.sync();
})();