import express from "express";
import passport from "passport";
import { addAddress, getAddress } from "../controllers/address.js";

const router = express.Router();

// passport
const auth = passport.authenticate("jwt", { session: false });

router.post("/create", auth, addAddress);
router.get("/view", auth, getAddress);

export default router;
