const axios = require("axios").default;
const faker = require("faker");
const getUser = async name => {
  try {
    const headers = {
      "Content-Type": "application/json"
    };
    const url = "http://127.0.0.1:3000/api/v1/memories";
    const response = await axios({
      method: "POST",
      url: url,
      data: {
        name: name
      }
    });

    // console.log("1111111111");
  } catch (error) {
    console.log("2222222222222", error);
  }
};

insertUsers = () => {
  for (let i = 0; i <= 2000; i++) {
    const name = faker.name.findName();
    getUser(name);
  }
};

insertUsers();
