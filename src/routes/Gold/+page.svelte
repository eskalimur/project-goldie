<script lang="ts">
	import Card from './card.svelte';

	let { data } = $props();
	let goldData = data?.data.data;
	let goldprice = goldData?.metals?.gold ?? 2020;

	let goldItems = [
		{
			name: 'Gold Bar',
			weight: 10
		},
		{
			name: 'Gold Coin',
			weight: 1
		},
		{
			name: 'Gold Nugget',
			weight: 0.1
		},
		{
			name: 'Gold Ingot',
			weight: 5
		},
		{
			name: 'Gold Jewelry',
			weight: 0.5
		},
		{
			name: 'Gold Ring',
			weight: 0.2
		},
		{
			name: 'Gold Bracelet',
			weight: 0.3
		},
		{
			name: 'Gold Necklace',
			weight: 0.4
		}
	].sort((a, b) => a.weight - b.weight);
</script>

<div class="m-8">
	<div>
		<h1 class="text-2xl font-bold m-4">Gold Price: {goldprice},- USD</h1>
	</div>
	<div class="flex flex-col gap-4">
		{#each goldItems as item}
			<Card {item} {goldprice}></Card>
		{/each}
	</div>
</div>
