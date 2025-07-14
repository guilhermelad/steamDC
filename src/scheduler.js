const steamService = require('./services/steamService');
const logger = require('./utils/logger');

let lastPromoIds = new Set();

async function checkForNewPromotions(client) {
  try {
    const promos = await steamService.getPromotions();
    const newPromos = promos.filter(p => !lastPromoIds.has(p.id));

    if (newPromos.length > 0) {
      const channel = await client.channels.fetch(process.env.CHANNEL_ID);

      for (const p of newPromos) {
        const message = `🔥 **${p.name}**\n💰 R$${p.price} (-${p.discount}%)\n🔗 ${p.url}`;
        await channel.send(message);
        lastPromoIds.add(p.id);
      }
      logger.success(`Enviadas ${newPromos.length} novas promoções!`);
    } else {
      logger.info('Nenhuma nova promoção encontrada.');
    }
  } catch (error) {
    logger.error('Erro ao buscar promoções:', error);
  }
}

function start(client) {
  checkForNewPromotions(client);
  setInterval(() => checkForNewPromotions(client), 600000); // 10 min
}

module.exports = { start, lastPromoIds };
