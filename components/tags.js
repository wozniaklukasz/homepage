import styles from "./tags.module.css";

export default function Tags({ tags }) {
  if (!tags || tags.length < 1) return;
  return (
    <div>
      {tags.map((t) => (
        <i className={styles.tag} key={t}>{`# ${t}`}</i>
      ))}
    </div>
  );
}
