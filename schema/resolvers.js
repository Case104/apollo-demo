const { UserList, MovieList } = require("../FakeData");

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (_, args) => {
      return UserList.find((user) => {
        return user.id === Number(args.id);
      });
    },
    movies: () => {
      return MovieList;
    },
    movie: (_, args) => {
      return MovieList.find((movie) => movie.name === args.name);
    },
  },
  User: {
    favoriteMovies: (parent) => {
      return MovieList.filter((movie) =>
        parent.favoriteMovies.includes(movie.id)
      );
    },
  },
};

module.exports = { resolvers };
