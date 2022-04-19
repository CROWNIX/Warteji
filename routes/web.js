import express from "express";

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
    res.send("welcome");
});

export default router;
