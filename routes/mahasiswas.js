import express from "express";
import { getAllMahasiswa, createMahasiswa, getOneMahasiswa, deleteOneMahasiswa, updateOneMahasiswa } from "../controllers/mahasiswas.js";
const router = express.Router();
router.get('/', getAllMahasiswa);
router.post('/', createMahasiswa);
router.get('/:nim', getOneMahasiswa);
router.delete('/:id_mahasiswa', deleteOneMahasiswa);
router.patch('/:id_mahasiswa', updateOneMahasiswa);
export default router;