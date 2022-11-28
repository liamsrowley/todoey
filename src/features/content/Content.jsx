import { Container } from "../../components/container/Container";
import "./Content.css";

export const Content = ({ children }) => {
  return (
    <main className="content">
      <Container>{children}</Container>
    </main>
  );
};
