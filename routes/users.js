import express from "express";
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();
/* const users = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 25
    },
    {
        firstName: "John",
        lastName: "Doe",
        age: 24
    }
] */
let users = [];
router.get('/', (req, res) => {
    // console.log(users);
    /* res.send('Hello this is a users page generate by routes'); */
    res.send(users);
});
router.post('/', (req, res) => {
    // console.log('LOG POST ROUTES REACHED');
    // console.log(req.body);
    const user = req.body;
    // const userId = uuidv4();
    // const userWithId = { ...user, id: userId };
    // users.push(user);
    // users.push(userWithId);
    users.push({ ...user, id: uuidv4() });
    // res.send('SEND POST ROUTES REACHED');
    res.send(`User with the username ${user.firstName} added to the database`);
});
router.get('/:id', (req, res) => {
    // console.log(req.params);
    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    // res.send('THE GET ID ROUTE');
    // res.send(req.params);
    res.send(foundUser);
});
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with id ${id} has been deleted from the array`);
});
export default router;