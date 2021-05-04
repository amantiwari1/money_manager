import { ThemeProvider } from './theme/themeContext';
import { Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import GlobalStyles from './theme/GlobalStyles';
import Navbar from './components/Navbar/Navbar';
// eslint-disable-next-line
import tw from 'twin.macro'
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <Navbar />
      <div tw="md:ml-20">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}
export default App;