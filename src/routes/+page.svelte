<script lang="ts">
	import { enhance } from '$app/forms';
	import logo from '../lib/images/goldie_logo.png';

	let { form } = $props();

	let authenticating = $state(false);
</script>

<svelte:head>
	<title>Goldie: Login</title>
</svelte:head>

<div class="flex item-center justify-center flex-col p-8 items-center gap-4">
	<img src={logo} class="w-1/4" />
	<div
		class="gap-4 flex flex-col border px-4 py-6 rounded-xl bg-amber-400 drop-shadow-sm w-1/3 items-center"
	>
		<h1 class="text-gray-800 text-4xl font-bold">Login</h1>
		<div>
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
				class="text-xl font-bold text-blue-800 flex flex-col gap-6 items-center"
			>
				<div class="flex flex-col gap-1">
					<label for="email">Email</label>
					<input name="email" type="text" class="rounded p-2 text-gray-400" placeholder="user" />
				</div>
				<div class="flex flex-col gap-1">
					<label for="password">Password</label>
					<input
						name="password"
						type="password"
						class="rounded p-2 text-gray-400"
						placeholder="password"
					/>
				</div>
				<button
					type="submit"
					class="bg-amber-100 rounded text-blue-800 p-2 text-xl"
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
	</div>
</div>
