import { GraphQLSchema } from "graphql";
import Query from "./types/Query";
import Mutation from "./types/Mutation";

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

export default Schema;