module.exports = (sequelize, DataTypes,Sequelize) => {

  const Bucket = sequelize.define("bucket", {
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
  return Bucket

}


