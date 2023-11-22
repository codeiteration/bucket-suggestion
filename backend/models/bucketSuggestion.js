module.exports = (sequelize, DataTypes,Sequelize) => {

  const BucketSuggestion = sequelize.define("BucketSuggestion",  {
    id: {
       type: DataTypes.UUID,
       defaultValue: Sequelize.UUIDV4,
       primaryKey: true,
    },
    bucketName: {
       type: DataTypes.STRING,
       allowNull: false,
    },
    bucketVolume: {
       type: DataTypes.INTEGER,
    },
    remainingVolume: {
      type: DataTypes.INTEGER,
      defaultValue:0
    },
    bucketData:{
      type: DataTypes.JSON,
      defaultValue: [],
    }
 },
 {
    indexes: [{ unique: true, fields: ["id"] }],
 })
  return BucketSuggestion

}