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

import '../static/fonts/iosevka-plex.css';
import '../static/fonts/iosevka-plex-aile.css';
import '../static/fonts/iosevka-plex-etoile.css';

const config = {
  initialColorMode: 'system',
  useSystemColorMode: true,
};

const theme = extendTheme({
  config,
  fonts: {
    heading:
      '"Iosevka Plex Aile Web",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    body: '"Iosevka Plex Aile Web",-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"',
    mono: '"Iosevka Plex Web",SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace',
  },
});

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
