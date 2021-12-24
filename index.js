import express from "express";
import bodyParser from "body-parser";
import usersRoutes from './routes/users.js';
import mahasiswasRoutes from './routes/mahasiswas.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use('/users', usersRoutes);
app.use('/mahasiswas', mahasiswasRoutes);

app.listen(PORT, () => console.log(`Server Running on port http://localhost:${PORT}`));

/* app.get('/', (req, res) => {
    console.log('[TEST]!');
    res.send('Hello from homepage');
}); */

app.get('/', (req, res) => res.send('Hello from homepage!'));