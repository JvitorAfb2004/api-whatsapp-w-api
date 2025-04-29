import express from 'express';
import dotenv from 'dotenv';
import envioRoutes from './routes/Envio.js';
import rateLimit from 'express-rate-limit';


dotenv.config();

const app = express();
const port = process.env.PORT;

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100, 
});
  
app.use(limiter);
  
app.use(express.json());
app.use('/api', envioRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
