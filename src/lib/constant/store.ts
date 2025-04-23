import { FieldElementId } from "$lib/enums/element-id";
import type { Field } from "$lib/types/field";

export const DEFAULT_OPTION = '';
export const DEFAULT_FIELD: Field = {
	id: `field_01`,
	name: `field_01`,
	options: [],
	placeholder: '...',
	description: '',
	label: 'Add the label here.',
	type: FieldElementId.SHORT_TEXT,
	index: 0,
	required: false,
	checked: false,
	disabled: false
};