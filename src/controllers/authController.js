import { Router } from "express";
import authService from "../services/authService.js";

const router = Router();

router.get('/register',(req,res) => {
    res.render('auth/register');
});

router.get('/login',(req,res) => {
    res.render('auth/login');
});

router.post('/register',async (req,res) => { 
    const userData = req.body;
    await authService.register(userData);
    res.redirect('/auth/login');
});

router.post('/login',async (req,res) => { 
    const {email,password} = req.body;
    try{
        const token = await authService.login(email,password);
        res.cookie('auth',token,{httpOnly: true});
        res.redirect('/');
    }catch(err){
        console.log(err.message);
        res.redirect('/404')
    }
});

router.get('/logout',(req,res) => {
    res.clearCookie('auth');
    res.redirect('/');
});


export default router;