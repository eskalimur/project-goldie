<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();

	let authenticating = $state(false);
</script>

<svelte:head>
	<title>Goldie: Login</title>
</svelte:head>

<div class="flex item-center justify-center flex-col p-8 items-center gap-4">
	<h1 class="text-blue-800 text-2xl font-bold">Welcome to Goldie</h1>

	<form
		method="POST"
		action="?/login"
		use:enhance={() => {
			authenticating = true;
			return async ({ update }) => {
				await update();
				authenticating = false;
			};
		}}
		class="items-center text-xl font-bold text-gray-800 flex flex-col gap-6 border px-4 py-6 rounded-xl bg-amber-300 drop-shadow-sm w-1/3"
	>
		<label for="email">Email</label>
		<input name="email" type="text" class="rounded p-1 text-gray-400" placeholder="user" />

		<label for="password">Password</label>
		<input
			name="password"
			type="password"
			class="rounded p-1 text-gray-400"
			placeholder="password"
		/>

		<button
			type="submit"
			class="bg-amber-100 rounded w-1/3 text-blue-800 p-2 text-xl"
			disabled={authenticating}
		>
			{#if authenticating}
				Journey starting...
			{:else}
				Start your journey
			{/if}
		</button>

		{#if form?.required}
			<p class="text-red-600">Please enter email and password!</p>
		{/if}
		{#if form?.invalid}
			<p class="text-red-600">Entered credentials are not valid!</p>
		{/if}
	</form>
</div>
