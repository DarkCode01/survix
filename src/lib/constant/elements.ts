import { FieldElementId } from "$lib/enums/element-id";

export const ELEMENTS = [
	{
		value: FieldElementId.SHORT_TEXT,
		text: 'Short Text (Input)'
	},
	{
		value: FieldElementId.LARGE_TEXT,
		text: 'Large Text (Textarea)'
	},
	{
		value: FieldElementId.EMAIL,
		text: 'Email (Input)'
	},
	{
		value: FieldElementId.PHONE_NUMBER,
		text: 'Phone number (Input)'
	},
	{
		value: FieldElementId.RADIO,
		text: 'Radio (Yes/No)'
	},
	{
		value: FieldElementId.CHECKBOX,
		text: 'Multiple Choice (Checkbox)'
	},
	{
		value: FieldElementId.DROPDOWN,
		text: 'Dropdown (Select)'
	}
];

// export const PLACEHOLDER_BY_FIELD_TYPE = {
// 	[FieldElementId.SHORT_TEXT]: ''
// }