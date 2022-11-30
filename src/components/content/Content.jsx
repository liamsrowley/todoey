import { Container } from "../container/Container";
import "./Content.css";

export const Content = ({ children }) => {
  return (
    <main className="content">
      <Container>{children}</Container>
    </main>
  );
};
