import express from "express";
import { create, login, profile } from "../controller/controller.js";
const router = express.Router();

    router.post('/create',create);
    router.post('/login',login);
    router.get('/profile/:id',profile);


export default router;
