import { DataTypes, Model } from 'sequelize';
import sequelize from './index';

class Filter extends Model {
  declare id: number;
  declare name: string;
  declare source: string;
  declare category: string;
}

Filter.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  modelName: 'Filter',
  tableName: 'Filters',
  timestamps: false,
  sequelize: sequelize,
});

export default Filter;
