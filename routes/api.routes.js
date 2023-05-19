const express = require("express");
const router = express.Router();

const fs = require("fs");

router.get("/", (req, res) => {
  let data = JSON.parse(fs.readFileSync("./dev-data/users.json"));
  res.json(data);
});

//Doc mot du lieu theo id
router.get("/:id", (req, res) => {
  let { id } = req.params;
  try {
    let data = JSON.parse(fs.readFileSync("./dev-data/users.json"));

    let findData = data.find((e) => e.id === +id);
    if (findData) {
      res.json(findData);
    } else {
      res.json({ mess: "not found" });
    }
  } catch (error) {
    res.json(error);
  }
});
// Post
router.post("/", (req, res) => {
  let { player } = req.body;
  try {
    if (!player) {
      res.json({ mess: "khong hop le" });
    } else {
      let Result = {
        id: Math.floor(Math.random() * 9),
        player: player,
        round: {
          roundId: 1,
          score: 1,
        },
      };

      let data = JSON.parse(fs.readFileSync("./dev-data/users.json"));
      data.push(Result);
      fs.writeFileSync("./dev-data/users.json", JSON.stringify(data));
      res.json({ mess: "success" });
    }
  } catch (error) {
    res.json(error);
  }
});

// put

router.put("/:id", (req, res) => {
  let { id } = req.params;
  let { name } = req.body;

  try {
    let data = JSON.parse(fs.readFileSync("./dev-data/users.json"));
    let dataFindex = data.findIndex((e) => e.id === +id);

    if (dataFindex === -1) {
      res.json({ mess: "not found" });
    } else {
      data[dataFindex] = {
        ...data[dataFindex],
        name,
      };

      fs.writeFileSync("./dev-data/users.json", JSON.stringify(data));
      res.json({ mess: "success" });
    }
  } catch (error) {
    res.json(error);
  }
});

// delete

router.delete("/:id", (req, res) => {
  let { id } = req.params;
  try {
    let data = JSON.parse(fs.readFileSync("./dev-data/users.json"));
    let findDelete = data.filter((e) => e.id !== parseInt(id));
    fs.writeFileSync("./dev-data/users.json", JSON.stringify(findDelete));
    res.json({ mess: "success" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = router;
