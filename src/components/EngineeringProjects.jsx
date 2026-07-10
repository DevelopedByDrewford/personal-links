import styles from "./EngineeringProjects.module.css";

const projects = [
  { label: "The Houston Guide", href: "https://houston.drewford.dev" },
  { label: "Concert Scrapbook", href: "https://encore.drewford.dev" },
  { label: "Multiplayer Games", href: "https://game-night.drewford.dev"},
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
