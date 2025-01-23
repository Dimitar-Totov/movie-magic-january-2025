import { Router } from "express";
import Cast from "../models/Cast.js";

const router = Router();

router.get('/create',(req,res) => {
    res.render('cast/cast-create');
});

router.post('/create',async(req,res) => {
    const data = req.body;
    await Cast.create(data);
    res.redirect('/');
});

export default router;
