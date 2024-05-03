<script lang="ts">
	import Card from './card.svelte';

	let { data } = $props();
	let goldData = data?.data.priceData;
	let goldprice = goldData?.metals?.gold ?? 2020;
	let items$ = $derived(data.data.itemData);
</script>

<svelte:head>
	<title>Goldie - Gold Prices</title>
</svelte:head>

<div class="mx-8 my-2">
	<div class="flex flex-row">
		<h1 class="text-3xl font-bold m-4 text-blue-800">Gold Price:</h1>
		<h1 class="text-3xl font-bold m-4 text-gray-800">
			{goldprice.toLocaleString('en', {
				notation: 'standard',
				compactDisplay: 'long'
			})},- USD
		</h1>
	</div>
	<div class="grid grid-cols-2 gap-4">
		{#each items$ as item}
			<Card {item} {goldprice}></Card>
		{/each}
	</div>
	<a href="https://www.flaticon.com/free-icons/" title=" icons"
		>Icons created by surang - Flaticon</a
	>
</div>
