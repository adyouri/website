<script>
	import IconFacebook from '$lib/icons/facebook.svelte'
	import IconGithub from '$lib/icons/github.svelte'
	import IconLinkedin from '$lib/icons/linkedin.svelte'
	import IconMail from '$lib/icons/mail.svelte'
	import IconTwitter from '$lib/icons/twitter.svelte'
	import IconYoutube from '$lib/icons/youtube.svelte'

	export let url = ''
	export let icon = ''
	export let popup = false
	export let small = false

	let size = small ? 'w-5' : 'w-7'

	const options = [
		{ caption: 'mail', component: IconMail },
		{ caption: 'github', component: IconGithub },
		{ caption: 'facebook', component: IconFacebook },
		{ caption: 'youtube', component: IconYoutube },
		{ caption: 'linkedin', component: IconLinkedin },
		{ caption: 'twitter', component: IconTwitter }
	]

	let svg = options.find((option) => option.caption === icon)?.component
</script>

{#if url}
	<a
		class="hover:text-primary-600 flex gap-x-2 text-gray-500 transition"
		href={url || '#'}
		target={popup ? '_blank' : ''}
		rel="noreferrer"
	>
		<span class="sr-only">{icon}</span>
		<svelte:component this={svg} class="{size} " />
		<span>
			<slot />
		</span>
	</a>
{/if}
