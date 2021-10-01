import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { extendTheme, ColorModeScript, ChakraProvider } from '@chakra-ui/react';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Blog from './pages/blog';

import Navbar from './components/navbar';

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

const App = () => (
  <BrowserRouter>
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
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
  </BrowserRouter>
);

export default App;
