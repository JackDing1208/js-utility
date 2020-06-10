const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('test', 'root', '123456', {
  host:'120.76.61.14',
  dialect: 'mysql'
})


class User extends Model {}
User.init({
  username: DataTypes.STRING,
  birthday: DataTypes.DATE
}, { sequelize, modelName: 'user' });

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20)
  }))
  .then(jane => {
    console.log(jane.toJSON());
  });


