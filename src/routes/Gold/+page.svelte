<script lang="ts">
	import Card from './card.svelte';

	let { data } = $props();
	let goldData = data?.data.data;
	let goldprice = goldData?.metals?.gold ?? 2020;

	let goldItems = [
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
	].sort((a, b) => a.weight - b.weight);
</script>

<svelte:head>
	<title>Goldie - Gold Prices</title>
</svelte:head>

<div class="m-8">
	<div>
		<h1 class="text-2xl font-bold m-4">
			Gold Price: {goldprice.toLocaleString('en', {
				notation: 'standard',
				compactDisplay: 'long'
			})},- USD
		</h1>
	</div>
	<div class="grid grid-cols-2 gap-4">
		{#each goldItems as item}
			<Card {item} {goldprice}></Card>
		{/each}
	</div>
	<a href="https://www.flaticon.com/free-icons/" title=" icons"
		>Icons created by surang - Flaticon</a
	>
</div>
