import styles from "../styles/components/SearchResult.module.css";
import Alert from "./Alert";
import SearchResultItem from "./SearchResultitem";

export type Props = {
  title: string;
  result: any[] | null;
};

export default function SearchResult(props: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{props.title}</h1>

      {!props.result && <span>Loading...</span>}

      {props.result && (
        <>
          <Alert type={props.result.length > 0 ? "success" : "error"}>
            <span>
              {props.result.length
                ? `${props.result.length} villes correspondant au texte saisi`
                : "Aucune ville correspondant au texte saisi"}
            </span>
          </Alert>

          <div className={styles.resultListContainer}>
            {props.result.map((city) => {
              return <SearchResultItem city={city} key={city.id} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}
