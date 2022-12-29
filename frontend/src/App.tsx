import './App.css';
import { PageContainer } from './components/global/pageContainer';
import { LayoutContextProvider } from "./contexts/LayoutContext";
import { Splash } from "./pages/splash";

function App() {
  return (
    <div className="App">
      <LayoutContextProvider>
        <PageContainer>
          <Splash />
        </PageContainer>
      </LayoutContextProvider>
    </div>
  );
}

export default App;
