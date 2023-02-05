import React from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import Navigation from './src/navigation';
import { Provider } from 'react-redux';
import { store } from './src/states';

const client = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={client}>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </QueryClientProvider>
  )
}

export default App