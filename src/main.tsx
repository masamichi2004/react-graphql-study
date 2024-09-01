import * as ReactDOM from 'react-dom/client';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});

// Supported in React 18+
const rootConfig = document.getElementById('root');
if (!rootConfig) {
  throw new Error('Root element not found');
}

const root = ReactDOM.createRoot(rootConfig);

root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
);