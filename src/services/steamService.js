const fetch = (...args) => import('node-fetch').then(mod => mod.default(...args));

async function getPromotions() {
  const res = await fetch('https://store.steampowered.com/api/featuredcategories');
  const data = await res.json();

  return data.specials.items.map(game => ({
    id: game.id,
    name: game.name,
    price: game.final_price / 100,
    discount: game.discount_percent,
    url: `https://store.steampowered.com/app/${game.id}/`,
  }));
}


module.exports = { getPromotions };
