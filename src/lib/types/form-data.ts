import type { Field } from "./field";

export type FormDataType = {
  title: string;
  description: string;
  fields: Array<Field>;
}