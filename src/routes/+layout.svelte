<script lang="ts">
	import '../app.css';
	import logo from '../lib/images/goldie_logo.png';
</script>

<div class="h-full flex flex-col min-w-full">
	<div
		class="h-18 bg-gradient-to-l from-amber-500 to-amber-300 w-full p-2 flex flex-row justify-between drop-shadow-l gap-4"
	>
		<a href="/">
			<img src={logo} class="h-12" />
		</a>
		<ul class="flex flex-row justify-end gap-2 text-white font-bold text-xl items-center mr-8">
			<li><a href="/Impressum">Impressum</a></li>
			<li>
				<form action="/?/logout" method="POST">
					<button type="submit">Logout</button>
				</form>
			</li>
		</ul>
	</div>

	<slot />
</div>

<style lang="postcss">
	:global(body) {
		@apply flex min-h-screen bg-gradient-to-b from-gray-100 to-gray-200;
	}
</style>
