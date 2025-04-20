import type { FieldElementId } from "$lib/enums/element-id";
import type { FieldOption } from "./field-option";

export type Field = {
  name: string;
  options: Array<FieldOption>;
  placeholder: string;
  description: string;
  label: string;
  type: FieldElementId;
  index: number;
  required: boolean;
  checked: boolean;
  disabled: boolean;
}