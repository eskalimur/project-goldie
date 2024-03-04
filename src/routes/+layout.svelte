<script>
	import '../app.css';

	let isDropdownOpen = false; // default state (dropdown close)

	const handleDropdownClick = () => {
		isDropdownOpen = !isDropdownOpen; // togle state on click
	};
</script>

<div class="bg-gray-100 h-full flex flex-col min-w-full">
	<div class="h-12 bg-amber-400 w-full p-2 flex flex-row drop-shadow-xl gap-4">
		<ul class="flex flex-row justify-end gap-2 text-white font-bold">
			<li><a href="/"><h1 class="text-blue-800 text-2xl font-bold ml-4">Goldie</h1></a></li>
			<li><a href="/#/about">About</a></li>
			<li><a href="/#/contact">Contact</a></li>
		</ul>
		<div class="dropdown">
			<button class="btn m-1" on:click={handleDropdownClick}>
				{#if isDropdownOpen}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<title>Close Dropdown</title>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				{:else}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						class="inline-block h-6 w-6 stroke-current"
					>
						<title>Open Dropdown</title>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				{/if}
			</button>
			<ul
				class="dropdown-content menu p-2 shadow bg-white rounded-box w-52 drop-shadow-sm border-solid border rounded-md"
				style:visibility={isDropdownOpen ? 'visible' : 'hidden'}
			>
				<li><button class="btn text-slate-gray-400">USD</button></li>
				<li><button class="btn text-slate-gray-400">EUR</button></li>
			</ul>
		</div>
	</div>

	<slot />
</div>

<style lang="postcss">
	:global(body) {
		@apply flex min-h-screen bg-gray-100;
	}
</style>
