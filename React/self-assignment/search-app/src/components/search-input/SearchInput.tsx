import { useQuery } from "@tanstack/react-query";
import { useEffect, useId, useState, useRef } from "react";
import { queryKeys } from "../../api/config/apiConfig";
import { searchUserByTerm } from "../../api/apiSearch";
import styles from "./searchInput.module.css";
import type { SearchUserByTermResponse } from "../../types/endpoints";
import CardInfo from "../card-info/CardInfo";
export default function SearchInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [loadingDebouncedSearch, setLoadingDebouncedSearch] = useState(false);
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const searchInputId = useId();
  const { data, isLoading, error, isPending } =
    useQuery<SearchUserByTermResponse>({
      queryKey: queryKeys.search.byTerm(debouncedQuery),
      queryFn: () => searchUserByTerm(debouncedQuery),
      enabled: !!debouncedQuery,
    });
  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      setDebouncedQuery(query);
      setLoadingDebouncedSearch(false);
    }, 500);

    return () => clearTimeout(debounceSearch);
  }, [query]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <>
      <div>
        <label htmlFor={searchInputId}></label>
        <input
          ref={inputRef}
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
      {data?.total_count === 0 ? (
        <div>
          <p>No user is found!</p>
        </div>
      ) : (
        data?.items.map((user) => (
          <CardInfo
            className={styles.card}
            key={user.id}
            data={user}
            renderCardInfo={(user) => (
              <>
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className={styles.avatar}
                />
                <h2>{user.login}</h2>
                <p>{user.type}</p>
              </>
            )}
          />
        ))
      )}
    </>
  );
}
