import express from "express";
import passport from "passport";
import { createCustomer, getCustomerDetails } from "../controllers/customer.js";

const router = express.Router();

// passport
const auth = passport.authenticate("jwt", { session: false });

router.post("/create", auth, createCustomer);
router.get("/profile", auth, getCustomerDetails);

export default router;
