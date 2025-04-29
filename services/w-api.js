import axios from 'axios';
import axiosRetry from 'axios-retry';


axiosRetry(axios, {
    retries: 3,
    retryDelay: (retryCount) => retryCount * 1000, // 1s, 2s, 3s
    retryCondition: (error) => error.response?.status >= 500,
});
  
const enviarMensagemTexto = async (numero, mensagem) => {
  const instanceId = process.env.INSTANCE_ID;
  const apiKey = process.env.API_KEY;

  if (!instanceId || !apiKey) {
    throw new Error('INSTANCE_ID não configurado nas variáveis de ambiente.');
  }

  const url = `https://api.w-api.app/v1/message/send-text?instanceId=${instanceId}`;

  const data = {
    phone: numero,
    message: mensagem,
    delayMessage: 3,
  };

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`,
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar mensagem:', error.response ? error.response.data : error.message);
    throw error;
  }
};

export { enviarMensagemTexto };
