const goldItems = [
    {
        name: 'Gold Bar',
        weight: 10,
        img: '../src/lib/images/gold-bars.png',
        url: 'GoldBar'
    },
    {
        name: 'Gold Coin',
        weight: 1,
        img: '../src/lib/images/coin.png',
        url: 'GoldCoin'
    },
    {
        name: 'Gold Nugget',
        weight: 0.1,
        img: '../src/lib/images/gold-nugget.png',
        url: 'GoldNugget'
    },
    {
        name: 'Gold Ingot',
        weight: 5,
        img: '../src/lib/images/ingot.png',
        url: 'GoldIngot'
    },
    {
        name: 'Gold Ring',
        weight: 0.2,
        img: '../src/lib/images/ring(1).png',
        url: 'GoldRing'
    },
    {
        name: 'Gold Bracelet',
        weight: 0.3,
        img: '../src/lib/images/bangle.png',
        url: 'GoldBracelet'
    },
    {
        name: 'Gold Necklace',
        weight: 0.4,
        img: '../src/lib/images/chains.png',
        url: 'GoldNecklace'
    }
]

let currentGoldItems = goldItems;

export const getGoldItems = () => {
    return currentGoldItems;
}

export const addGoldItem = (item: any) => {
    currentGoldItems.push(item);
}

export const removeGoldItem = (name: string) => {
    console.log(name);
    
    console.log(currentGoldItems);
    let removeIndex = currentGoldItems.findIndex((item) => item.name === name);
    console.log(removeIndex,currentGoldItems.splice(removeIndex, 1));
    console.log(currentGoldItems);
    
}

export const updateGoldItem = (name: string, item: any) => {
    let updateIndex = currentGoldItems.findIndex((item) => item.name === name);
    currentGoldItems[updateIndex] = item;
}

export const getGoldItem = (name: string) => {
    return goldItems.find((item) => item.url === name);
}