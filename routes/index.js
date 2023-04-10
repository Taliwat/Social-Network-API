const router = require("express").Router();

const users = require("./api/user-routes")
const thoughts = require("./api/thought-routes")

router.use("/api", users)
router.use("/api", thoughts)

router.use((req, res) => {
    res.status(404).send(`<h1>Wrong Route!!</h1>`)
})

module.exports = router