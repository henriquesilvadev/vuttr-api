import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';

import schemas from './schemas';
import resolvers from './resolvers';

import ToolModel from './models/tool-model';

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers,
  context: async ({ req }) => {
    if (req) {
      return {
        models: {
          ToolModel,
        },
      };
    }
  },
});

server.applyMiddleware({ app, path: '/' });

app.listen(3000, () => {
  mongoose.connect('mongodb://127.0.0.1:27017/vuttr');
});
