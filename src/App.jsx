import { Content } from "./components/content/Content";
import { FiltersList } from "./features/filters/FiltersList/FiltersList";
import { Footer } from "./features/footer/Footer";
import { Header } from "./features/header/Header";
import { TodoCreator } from "./features/todos/TodoCreator/TodoCreator";
import { TodoList } from "./features/todos/TodoList/TodoList";

function App() {
  return (
    <div>
      <Header />
      <Content>
        <TodoCreator />
        <FiltersList />
        <TodoList />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
