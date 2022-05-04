const { ApolloServer} = require("apollo-server");
const {typeDefs} = require('./schema/type-defs');
const {resolvers} = require('./schema/resolvers')

const server = new ApolloServer({typeDefs,resolvers});

server.listen().then((result)=>{
    console.log("API is running "+result.url)
});