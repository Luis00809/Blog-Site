const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const Comment = require('./Comment');
class Blog extends Model {}


Blog.init(
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
        user_Name: {
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

// Blog.hasMany(Comment, {
//     foreignKey: 'blog_id',
//     onDelete: 'CASCADE',
//   });

module.exports = Blog;