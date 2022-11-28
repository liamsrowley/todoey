import { Container } from "../../components/container/Container";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <Container>
        <div className="logo">
          <h1 className="logo__heading">Todoey</h1>
          <p className="logo__subheading">
            A todos app exploring Redux fundamentals
          </p>
        </div>
      </Container>
    </header>
  );
};
