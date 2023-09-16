const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blog extends Model {}

Blog.int(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'blog',
    }
);

module.exports = Blog;