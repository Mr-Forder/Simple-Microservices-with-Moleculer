import UserService from "./services/user.service.js";
import EmailService from "./services/email.service.js";
import AuthService from "./services/auth.service.js";

async function startApp() {
  //Start services
  await UserService.start();
  await EmailService.start();
  await AuthService.start();
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
    //Simulate auth flow
    const authResult = await AuthService.call("auth.authUser", {
      name: newUser.name,
      password: "password",
    });
    console.log("Auth Result:", authResult);
  } catch (err) {
    console.log(err);
  } finally {
    await UserService.stop();
    await EmailService.stop();
    await AuthService.stop();
  }
}

startApp();
