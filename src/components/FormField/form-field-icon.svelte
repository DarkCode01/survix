<script lang="ts">
	import { tooltip } from "$lib/actions/tooltip.svelte";
	import { ELEMENTS } from "$lib/constant/elements";
	import { FieldElementId } from "$lib/enums/element-id";
	import IconDown from '~icons/mdi/arrow-down-drop-circle-outline';
	import IconCheckbox from '~icons/mdi/checkbox-outline';
	import IconEmail from '~icons/mdi/email-outline';
	import IconMultiSelect from '~icons/mdi/format-list-checks';
	import IconFormat from '~icons/mdi/format-text';
	import IconPhone from '~icons/mdi/phone-outline';
	import IconRadio from '~icons/mdi/radiobox-blank';
	import IconText from '~icons/mdi/text';

  const icons = {
		[FieldElementId.SHORT_TEXT]: IconFormat,
    [FieldElementId.LARGE_TEXT]: IconText,
    [FieldElementId.EMAIL]: IconEmail,
    [FieldElementId.PHONE_NUMBER]: IconPhone,
    [FieldElementId.MULTI_SELECT]: IconMultiSelect,
    [FieldElementId.DROPDOWN]: IconDown,
    [FieldElementId.RADIO]: IconRadio,
    [FieldElementId.CHECKBOX]: IconCheckbox
	}

  let { fieldType } = $props()
  let type = $state(fieldType);
  let Icon = $derived(icons[type]);
  let content = $derived(
    ELEMENTS.find(e => e.value === type)?.text
  );
</script>


<!-- svelte-ignore a11y_consider_explicit_label -->
<div
  use:tooltip={() => ({
    content,
    placement: 'top'
  })}
  class="p-1 bg-[#4fb0ae5f] rounded-lg"
>
  <Icon style="font-size: 20px; color: #3D3D3D;" />
</div>