# API de Envio de Mensagens

Esta é uma API Node.js construída com Express para envio de mensagens de texto via integração com a API externa `w-api`. A API permite enviar mensagens para números de telefone, formatando automaticamente números que não começam com o código de país `55`.

## Funcionalidades
- Envio de mensagens de texto para números de telefone.
- Formatação automática de números para incluir o código `55`.
- Tratamento de erros e respostas padronizadas.
- Configuração via variáveis de ambiente.
- Autenticação via Bearer Token.

## Tecnologias Utilizadas
- **Node.js**: Runtime JavaScript.
- **Express**: Framework para construção da API.
- **Axios**: Cliente HTTP para chamadas à API externa.
- **Dotenv**: Gerenciamento de variáveis de ambiente.

## Pré-requisitos
- Conta na plataforma `w-api` para obter `INSTANCE_ID` e `API_KEY`.
- Bearer Token para autenticação (fornecido manualmente).

## Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/JvitorAfb2004/api-whatsapp-w-api
   cd api-whatsapp-w-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
   ```env
   PORT=3000
   INSTANCE_ID=<SEU_INSTANCE_ID>
   API_KEY=<SEU_API_KEY>
   ```

4. Inicie o servidor:
   ```bash
   npm start
   ```


## Endpoints
### POST `/api/enviar`
Envia uma mensagem de texto para um número de telefone.

#### Corpo da Requisição
```json
{
  "numero": "557499835227",
  "mensagem": "Olá, esta é uma mensagem de teste!"
}
```

#### Resposta de Sucesso (200)
```json
{
  "success": true,
  "data": {
    "instanceId": "",
    "messageId": "",
    "insertedId": ""
  }
}
```

#### Resposta de Erro (400)
```json
{
  "success": false,
  "error": "Número e mensagem são obrigatórios."
}
```

#### Resposta de Erro (500)
```json
{
  "success": false,
  "error": "Erro ao enviar mensagem."
}
```

## Estrutura do Projeto
```
├── controllers/
│   └── EnvioController.js  # Lógica do endpoint de envio
├── routes/
│   └── Envio.js           # Definição das rotas
├── services/
│   └── w-api.js           # Integração com a API externa
├── utils/
│   └── numero.js          # Funções utilitárias
├── index.js               # Ponto de entrada da aplicação
├── .env                   # Variáveis de ambiente
└── README.md              # Documentação
```

## Autor
Desenvolvido por **João Vitor**  
Site: [jvitor.tech](https://jvitor.tech)

