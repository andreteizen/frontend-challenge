# Marketplace de NFTs - Front-End Application

Este projeto é um marketplace de NFTs, desenvolvido utilizando **Next.js**, **React Query**, **Redux**, **Framer**, **SASS** e configurado com **Docker** e **Docker Compose**. O objetivo é fornecer uma interface amigável e funcional que permite a visualização e compra de NFTs com a funcionalidade de carrinho de compras.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de aplicações web.
- **React Query**: Biblioteca para busca, cache e sincronização de dados.
- **Redux**: Gerenciamento de estado global da aplicação.
- **Framer Motion**: Para animações e interações suaves.
- **SASS**: Preprocessador CSS para estilização modular e reutilizável.
- **Docker e Docker Compose**: Para configuração e orquestração do ambiente de desenvolvimento.

## Funcionalidades

- Exibição de NFTs disponíveis no marketplace.
- Funcionalidade de carrinho de compras.
- Gerenciamento de estado global com Redux.
- Busca e cache de dados via React Query.
- Animações suaves e interações com Framer Motion.
- Estilização modular com SASS.

## Requisitos

- **Node.js** (v16 ou superior)
- **Docker** (para configuração do ambiente de desenvolvimento)
- **Docker Compose**

## Instalação e Configuração

### Passos para rodar localmente

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/andreteizen/frontend-challenge.git marketplace-nfts
   cd marketplace-nfts
   ```

2. **Instale as dependências:**
    ```bash
        npm install
    ```

3. **Rodar a aplicação em modo de desenvolvimento:**
    ```bash
        npm run dev
    ```

4. **Acesse a aplicação:** Acesse a aplicação localmente em http://localhost:3000.


### Utilizando Docker

1. **Construir a imagem Docker:**

   ```bash
   docker-compose build
   ```

2. **Rodar os containers:**
    ```bash
    docker-compose up
    ```

3. **Acesse a aplicação:** Acesse a aplicação localmente em http://localhost:3000.



### Estrutura do projeto
├── public/               # Arquivos públicos (imagens, favicon, etc.)
├── Dockerfile            # Configuração do Docker
├── docker-compose.yml    # Configuração do Docker Compose
├── README.md             # Documentação do projeto
└── src
    ├── components/           # Componentes reutilizáveis da aplicação
    ├── app/                # Páginas da aplicação (Next.js)
    ├── redux/                # Configuração e reducers do Redux
    ├── styles/               # Arquivos de estilo SASS