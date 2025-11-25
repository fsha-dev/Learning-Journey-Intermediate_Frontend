import { useQuery } from "@tanstack/react-query";
import { useEffect, useId, useState } from "react";
import { queryKeys } from "../../api/config/apiConfig";
import { searchUserByTerm } from "../../api/apiSearch";
import styles from "./searchInput.module.css";
export default function SearchInput() {
  const [query, setQuery] = useState("");
  const [loadingDebouncedSearch, setLoadingDebouncedSearch] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const searchInputId = useId();
  const { data, isLoading, error } = useQuery({
    queryKey: queryKeys.search.byTerm(debouncedQuery),
    queryFn: () => searchUserByTerm(debouncedQuery),
    enabled: !!debouncedQuery,
  });
  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      setDebouncedQuery(query);
      setLoadingDebouncedSearch(false);
    }, 3000);

    return () => clearTimeout(debounceSearch);
  }, [query]);
  return (
    <>
      <div>
        <label htmlFor={searchInputId}></label>
        <input
          className={styles.searchInput}
          placeholder="search username here"
          type="text"
          name="serach-input-users"
          id={searchInputId}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            if (query) {
              setLoadingDebouncedSearch(true);
            }
          }}
        />
      </div>
      {(isLoading || (loadingDebouncedSearch && query)) && (
        <div className={styles.loading}>
          <div className="spinner"></div>
        </div>
      )}
      {error && <div>Something went wrong try again, later.</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {/* {data && (
        <pre>
          {data.map((item: any) => (
            <div>{item.name}</div>
          ))}
        </pre>
      )} */}
    </>
  );
}
