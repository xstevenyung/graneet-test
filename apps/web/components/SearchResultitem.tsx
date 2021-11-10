import styles from "../styles/components/SearchResultItem.module.css";

export default function SearchResultItem(props) {
  return (
    <div className={styles.container}>
      <span>{props.city.municipalityName}</span>
      <span className={styles.zipCode}>{props.city.zipCode}</span>
    </div>
  );
}
