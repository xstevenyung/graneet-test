import { useEffect, useState } from "react";
import useSWR from "swr";
import SearchResult from "../components/SearchResult";
import styles from "../styles/Home.module.css";
import { useDebounce } from "../use/debounce";
import { laggy } from "../utils/laggy";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const [search, setSearch] = useState("");

  const debouncedSearch = useDebounce(search, 300);

  const { data, error } = useSWR(
    `${process.env.NEXT_PUBLIC_API_URL}/?q=${debouncedSearch}`,
    fetcher,
    { use: [laggy] }
  );

  if (error) return <span>Are your sure the API is running?</span>;

  return (
    <div className={styles.container}>
      <div className={styles.searchContainer}>
        <span className={styles.searchLabel}>Je recherche...</span>

        <input
          type="search"
          name="search"
          className={styles.searchInput}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="...une ville, un code postal"
        />
      </div>

      <div className={styles.resultContainer}>
        <SearchResult title="Villes de métropole" result={data?.metropolis} />

        <SearchResult title="Villes d'outre-mer" result={data?.overseas} />
      </div>
    </div>
  );
}
