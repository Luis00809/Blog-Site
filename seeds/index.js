const sequelize = require('../config/connections');
const Blog = require('../models/Blog');
const blogData = require('./blog-seeds.json');
const Comment = require('../models/Comment');
const commentData = require('./comment-seeds.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Blog.bulkCreate(blogData, {
    individualHooks: true,
    returning: true,
  });

  await Comment.bulkCreate(commentData, {
    individualHooks: true,
    returning: true,
  })

  process.exit(0);
};


// const seedDatabase = async () => {
//   await sequelize.sync({ force: true });

//   const blog = await Blog.bulkCreate(blogData);
//   for (const {id} of blog) {
//     const newComment = await Comment.create({
//       blog_id: id,
//     })
//   }
  
//   process.exit(0);
// };



seedDatabase();