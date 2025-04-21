import { FieldElementId } from '../enums/element-id';
import type { Field } from '../types/field';
import type { FieldOption } from '../types/field-option';

const defaultOption = '';
export const fields: Array<Field> = $state([]);
export const invalidField = $state({
	status: false
});

export const addField = (type: FieldElementId) => {
	fields.push({
		name: `field_${Math.random() * 100}`,
		options: [],
		placeholder: type === FieldElementId.CHECKBOX ? 'Checkbox default label' : '...',
		description: '',
		label: '...',
		type,
		index: fields.length,
		required: false,
		checked: false,
		disabled: false
	});

	updateIndexes();
	console.log($state.snapshot(fields));


};

export const updateIndexes = () => {
	fields.forEach((_field, index) => {
		fields[index].index = index;
	});
}

export const addOptionToField = (fieldIndex: number) => {
	if (fields[fieldIndex]) {
		const oldOptions = fields[fieldIndex].options;
		fields[fieldIndex].options = [...oldOptions, defaultOption];

		$state.snapshot(fields[fieldIndex].options);
	}
};

export const updateOptionByIndex = ({
	fieldIndex,
	text,
	optionIndex
}: {
	fieldIndex: number;
	optionIndex: number;
	text: string;
}) => {
	if (fields[fieldIndex] && fields[fieldIndex].options[optionIndex] !== undefined) {
		const newOptions = fields[fieldIndex].options;

		newOptions[optionIndex] = text;

		fields[fieldIndex].options = newOptions;
	}
};

export const removeField = (fieldIndex: number) => {
	if (fields[fieldIndex]) fields.splice(fieldIndex, 1);

	updateIndexes();
};

export const changeFieldType = (fieldIndex: number, type: FieldElementId) => {
	if (fields[fieldIndex]) fields[fieldIndex].type = type;
}

export const addBulkValues = ({
	fieldIndex,
	values
}: {
	fieldIndex: number;
	values: Array<FieldOption>;
}) => {
	if (fields[fieldIndex]) {
		fields[fieldIndex].options = values;
	}
};

export const triggerShake = () => {
	invalidField.status = false;
	requestAnimationFrame(() => {
		invalidField.status = true;
	});
}
