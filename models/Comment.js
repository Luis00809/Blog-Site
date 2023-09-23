const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');
const Blog = require('./Blog');

class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true, 
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blog_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'blog',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }
);

// Comment.belongsTo(Blog, {
//     foreignKey: 'blog_id',
//     onDelete: 'CASCADE',
//   });

// add the if helper to handlebar so if comment then display

module.exports = Comment;

