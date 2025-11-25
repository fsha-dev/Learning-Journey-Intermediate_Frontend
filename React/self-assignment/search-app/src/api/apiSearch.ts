import { apiEndpoints } from "./config/apiConfig";
export async function searchUserByTerm(searchTerm: string) {
  const response = await fetch(apiEndpoints.search.byTerm(searchTerm));
  return response.json();
}
