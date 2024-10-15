import styles from "./page.module.css";
import course from "../course.json";

export default function Home() {
  console.log(course.lessons);
  return (
    <main className={styles.main}>
      <ul>
        {course.lessons.map((l) => {
          return (
            <li key={l.name}>
              <h2>{l.title}</h2>
              <p>{l.points}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
