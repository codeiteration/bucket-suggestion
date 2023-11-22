module.exports = (sequelize, DataTypes,Sequelize) => {

  const Ball = sequelize.define("ball",  {
    id: {
       type: DataTypes.UUID,
       defaultValue: Sequelize.UUIDV4,
       primaryKey: true,
    },
    name: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    volume: {
       type: DataTypes.INTEGER,
    },
 },
 {
    indexes: [{ unique: true, fields: ["id"] }],
 })
  return Ball

}


