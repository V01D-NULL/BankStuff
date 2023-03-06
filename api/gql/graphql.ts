import { ApolloServer } from 'apollo-server-express';
import { loadResolvers, loadTypeDefinitions } from './loader';
import { IExpress } from 'types/express';

export default async (app: IExpress): Promise<void> => {
  const typeDefs = loadTypeDefinitions();
  const resolvers = loadResolvers();

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });
  console.log('started server');
};
