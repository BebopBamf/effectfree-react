import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Home from './pages/home';
import Portfolio from './pages/portfolio';
import Blog from './pages/blog';

import Navbar from './components/navbar';

const App = () => (
  <ChakraProvider>
    <BrowserRouter>
      <div>
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
      </div>
    </BrowserRouter>
  </ChakraProvider>
);

export default App;
