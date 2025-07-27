import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRoutes from './routes/auth';
import aiToolsRoutes from './routes/aiTools';

dotenv.config();
const app = express();
app.use(cors());
app.use(morgan('combined'));
app.use(bodyParser.json());

app.use('/', express.static('public'));
app.use('/login', authRoutes);
app.use('/ai-tools', aiToolsRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));