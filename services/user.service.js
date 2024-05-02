import { ServiceBroker } from "moleculer";
const broker = new ServiceBroker();

function generateId() {
  return Math.floor(Math.random() * 1000 + 1);
}

//Create a new user
const users = [];

broker.createService({
  name: "user",
  actions: {
    //CREATE A USER
    async createUser(ctx) {
      const { name, email } = ctx.params;
      const newUser = { id: generateId(), name, email };
      users.push(newUser);
      return newUser;
    },
    //GET ALL USERS
    async getUsers(ctx) {
      return users;
    },
  },
});

export default broker;
