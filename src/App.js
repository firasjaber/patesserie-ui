// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from './pages/Dashboard';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        <Router>
          <Switch>
            <Route path="/admin">
              <Dashboard />
            </Route>
            <Route path="/">
              <LandingPage />
            </Route>
          </Switch>
        </Router>
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
