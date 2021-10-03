import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { extendTheme, ColorModeScript, ChakraProvider } from '@chakra-ui/react';

import store from './store/store';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Blog from './pages/blog';

import Navbar from './components/navbar';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

const App = () => (
  <BrowserRouter>
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Navbar />

        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);

export default App;
