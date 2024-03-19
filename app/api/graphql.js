import { ApolloServer } from "@apollo/server"; 

import { startServerAndCreateNextHandler } from "@as-integrations/next"; 
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import typeDefs from '@/graphql/'
import allowCors from "../../src/utils/cors";
import resolvers from "../../src/graphql/resolvers";
const apolloServer = new ApolloServer({
    typeDefs,
    resolvers, 
    plugins: []
})

const handler = startServerAndCreateNextHandler(apolloServer, {
    context: async (req, res) => ({req, res})
})

export default allowCors(handler)