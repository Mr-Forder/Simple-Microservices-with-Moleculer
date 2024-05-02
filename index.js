import { ServiceBroker } from "moleculer";
import UserService from "./services/user.service.js";
import EmailService from "./services/email.service.js";

const broker = new ServiceBroker();

async function startApp() {
  //Start services
  await UserService.start();
  await EmailService.start();
  try {
    //Simulate user creation
    const newUser = await UserService.call("user.createUser", {
      name: "Dave",
      email: "dave@gmail.com",
    });
    console.log("User created: ", newUser);
    const users = await UserService.call("user.getUsers");
    console.log("All users:", users);
    //Simulate sending email
    const emailResult = await EmailService.call("email.sendEmail", {
      recipient: newUser.email,
      subject: "Welcome!",
      content: "Thanks for signing up!",
    });
    console.log(emailResult);
  } catch (err) {
    console.log(err);
  } finally {
    await UserService.stop();
  }
}

startApp();
