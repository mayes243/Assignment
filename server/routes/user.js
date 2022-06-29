import express from "express";
import fileUpload from "express-fileupload";
import passport from "passport";

const router = express.Router();

import { googleSignin, signin, signup } from "../controllers/user.js";
import {
  fileExtLimiter,
  fileSizeLimiter,
  filesPayloadExists,
} from "../middleware/FileHandler.js";
import { IMAGE_EXTENSIONS } from "../utils/index.js";

const auth = passport.authenticate("jwt", { session: false });

router.post("/signin", signin);

router.post("/auth/google", googleSignin);

router.post(
  "/signup",
  fileUpload({ createParentPath: true }),
  filesPayloadExists,
  fileExtLimiter(IMAGE_EXTENSIONS),
  fileSizeLimiter,
  signup
);

export default router;
