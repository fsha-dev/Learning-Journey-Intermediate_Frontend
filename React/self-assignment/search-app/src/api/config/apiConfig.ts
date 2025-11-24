export const apiEndpoints = {
  search: {
    byTerm: (searchTerm: string) =>
      `https://api.github.com/search/users?q=${searchTerm}`,
  },
};
