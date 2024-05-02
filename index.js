import { ServiceBroker } from "moleculer";

const broker = new ServiceBroker();

//Create a service that greets users, with broker object
broker.createService({
  name: "greeter",
  actions: {
    sayHello(ctx) {
      return `hello, ${ctx.params.name}`;
    },
  },
});

async function startApp() {
  await broker.start();
  //call our greeter's say hello method, passing in a name as ctx.
  const res = await broker.call("greeter.sayHello", { name: "Bobby Darren" });
  console.log(res);
  broker.stop();
}

startApp();
