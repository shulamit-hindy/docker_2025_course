import express from 'express';
import mysql from 'mysql2/promise';
import { authenticateJWT } from '../middleware/auth';

const router = express.Router();

router.get('/', authenticateJWT, async (_req, res) => {
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    });

    const [rows] = await connection.execute('SELECT * FROM ai_tools');
    res.json(rows);
});

export default router;
