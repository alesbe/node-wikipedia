const axios = require("axios");

axios
  .get("/backend")
  .then((res) => {
    return res;
  })
  .catch((err) => {
    return err;
  });
