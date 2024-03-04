<script lang="ts">
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<div class="flex item-center justify-center flex-col bg-amber-400">
	<h1 class="text-blue-800 text-2xl font-bold">Welcome to Goldie</h1>
	<a href="/Gold">
		<form method="post" use:enhance class="flex flex-col">
			<label for="email">Email</label>
			<input name="email" type="text" />

			<label for="password">Password</label>
			<input name="password" type="password" />

			<button type="submit">Start your journey</button>

			{#if form}
				<!-- <p class="error">{form.errorMessage}</p> -->
			{/if}
		</form>
	</a>
</div>
