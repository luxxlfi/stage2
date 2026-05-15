import { Router } from "express";
import { hallo, profile, login } from "../controllers/userController";

const router = Router();


router.get('/', hallo);
router.get('/:name', profile);
router.post('/login', login)

export default router;