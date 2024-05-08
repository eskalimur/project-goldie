<script lang="ts">
	import { goto } from '$app/navigation';
	import { removeGoldItem } from '$lib/services/goldService';

	const { reloadItems, item, goldprice } = $props<{
		reloadItems: () => void;
		item: {
			name: string;
			weight: number;
			img?: string;
			url: string;
		};
		goldprice: number;
	}>();
	const images = import.meta.glob('$lib/images/*.png', { eager: true });
</script>

<div class="border border-solid rounded-xl bg-white drop-shadow-xl">
	<div class="flex flex-col">
		<div class="flex justify-between items-center p-4">
			<div>
				<h1 class="text-2xl font-bold">{item.name}</h1>
				<p class="text-gray-500">Weight: {item.weight} kg</p>
			</div>
			<div class="flex items-center text-lg">
				<button
					onclick={() => {
						goto('/Gold/' + item.url);
					}}
					class="bg-slate-600 text-white px-4 py-2 rounded-sm">Edit</button
				>
				<button
					onclick={() => {
						removeGoldItem(item.name);
						reloadItems();
					}}
					class="bg-slate-600 text-white px-4 py-2 rounded-sm ml-2">Delete</button
				>
			</div>
		</div>
		<div class="flex flex-col p-4">
			<div class="flex items-center">
				<div class="w-1/2">
					<img
						width="150"
						src={item.img
							? images[`/src/lib/images/${item.img}`].default
							: 'https://via.placeholder.com/150'}
						alt="Card Image"
						class="rounded-sm"
					/>
				</div>
				<div class="w-1/2 flex justify-end self-end text-xl">
					<p>
						Price: {(goldprice * item.weight).toLocaleString('en', {
							notation: 'standard',
							style: 'currency',
							currency: 'USD',
							compactDisplay: 'long'
						})}
					</p>
				</div>
			</div>
		</div>
	</div>
</div>
