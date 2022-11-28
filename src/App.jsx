import { Content } from "./features/content/Content";
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
        <TodoList />
      </Content>
      <Footer />
    </div>
  );
}

export default App;
