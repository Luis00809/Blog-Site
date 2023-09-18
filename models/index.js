const Blog = require('./Blog');
const Comment = require('./Comment');

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
});

Comment.belongsTo(Blog, {
    foreignKey: 'id'
});

module.exports = { Blog, Comment };