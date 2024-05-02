<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	let { form } = $props();
</script>

<svelte:head>
	<title>Goldie: Login</title>
</svelte:head>

<div class="flex item-center justify-center flex-col p-8 items-center gap-4">
	<h1 class="text-blue-800 text-2xl font-bold">Welcome to Goldie</h1>

	<form
		method="post"
		use:enhance
		class="items-center text-xl font-bold text-gray-800 flex flex-col gap-6 border px-4 py-6 rounded-xl bg-amber-400 drop-shadow-sm w-1/3"
	>
		<label for="email">Email</label>
		<input name="email" type="text" class="rounded" />

		<label for="password">Password</label>
		<input name="password" type="password" class="rounded" />

		<button
			type="submit"
			class="bg-amber-100 rounded w-1/3 text-blue-800 p-1"
			onclick={() => goto('/Gold')}
		>
			Start your journey
		</button>

		{#if form}
			<p class="error">{form.errorMessage}</p>
		{/if}
	</form>
</div>
