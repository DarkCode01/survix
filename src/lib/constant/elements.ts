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
		text: 'Checkbox'
	},
	{
		value: FieldElementId.MULTI_SELECT,
		text: 'Multiple Select (Dropdown)'
	},
	{
		value: FieldElementId.DROPDOWN,
		text: 'Dropdown (Select)'
	}
];