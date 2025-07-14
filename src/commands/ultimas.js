const steamService = require('../services/steamService');
const scheduler = require('../scheduler');

module.exports = {
  name: 'ultimas',
  async execute(message) {
    const promos = await steamService.getPromotions();
    const latest = promos.filter(p => scheduler.lastPromoIds.has(p.id)).slice(0, 5);

    if (latest.length === 0) {
      return message.reply('Sem promoções recentes no momento.');
    }

    let response = '🕹️ Últimas promoções enviadas:\n';
    latest.forEach(p => {
      response += `🎮 **${p.name}** - 💰 R$${p.price} (-${p.discount}%)\n🔗 ${p.url}\n\n`;
    });
    message.reply(response);
  },
};
