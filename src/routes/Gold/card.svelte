<script lang="ts">
	export let item: {
		name: string;
		weight: number;
		img?: string;
		url: string;
	};
	export let goldprice: number;
</script>

<div class="border border-solid rounded-xl bg-white drop-shadow-xl">
	<a href="/Gold/{item.url}">
		<div class="flex flex-col">
			<div class="flex justify-between items-center p-4">
				<div>
					<h1 class="text-2xl font-bold">{item.name}</h1>
					<p class="text-gray-500">Weight: {item.weight} kg</p>
				</div>
				<div class="flex items-center">
					<button class="bg-slate-600 text-white px-4 py-2 rounded-sm">Edit</button>
					<button class="bg-slate-600 text-white px-4 py-2 rounded-sm ml-2">Delete</button>
				</div>
			</div>
			<div class="flex flex-col p-4">
				<div class="flex items-center">
					<div class="w-1/2">
						<img
							width="150"
							src={item.img ?? 'https://via.placeholder.com/150'}
							alt="Card Image"
							class="rounded-sm"
						/>
					</div>
					<div class="w-1/2 flex justify-end">
						<p>
							Price for this item: {(goldprice * item.weight).toLocaleString('en', {
								notation: 'standard',
								compactDisplay: 'long'
							})},- USD
						</p>
					</div>
				</div>
			</div>
		</div>
	</a>
</div>
