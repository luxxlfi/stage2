import { Router } from "express";
import { hallo, profile, login } from "../controllers/userController";

const router = Router();


router.get('/halloo', hallo);
router.get('/profile/:name', profile);
router.post('/login', login)

export default router;