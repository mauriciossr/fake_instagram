const Post = (sequelize, DataTypes) => {
  return sequelize.define(
    'Post',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      texto: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      usuarios_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      n_likes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        default: 0,
      },
    },
    {
      tableName: 'posts',
      timestamps: false,
    }
  );
};

module.exports = Post;
