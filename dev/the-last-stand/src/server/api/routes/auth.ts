import express from 'express';
import passport from 'passport';
import { checkAuth } from '../controllers/auth';
import dotenv from 'dotenv';
dotenv.config();
const { CLIENT_URL, CLIENT_PORT } = process.env;

const authRouter = express.Router();

authRouter.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

authRouter.get(
  '/google/callback',
  passport.authenticate('google', {
    successRedirect: `${CLIENT_URL}:${CLIENT_PORT}/home`,
    failureRedirect: `${CLIENT_URL}:${CLIENT_PORT}/login`,
    //successRedirect: `http://localhost:5173/home`,
    //failureRedirect: 'http://localhost:5173/login',
  })
);

authRouter.get('/check', checkAuth);

authRouter.post('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    //res.redirect('/');
    console.log('redirecting to: ', `${CLIENT_URL}:${CLIENT_PORT}/`);
    res.redirect(`${CLIENT_URL}:${CLIENT_PORT}/`);
  });
});

export default authRouter;
