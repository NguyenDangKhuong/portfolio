import { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } from "graphql";
import Query from "./types/Query";
import Mutation from "./types/Mutation";

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  field: {
    page: {
      type: new GraphQLList(PageType),
      resolve(parent, args){
        
      }
    }
  }
})

export default Schema;