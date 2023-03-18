import { gql } from 'apollo-server-express';
import type { DocumentNode } from 'graphql';
import { globSync } from 'glob';
import path from 'path';
import { readFilesFromDisk } from '../util/file-io';

// GraphQL types
export const loadTypeDefinitions = (): DocumentNode => {
  const files: Array<string> = readFilesFromDisk('./gql/types/');
  const types = files.join(' ');

  const typeDefs = gql`
    ${types}
  `;
  return typeDefs;
};

export const loadResolvers = (): {} => {
  let resolvers = {};

  const files = globSync('./gql/resolvers/*.ts');
  for (let file of files) {
    const newResolver = require(path.resolve(file));
    resolvers = { ...resolvers, ...newResolver };
  }

  // @ts-ignore
  const { BankAccount } = resolvers;

  //@ts-ignore
  delete resolvers.BankAccount;

  return {
    Query: {
      ...resolvers,
    },
    BankAccount,
  };
};
