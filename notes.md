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

### The **!** denotes that the value for the field cannot be null.

`friends: [User!]`
: an array of objects that are all Users, or null.

`friends: [User]!`
: an array of objects that can be Users or null, but will be an array.

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

Query
:

## Mutations

Mutation
:

# Links

- [Job](https://www.apollographql.com/careers/job?id=eb28a876-d163-4532-bf36-18c3f0c3f89e)
- [Tutorial](https://www.youtube.com/watch?v=cjl3ToMTrs0)
