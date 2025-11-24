import { apiEndpoints } from "./config/apiConfig";
export async function searchUserByTerm(searchTerm: string) {
  const response = await fetch(apiEndpoints.search.byTerm(searchTerm));
  const data = await response.json();
  return data;
}
