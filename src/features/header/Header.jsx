import { Container } from "../../components/container/Container";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.logo}>
          <h1>Todoey</h1>
          <p>A todos app exploring Redux fundamentals</p>
        </div>
      </Container>
    </header>
  );
};
