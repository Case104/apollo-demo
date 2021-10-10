# Review Basics

GraphQL is a query language for specifiing what data you would like to retrieve from an API. It sits as a data layer between your front end and back end.

The general idea is to allow the consumer (front end) to request exactly what it needs from the back end.

It works in two primary methods, queries and mutations. Requests are made to a single endpoint, using GQL to fetch exactly what you need.

## Data Types

GQL is a typed language that has 5 primative types called **Scalars**. You can also create your own scalers.

- Scalers
  - ID
  - String
  - Int
  - Float
  - Boolean

You define your own types within a GQL schema, which can be used and extended within other types, or even itself.

```
type User {
    id: ID!
    name: String!
    age: Int!
    height: Float!
    isMarried: Boolean
    friends: [User!]
    videosPosted: [Video]

    type Video {
        id: ID!
        title: String!
        description: String!
    }
}
```

### The **!** denotes that the value for the field cannot be null. aka **Required**

`friends: [User!]`
: an array of objects that are all Users, or null.

`friends: [User]!`
: an array of objects that can be Users or null, but will be an array.

`friends: [User!]!`
: an array User objects. Both the individual users and the overall data will not be null.

## Queries

Queries are types that are used to fetch data from the API. They can take arguments to filter results.

```
type Query {
    users: [User]
    user(id: ID): User
}
```

An alias to this pattern is to break the parameters into an input.

```
input UserInput {
    id: ID
    name: String
}

type Query {
    users: [User]
    user(input: UserInput): User
}
```

Once you have defined your queries, you call them by supplying the arguments and specifiying the fields that you would like to retrieve.

```
{
    user() {
        name
        age
    }
}
```

## Mutations

Mutation
:

# Apollo

## ApolloServer

ApolloServer is the "batteries-included" package to install on your server to get started. Its configured with helpful defaults and is built on express. When advanced configuration is required, you may need to use apollo-server-express instead. There are also server configurations that are particular to a serverless environment, or node framework.

```
const { ApolloServer } = requuire("apollo-server");

const server = new ApolloServer({ typeDefs, resolvers });
```

ApolloServer takes two required parameters (unless you supply a schema directly), **_typeDefs_** and **_resolvers_**.

### typeDefs

typeDefs are your gql type schema that you feed to apollo server so that it knows what fields exist, and their types / relations.

```
const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: String!
  }

  type Query {
    users: [User!]!
  }
`;

module.exports = { typeDefs };
```

### Resolvers

Resolves serve to tell ApolloServer what actions need to be performed to fetch the data for each query/action. In the example below, UserList is an array of User objects. We are telling our server that when it recieves the users query, it should return that data. Resolvers can be used to query apis, make SQL statements, anything to be fufilled when that action is specified to the server. Almost like redux reducers.

```
const { UserList } = require("../FakeData");

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};

module.exports = { resolvers };
```

# Links

- [Job](https://www.apollographql.com/careers/job?id=eb28a876-d163-4532-bf36-18c3f0c3f89e)
- [Tutorial](https://www.youtube.com/watch?v=cjl3ToMTrs0)
