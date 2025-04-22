<script lang="ts">
  import { fields } from '$lib/stores/store.svelte';
  import { modals } from 'svelte-modals';
  import IconPlay from '~icons/mdi/play-outline';
  import IconSettings from '~icons/mdi/settings';
  
  import Textarea from "../Form/textarea.svelte";
  import ModalSettings from '../Modal/modal-settings.svelte';

  let { title = $bindable(), description = $bindable()} = $props();

  const onSettings = () => {
    modals.open(
      ModalSettings,
      {
        title,
        description,
        onChange: (changes: { title: string; description: string }) => {
          title = changes.title;
          description = changes.description;
        }
      }
    );
  }

  const onPreview =( ) => {
		const paylaod = {
			title,
			description,
			fields
		};	
		const encrypted = btoa(JSON.stringify(paylaod));
	
		window.open(`/preview/${encodeURIComponent(encrypted)}`, '_blank');
	}
</script>

<div class="bg-white px-8 py-4 w-full rounded-lg">
  <div class="w-full h-full flex items-center justify-between">
    <Textarea
      placeholder=""
      id="tite_form"
      bind:value={title}
      className="text-2xl text-black"
    />

    <div class="flex gap-2 items-center">
      <button
        onclick={onPreview}
        class="flex gap-2 items-center rounded-lg p-2 text-[#777777] hover:bg-[#e4e4e467] cursor-pointer"
      >
        <IconPlay style="font-size: 20px;" />
      </button>
      <button
        onclick={onSettings}
        class="flex gap-2 items-center rounded-lg p-2 text-[#777777] hover:bg-[#e4e4e467] cursor-pointer"
      >
        <IconSettings />
      </button>
    </div>
  </div>
</div>