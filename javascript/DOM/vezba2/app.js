let email = document.getElementById("email");
let name = document.getElementById("name");
let password = document.getElementById("password");
let username = document.getElementById("username");

var btn = document.getElementById("sub");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const user = {
    email: e.target.form[0].value,
    name: e.target.form[1].value,
    password: e.target.form[2].value,
    username: e.target.form[3].value,
  };
  console.log(user);
  // fetch("https://serene-fortress-45917.herokuapp.com/v1/auth/signup", {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "aplication/json",
  //       },
  //       body: JSON.stringify(user)
  //     })
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((data) => console.log(data))
  //       .catch((error) => console.log("ERROR"));

  fetch("https://serene-fortress-45917.herokuapp.com/v1/auth/signup", {
    method: "POST",
    body: JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1 
    }),
    headers: {
      "Content-type": "aplication/json; charset=UTF-8"
    },
    body: JSON.stringify(user),
  })
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log("ERROR"));
});
