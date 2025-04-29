import logger from '../utils/logger.js'; 

const Auth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (!token || token !== process.env.BEARER_TOKEN) {
        console.error(`Tentativa de acesso não autorizada: Token=${token || 'não fornecido'}`);
        logger.error(`Tentativa de acesso não autorizada: Token=${token || 'não fornecido'}`);
      return res.status(401).json({ success: false, error: 'Token Bearer inválido ou não fornecido.' });
    }
  
    next();
  };
  
export default Auth;