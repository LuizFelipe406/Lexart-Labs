import { DataTypes, Model } from 'sequelize';
import Filter from './Filter';
import sequelize from './index';

class Product extends Model {
  declare id: string;
  declare filterId: number;
  declare description: string;
  declare photo: string;
  declare price: string;
  declare category: string;
  declare website: string;
}

Product.init({
  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false
  },
  filterId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  photo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  modelName: 'Product',
  tableName: 'Products',
  timestamps: false,
  sequelize: sequelize,
  underscored: true,
});

export default Product;

Filter.hasMany(Product, { foreignKey: 'filterId', as: 'filter' })

Product.belongsTo(Filter, { foreignKey: 'filterId', as: 'filter' })