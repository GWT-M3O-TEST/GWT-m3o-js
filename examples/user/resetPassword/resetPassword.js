const { UserService } = require("m3o/user");

// Reset password with the code sent by the "SendPasswordResetEmail" endoint.
async function resetPassword() {
  let userService = new UserService(process.env.M3O_API_TOKEN);
  let rsp = await userService.resetPassword({
    code: "some-code-from-email",
    confirmPassword: "newpass123",
    email: "joe@example.com",
    newPassword: "newpass123",
  });
  console.log(rsp);
}

resetPassword();
