import type { FieldElementId } from "$lib/enums/element-id";
import type { SvelteComponent } from "svelte";

export type FieldElement = {
  icon: SvelteComponent<unknown, any, any>;
  description: string;
  id: FieldElementId;
}
