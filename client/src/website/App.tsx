import { ThemeProvider } from './theme/themeContext';
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import GlobalStyles from './theme/GlobalStyles';
import Narbar from './components/Navbar/Narbar';
import tw from 'twin.macro'

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Narbar />
      <div tw="md:ml-20">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}
export default App;