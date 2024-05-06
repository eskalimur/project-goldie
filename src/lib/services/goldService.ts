const goldItems = [
	{
		name: 'Gold Bar',
		weight: 10,
		img: 'gold-bars.png',
		url: 'GoldBar'
	},
	{
		name: 'Gold Coin',
		weight: 1,
		img: 'coin.png',
		url: 'GoldCoin'
	},
	{
		name: 'Gold Nugget',
		weight: 0.1,
		img: 'gold-nugget.png',
		url: 'GoldNugget'
	},
	{
		name: 'Gold Ingot',
		weight: 5,
		img: 'ingot.png',
		url: 'GoldIngot'
	},
	{
		name: 'Gold Ring',
		weight: 0.2,
		img: 'ring(1).png',
		url: 'GoldRing'
	},
	{
		name: 'Gold Bracelet',
		weight: 0.3,
		img: 'bangle.png',
		url: 'GoldBracelet'
	},
	{
		name: 'Gold Necklace',
		weight: 0.4,
		img: 'chains.png',
		url: 'GoldNecklace'
	}
];

let currentGoldItems = goldItems;

export const getGoldItems = () => {
	console.log(currentGoldItems);

	return currentGoldItems;
};

export const addGoldItem = (item: any) => {
	currentGoldItems.push(item);
};

export const removeGoldItem = (name: string) => {
	console.log(name);

	console.log(currentGoldItems);
	let removeIndex = currentGoldItems.findIndex((item) => item.name === name);
	console.log(removeIndex, currentGoldItems.splice(removeIndex, 1));
	console.log(currentGoldItems);
};

export const updateGoldItem = (name: string, item: any) => {
	let updateIndex = currentGoldItems.findIndex((item) => item.name === name);
	currentGoldItems[updateIndex] = item;
};

export const getGoldItem = (name: string) => {
	return goldItems.find((item) => item.url === name);
};
