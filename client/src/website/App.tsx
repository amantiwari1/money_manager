import { ThemeProvider } from './theme/themeContext';
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Toggle from './theme/themeToggle'


function App() {
  return (
    <ThemeProvider>
      <Toggle />
      <Switch>
        <Route exact path="/"  component={Home}  />
      </Switch>
    </ThemeProvider>
  );
}
export default App;