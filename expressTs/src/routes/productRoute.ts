import { Router } from "express";
import { createProduct, getAllproduct, getProductbyId, updateProduct, deleteProduct } from "../controllers/productControler";
const router = Router();

router.post('/', createProduct);
router.get('/', getAllproduct);
router.get('/:id', getProductbyId);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

export default router;