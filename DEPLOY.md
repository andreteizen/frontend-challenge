# Instruções para Deploy

Este documento descreve como fazer o deploy da aplicação **Marketplace de NFTs** em um serviço de hospedagem, como Vercel ou Netlify.

## Deploy na Vercel

A **Vercel** é recomendada para aplicações **Next.js**, pois possui integração nativa com a framework, facilitando o processo de deploy.

### Passos para Deploy na Vercel

1. **Crie uma conta na Vercel** se você ainda não possui uma: [https://vercel.com/signup](https://vercel.com/signup)

2. **Conecte o repositório GitHub**:

   - Após fazer login na Vercel, clique em "New Project" e conecte sua conta GitHub.
   - Selecione o repositório do projeto **Marketplace de NFTs**.

3. **Deploy automático:**
    - Após conectar o repositório, a Vercel automaticamente detectará a configuração do projeto Next.js e iniciará o processo de build e deploy.

4. **Acesso à aplicação:** 
    - Assim que o deploy for finalizado, você receberá um link para acessar a aplicação online. A Vercel também gerencia pushs futuros para o repositório, fazendo o redeploy automaticamente.

### Deploy no Docker:
Caso prefira hospedar a aplicação em um servidor manualmente utilizando Docker, siga os passos abaixo.

####    Passos para Deploy com Docker

1. **Construir a imagem Docker:**
No servidor, clone o repositório e navegue até a pasta do projeto:

```bash
git clone https://github.com/andreteizen/frontend-challenge.git marketplace-nfts
cd marketplace-nfts
```

Em seguida, construa a imagem Docker:
```bash
docker-compose build
```

2. **Rodar a aplicação:** Após a construção da imagem, inicie os containers:
```bash
docker-compose up -d
```

3.**Acessar a aplicação:**
A aplicação estará disponível no endereço configurado no servidor, como http://localhost:3000 ou o IP do servidor.

