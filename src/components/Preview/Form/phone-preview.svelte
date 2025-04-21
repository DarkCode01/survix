<script lang="ts">
  import type { Field } from '$lib/types/field';
  import { TelInput, normalizedCountries } from 'svelte-tel-input';

	import type { CountryCode, DetailedValue, E164Number } from 'svelte-tel-input/types';
	import MessageError from '../../Form/Messages/error.svelte';


	interface Props
		extends Omit<
				Partial<HTMLInputElement>,
				'type' | 'checked' | 'name' | 'disabled' | 'placeholder' | 'required'
			>,
			Field {
				isInvalid?: boolean;
				message?: string;
			}

	let { name, required, isInvalid, message }: Props = $props();

   // Any Country Code Alpha-2 (ISO 3166)
  let selectedCountry: CountryCode | null = $state('DO');

  // You must use E164 number format. It's guarantee the parsing and storing consistency.
  let value: E164Number | null = $state('');

  // Validity
  let valid = $state(true);

  // Optional - Extended details about the parsed phone number
  let detailedValue: DetailedValue | null = $state(null);

  $effect(() => {
    console.log(valid);
  })
</script>

<div class="flex items-end gap-3">
  <select
    aria-label="Default select example"
    name="Country"
    class={[
      'cursor-pointer border-1 px-0 text-3xl',
      'border-[#e4e4e4] font-light text-[#4FB0AE]',
      'border-t-0 border-l-0 border-r-0 border-b-1 border-b-[#d0e6e7]',
      'hover:border-b-2 hover:border-b-[#4FB0AE] focus:border-b-2 focus:border-[#4FB0AE]',
      'focus:outline-none transition-colors duration-200',
      'focus:ring-0 min-w-[100px]'
    ]}
    bind:value={selectedCountry}
  >
    {#each normalizedCountries as currentCountry (currentCountry.id)}
      <option
        value={currentCountry.iso2}
      >
        {currentCountry.iso2}
      </option>
    {/each}
  </select>
  <TelInput
    bind:value
    bind:valid
    bind:detailedValue
    bind:country={selectedCountry}
    
    {name}
    {required}
    
    class={[
      'text-3xl px-0 font-light',
      'text-[#4FB0AE] placeholder-[#d0e6e7]',
      'border-0 border-b border-[#d0e6e7]',
      'hover:border-b-2 hover:border-b-[#4FB0AE] focus:border-b-2 focus:border-[#4FB0AE]',
      'focus:outline-none transition-colors duration-200',
      'focus:ring-0 w-full'
    ].join(' ')}
    options={{
      autoPlaceholder: true,
      spaces: true,
      format: 'international',
    }}
  />
</div>

{#if isInvalid}
	<MessageError>
		{message}
	</MessageError>
{/if}