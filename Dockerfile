# Use uma imagem base do Node.js
FROM node:20.17.0

# Define o diretório de trabalho no container
WORKDIR /src/app

# Copia o arquivo package.json e o package-lock.json para instalar as dependências
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante dos arquivos para o diretório de trabalho no container
COPY . .

# Compila o projeto Next.js# Etapa para rodar o linter e verificar a formatação
RUN npm run lint

RUN npm run build

# Expõe a porta padrão do Next.js
EXPOSE 3000

# Define o comando para iniciar o aplicativo
CMD ["npm", "run", "start"]
