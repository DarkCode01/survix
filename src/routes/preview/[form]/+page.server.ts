import type { FormDataType } from "$lib/types/form-data";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
  const formData = JSON.parse(atob(decodeURIComponent(params.form)));

  return formData as FormDataType;
}