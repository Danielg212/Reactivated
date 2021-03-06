import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './styles/index.css';
import useMediaQuery from './hooks/useMediaQuery';
import Header from './layout/Header';
import Navbar from './layout/Navbar';
import Particles from './components/Particles';

const NoMobileSupport = lazy(() => import('./pages/NoMobileSupport'));
const Home = lazy(() => import('./pages/Home'));
const Queue = lazy(() => import('./pages/ProjectPage/Queue'));
const Gmail = lazy(() => import('./pages/ProjectPage/Gmail'));

export default function App() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (isMobile) {
    return (
      <LazyLoad>
        <NoMobileSupport />;
      </LazyLoad>
    );
  } else {
    return (
      <div className='App'>
        <Router>
          <Header />
          <Navbar />

          <LazyLoad>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/queue' component={Queue} />
              <Route path='/gmail' component={Gmail} />
            </Switch>
          </LazyLoad>
        </Router>

        <Particles />
      </div>
    );
  }
}

const LazyLoad = ({ children }) => <Suspense fallback={<div />}>{children}</Suspense>;
