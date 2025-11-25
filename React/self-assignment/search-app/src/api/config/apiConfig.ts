export const apiEndpoints = {
  search: {
    byTerm: (searchTerm: string) =>
      `https://api.github.com/search/users?q=${searchTerm}`,
  },
};
export const queryKeys = {
  search: {
    byTerm: (searchTerm: string) => ["search", "byTerm", searchTerm],
  },
};
