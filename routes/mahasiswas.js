import express from "express";
import { getAllMahasiswa, createMahasiswa } from "../controllers/mahasiswas.js";
const router = express.Router();
router.get('/', getAllMahasiswa);
router.post('/', createMahasiswa);
// router.get('/:id', getOneMahasiswa);
// router.delete('/:id', deleteOneMahasiswa);
// router.patch('/:id', updateOneMahasiswa);
export default router;