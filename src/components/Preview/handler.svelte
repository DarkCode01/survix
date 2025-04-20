<script module lang="ts">
	import type { Field } from '$lib/types/field';
	import { TelInput, normalizedCountries } from 'svelte-tel-input';
  
  export { Checkbox, Email, Input, PhoneNumber, Radio, Select, TextArea };
</script>

{#snippet Input(field: Field)}
  <input
    id={field.name}
    placeholder="Type your answer here..."
    class={[
      'text-3xl px-0 font-light',
      'text-[#4FB0AE] placeholder-[#d0e6e7]',
      'border-0 border-b border-[#d0e6e7]',
      'hover:border-b-2 hover:border-b-[#4FB0AE] focus:border-b-2 focus:border-[#4FB0AE]',
      'focus:outline-none transition-colors duration-200',
      'focus:ring-0'
    ]}
    required={field.required}
  />
{/snippet}

{#snippet Select(field: Field)}
  <select
    class={[
      'flex-1 cursor-pointer border-1 px-0 text-3xl',
      'border-[#e4e4e4] font-light text-[#4FB0AE]',
      'border-t-0 border-l-0 border-r-0 border-b-1 border-b-[#d0e6e7]',
      'hover:border-b-2 hover:border-b-[#4FB0AE] focus:border-b-2 focus:border-[#4FB0AE]',
      'focus:outline-none transition-colors duration-200',
      'focus:ring-0'
    ]}
    id={field.name}
  >
    {#each field.options as elementOption (elementOption)}
      <option value={elementOption.value}>{elementOption.label}</option>
    {/each}
  </select>
{/snippet}

{#snippet Radio(field: Field)}
  <div class="flex flex-col gap-2 w-full">
    <button
      class={[
        'flex items-center gap-2 text-[#4FB0AE] bg-[#f0f7f7]',
        'border-2 border-[#c1dddd] rounded px-2 py-1 text-2xl font-light',
        'cursor-pointer hover:border-2 hover:border-[#4FB0AE] hover:bg-[#4fb0ae5f]'
      ]}
    >
       Yes
    </button>
    <button
      class={[
        'flex items-center gap-2 text-[#4FB0AE] bg-[#f0f7f7]',
        'border-2 border-[#c1dddd] rounded px-2 py-1 text-2xl font-light',
        'cursor-pointer hover:border-2 hover:border-[#4FB0AE] hover:bg-[#4fb0ae5f]'
      ]}
    >
       No
    </button>
  </div>
{/snippet}

{#snippet Checkbox(field: Field)}
  <div class="flex flex-col gap-2">
    {#each field.options as option, index (`${index}_${option.value}`)}
      <div class="flex items-center gap-2 text-[#69ae49]">
        <button
          class={[
            'flex items-center gap-2 text-[#4FB0AE] bg-[#f0f7f7] w-full',
            'border-2 border-[#c1dddd] rounded p-2 text-2xl font-light',
            'cursor-pointer hover:border-2 hover:border-[#4FB0AE] hover:bg-[#4fb0ae5f]'
          ]}
        >
          <span class={[
            'bg-white border-2 border-[#c1dddd]',
            'text-lg py-3 px-2 leading-0 rounded'
          ]}>
            {index + 1}
          </span>
          {option.label}
        </button>
      </div>
    {/each}
  </div>
{/snippet}

{#snippet PhoneNumber(field: Field)}
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
      bind:value={field.description}
      class={[
        'text-3xl px-0 font-light',
        'text-[#4FB0AE] placeholder-[#d0e6e7]',
        'border-0 border-b border-[#d0e6e7]',
        'hover:border-b-2 hover:border-b-[#4FB0AE] focus:border-b-2 focus:border-[#4FB0AE]',
        'focus:outline-none transition-colors duration-200',
        'focus:ring-0 w-full'
      ].join(' ')}
      placeholder="(809) 234-5678"
    />
  </div>
{/snippet}

{#snippet Email(field: Field)}
  <input
    id={field.name}
    placeholder="email@email.com"
    class={[
      'text-3xl px-0 font-light',
      'text-[#4FB0AE] placeholder-[#d0e6e7]',
      'border-0 border-b border-[#d0e6e7]',
      'hover:border-b-2 hover:border-b-[#4FB0AE] focus:border-b-2 focus:border-[#4FB0AE]',
      'focus:outline-none transition-colors duration-200',
      'focus:ring-0'
    ]}
    required={field.required}
  />
{/snippet}

{#snippet TextArea(field: Field)}
  <textarea
    id={field.name}
    placeholder={field.placeholder}
    class={[
      'text-3xl px-0 font-light',
    'text-[#4FB0AE] placeholder-[#d0e6e7]',
      'border-0 border-b border-[#d0e6e7]',
      'hover:border-b-2 hover:border-b-[#4FB0AE] focus:border-b-2 focus:border-[#4FB0AE]',
      'focus:outline-none transition-colors duration-200',
      'focus:ring-0'
    ]}
    required={field.required}
  ></textarea>
{/snippet}
