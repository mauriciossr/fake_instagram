const { sequelize, Post } = require('../models');

Post.findAll({ include: 'comentario' }).then((data) => {
  console.log(data.map((u) => u.toJSON()));
  sequelize.close();
});
