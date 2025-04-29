import Joi from 'joi';
import logger from '../utils/logger.js';
import { formatarNumero } from '../utils/numero.js'
import { enviarMensagemTexto } from '../services/w-api.js'

const schema = Joi.object({
  numero: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      'string.pattern.base': 'Número deve conter apenas dígitos e ter entre 10 e 15 caracteres.',
    }),
  mensagem: Joi.string()
    .max(1000)
    .required()
    .messages({
      'string.max': 'Mensagem não pode exceder 1000 caracteres.',
    }),
});

const enviar = async (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  const { numero, mensagem } = value;
  try {
    const numeroFormatado = formatarNumero(numero);
    const apiResponse = await enviarMensagemTexto(numeroFormatado, mensagem);
    res.status(200).json({ success: true, data: apiResponse });
  } catch (error) {
    logger.error('Erro ao enviar mensagem', { error: error.message, stack: error.stack });
    res.status(500).json({ success: false, error: error.message });
  }
};

export { enviar };
