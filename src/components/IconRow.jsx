import styles from "./IconRow.module.css";

export default function IconRow({ links = [] }) {
  return (
    <div className={styles.row}>
      {links.map(({ id, href, img, alt, color, label }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
          style={{ backgroundColor: color }}
          aria-label={label}
        >
          <img src={img} alt={alt} className={styles.img} />
        </a>
      ))}
    </div>
  );
}
