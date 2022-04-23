'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sanphams extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      sanphams.hasOne(models.hinhsps, {foreignKey: 'ma_sp'})
    }
  };
  sanphams.init({
    ten_sp: DataTypes.STRING,
    qc_spHTML: DataTypes.TEXT("long"),
    qc_spMarkdown: DataTypes.TEXT("long"),
    sl_sp: DataTypes.STRING,
    trangthai: DataTypes.STRING,
    msadmin: DataTypes.INTEGER,
    ma_loaisp: DataTypes.INTEGER,
    manhinh: DataTypes.STRING,
    HDH: DataTypes.STRING,
    cameraSau: DataTypes.STRING,
    cameraTruoc: DataTypes.STRING,
    chip: DataTypes.STRING,
    ram: DataTypes.STRING,
    bonho: DataTypes.STRING,
    pin: DataTypes.STRING,
    gia: DataTypes.INTEGER,
    avt: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'sanphams',
  });
  return sanphams;
};