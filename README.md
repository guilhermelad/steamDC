# Discord Steam Bot 🎮🔥

Um bot de Discord feito em Node.js que busca promoções da Steam e posta automaticamente no seu servidor!

## ✨ Funcionalidades

* 🔄 Busca promoções da Steam a cada 10 minutos
* 📢 Envia novas promoções no canal especificado
* 🕹️ Comando `!ultimas` para ver as últimas promoções manualmente

---

## 🚀 Como usar

1️⃣ **Clone o repositório**

```bash
git clone git@github.com:guilhermelad/steamDC.git
cd steamDC
```

2️⃣ **Instale as dependências**

```bash
npm install
```

3️⃣ **Configure o arquivo `.env`**

Crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```
TOKEN=seu_token_do_discord_aqui
CHANNEL_ID=id_do_canal_no_discord
```

### 🔧 O que colocar no `.env`

✅ **TOKEN** → Token do seu bot no Discord.
Pegue no [Discord Developer Portal](https://discord.com/developers/applications) → Seu App → Bot.

✅ **CHANNEL\_ID** → ID do canal onde o bot vai postar promoções.
Ative o modo desenvolvedor no Discord → Clique com botão direito no canal → Copiar ID.

> ⚠️ **Importante:** Nunca compartilhe ou suba o arquivo `.env` no GitHub!

4️⃣ **Rode o bot**

```bash
npm start
```

---

## 📦 Dependências

* [discord.js](https://www.npmjs.com/package/discord.js)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [node-fetch](https://www.npmjs.com/package/node-fetch)
