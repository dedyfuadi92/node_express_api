import express from "express";
import { getAllMahasiswa, createMahasiswa, getOneMahasiswa, deleteOneMahasiswa } from "../controllers/mahasiswas.js";
const router = express.Router();
router.get('/', getAllMahasiswa);
router.post('/', createMahasiswa);
router.get('/:nim', getOneMahasiswa);
router.delete('/:id_mahasiswa', deleteOneMahasiswa);
// router.patch('/:id', updateOneMahasiswa);
export default router;