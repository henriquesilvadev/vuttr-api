export default {
  Query: {
    tools: async (parent, args, { models: { ToolModel }}, info) => {
      const tools = await ToolModel.find({}).exec();
      return tools;
    },
  },
  Mutation: {
    createTool: async (parent, { title, link, description, tags }, { models: { ToolModel } }, info) => {
      const tool = await ToolModel.create({ title, link, description, tags });
      return tool;
    },
  },
};
