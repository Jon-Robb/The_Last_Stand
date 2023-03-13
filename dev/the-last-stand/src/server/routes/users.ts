import express from 'express';
import { createUser, deleteUserByEmail, updateUserByEmail, readUsers, readUserByEmail, readCurrentUser } from '../controllers/users';
import { isAuthenticated } from '../controllers/auth';

const usersRouter = express.Router();

// DELETE a player
usersRouter.delete('/:email', deleteUserByEmail);

// GET current user
usersRouter.get('/current', isAuthenticated, readCurrentUser);

// GET all players
usersRouter.get('/', readUsers);

// GET one player
usersRouter.get('/:email', readUserByEmail);

// UPDATE a player
usersRouter.patch('/:email', updateUserByEmail);

// POST a new player
usersRouter.post('/', createUser);

export default usersRouter;