<script lang="ts">
	import { goto } from '$app/navigation';
	import { getGoldItem } from '$lib/services/goldService.js';

	let { data } = $props();
	let { goldItem } = data;

	let item = getGoldItem(goldItem);

	function getImg(imgName: string) {
		return '../src/lib/images/' + imgName;
	}
</script>

<div class="flex flex-col m-8 h-full">
	<header class="flex flex-row gap-4 mb-2">
		<button
			onclick={() => {
				goto('/Gold');
			}}
		>
			<img src="../src/lib/images/arrow.png" width="50" class="rotate-180" /></button
		>
		<h1 class="text-4xl text-blue-800 font-bold p-1">{item?.name}</h1>
	</header>
	<div class="h-1/2 bg-white drop-shadow-xl gap-4 border border-solid rounded-xl">
		<div class="m-6 flex flex-row gap-4">
			<img
				width="150"
				src={item?.img ? getImg(item.img) : 'https://via.placeholder.com/150'}
				alt="Card Image"
				class="rounded-sm"
			/>
			<form
				class="flex flex-row gap-4 justify-center items-center
			"
			>
				<div class="grid grid-col-3 gap-4">
					<input
						type="text"
						name="name"
						placeholder="Name"
						value={item?.name}
						class="rounded p-1 text-gray-400 border border-solid-1 border-amber-200"
					/>
					<input
						type="number"
						name="weight"
						step="0.1"
						placeholder="Weight"
						value={item?.weight}
						class="rounded p-1 text-gray-400 border border-solid-1 border-amber-200"
					/>
				</div>
				<button
					class="font-bold h-2/5 w-32 bg-amber-100 rounded text-blue-800 p-2 text-xl"
					type="submit"
				>
					Save
				</button>
			</form>
		</div>
	</div>
</div>
