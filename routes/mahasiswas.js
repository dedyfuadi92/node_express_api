import express from "express";
import { getAllMahasiswa } from "../controllers/mahasiswas.js";
const router = express.Router();
router.get('/', getAllMahasiswa);
export default router;