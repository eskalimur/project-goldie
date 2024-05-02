<script lang="ts">
	let { data } = $props();
	let { goldItem } = data;
</script>

<div class="bg-gray-100 flex flex-col m-8">
	<header>
		<h1 class="text-2xl text-blue-800 font-bold p-1">{goldItem}</h1>
	</header>
	<div class="h-12 bg-white flex flex-row justify-between drop-shadow-xl gap-4">
		<div class="border border-solid rounded-xl bg-white drop-shadow-xl"></div>
	</div>
</div>
