<script lang="ts">
	import Head from '$lib/components/layouts/Head.svelte'
	import RenderMarkdown from '$lib/components/RenderMarkdown.svelte'

	export let data

	$: app = data.app
</script>

<Head title="{app.title} | Privacy policy" />

<div class="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-4xl xl:px-0">
	<div
		class="prose my-3 w-full max-w-none text-justify prose-a:text-arkOrange prose-a:no-underline hover:prose-a:underline"
	>
		<RenderMarkdown content={app.content} />
	</div>
</div>
