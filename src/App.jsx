import { Card } from "./components/card/Card";
import { Container } from "./components/container/Container";
import { FiltersList } from "./features/filters/FiltersList/FiltersList";
import { Footer } from "./features/footer/Footer";
import { Header } from "./features/header/Header";
import { TodoCreator } from "./features/todos/TodoCreator/TodoCreator";
import { TodoList } from "./features/todos/TodoList/TodoList";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <TodoCreator />
          <FiltersList />
          <div style={{ marginTop: "20px" }}>
            <TodoList />
          </div>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default App;
