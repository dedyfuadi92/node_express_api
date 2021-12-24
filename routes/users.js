import express from "express";

import { createUser, deleteOneUser, getAllUser, getOneUser, updateOneUser } from "../controllers/users.js";

const router = express.Router();

router.get('/', getAllUser);
router.post('/', createUser);
router.get('/:id', getOneUser);
router.delete('/:id', deleteOneUser);
router.patch('/:id', updateOneUser);
export default router;