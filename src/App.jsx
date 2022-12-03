import { Card } from "./components/card/Card";
import { Container } from "./components/container/Container";
import { Flex } from "./components/flex/Flex";
import { FiltersList } from "./features/filters/FiltersList/FiltersList";
import { Footer } from "./features/footer/Footer";
import { Header } from "./features/header/Header";
import { TodoActions } from "./features/todos/TodoActions/TodoActions";
import { TodoCreator } from "./features/todos/TodoCreator/TodoCreator";
import { TodoList } from "./features/todos/TodoList/TodoList";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Card>
          <TodoCreator />
          <Flex
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap="40px"
          >
            <FiltersList />
            <TodoActions />
          </Flex>
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
