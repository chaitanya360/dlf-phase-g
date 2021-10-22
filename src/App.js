import { AppStyle } from "./app.style";
import Header from "./components/Header";
import MainLayout from "./components/MainLayout";

function App() {
  return (
    <AppStyle>
      <Header />
      <MainLayout />
    </AppStyle>
  );
}

export default App;
