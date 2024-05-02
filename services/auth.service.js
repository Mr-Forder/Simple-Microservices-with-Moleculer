import { ServiceBroker } from "moleculer";
const broker = new ServiceBroker();

//Create a new user
const users = [];

broker.createService({
  name: "auth",
  actions: {
    async authUser(ctx) {
      const { name, password } = ctx.params;
      if (name === "admin" && password === "password") {
        return {
          success: true,
          message: "Auth successful",
        };
      } else {
        return {
          success: false,
          message: "Auth failed!",
        };
      }
    },
  },
});

export default broker;
