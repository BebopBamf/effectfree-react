import { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  extendTheme,
  Progress,
  Heading,
  ColorModeScript,
  ChakraProvider,
} from '@chakra-ui/react';

import store from './store';

const Home = lazy(() => import('./pages/home'));
const Portfolio = lazy(() => import('./pages/portfolio'));
const Blog = lazy(() => import('./pages/blog'));

import Navbar from './components/navbar';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

const App = () => (
  <Suspense fallback={<Progress isIndeterminate />}>
    <BrowserRouter>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Navbar />
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/portfolio">
              <Portfolio />
            </Route>

            <Route path="/blog">
              <Blog />
            </Route>

            <Route path="/test-loading">
              <Progress />
            </Route>

            <Route path="/*">
              <Heading>Page Not Found!</Heading>
            </Route>
          </Switch>
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </Suspense>
);

export default App;
