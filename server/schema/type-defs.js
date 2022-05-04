const {gql} = require("apollo-server");

const typeDefs = gql`

    type User {
        id: ID!
        name: String!
        userName: String!
        age: Int!
        nationality: Nationality
        favouriteMovies: [Movie]
    }

    type Movie {
        id: ID!
        name: String!
        year: Int!
        released: Boolean!
    }

    input CreateUserInput {
        name: String!
        userName: String!
        age: Int!
        nationality: Nationality = India
    }

    input UpdateUserInput {
        id:ID!
        userName: String!
    }

    type Query {
        users: [User!]!
        user(id: ID): User
        movies: [Movie!]!
        movie(name: String): Movie
    }

    type Mutation {
        createUser(input: CreateUserInput!): User!
        updateUser(input:UpdateUserInput!): User!
    }

    enum Nationality {
        Canada
        India
        Russia
    }
`;

module.exports = { typeDefs}