import styles from "./EngineeringProjects.module.css";

const projects = [
  { label: "Houston Guide", href: "https://houston.drewford.dev" },
  { label: "Metro App", href: "https://metro.drewford.dev" },
  { label: "Adventure Game", href: "https://death-house.drewford.dev"},
  { label: "Dev Portfolio", href: "https://drewford.dev" },
];

export default function EngineeringProjects() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading} id="engineering-projects--header">
        Engineering Projects
      </h2>
      <div className={styles.list}>
        {projects.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btn}
          >
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
