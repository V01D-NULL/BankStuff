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

  globSync('./gql/resolvers/*.ts').forEach(function (file) {
    const newResolver = import(path.resolve(file));
    resolvers = { ...resolvers, ...newResolver };
  });

  return resolvers;
};
