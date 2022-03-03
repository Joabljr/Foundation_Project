const db = require("./db/database");
const PORT = 5500;
const app = require("./app");
const seed = require("../seed");

const init = async () => {
  try {
    await db.sync();
    app.listen(PORT, () => {
      console.log(`Server is up and running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

init();
