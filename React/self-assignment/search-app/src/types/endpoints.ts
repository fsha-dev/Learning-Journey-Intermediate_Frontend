import type { iSearchResultUser } from "./types";
export type SearchUserByTermResponse = {
  total_count: number;
  incomplete_results: boolean;
  items: iSearchResultUser[];
};
