// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"
import HomePage from './pages/HomePage';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
 import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
 const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
    </QueryClientProvider>
  );
}

export default App;
