import { ServiceBroker } from "moleculer";
const broker = new ServiceBroker();

function generateId() {
  return Math.floor(Math.random() * 1000 + 1);
}

//Create a new user
const users = [];

broker.createService({
  name: "email",
  actions: {
    async sendEmail(ctx) {
      const { recipient, subject, content } = ctx.params;
      //Simulate email logic
      console.log(`Sending email to ${recipient} with the subject: ${subject}`);
      console.log(`Content: ${content}`);
      return `email sent to ${recipient}`;
    },
  },
});

export default broker;
