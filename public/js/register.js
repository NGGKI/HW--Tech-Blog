const addUser = async (data) => {
  try {
    const response = await fetch("/api/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    response.sendstatus(200);
  } catch (err) {
    return err;
  }
};

document.getElementById("register").addEventListener("click", (event) => {
  event.preventDefault();
  let newUser = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  addUser(newUser);
  alert("You successfully created an account");
  document.location.replace("/index.html");
});
