const express = require("express");
const port = process.env.APP_PORT || 3212;
const app = express();

const router = express.Router();

app.use(
  router.get("/tes", async (req, res) => {
    res.status(200).json({ metadata: "test get data endpoint" });
  })
);

app.listen(port, () => console.log(`server runing on port ${port}`));
