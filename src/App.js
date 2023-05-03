import { QueryClient, QueryClientProvider } from 'react-query';
import Routers from './shared/Routers';

const queryclient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <Routers />
    </QueryClientProvider>
  );
}

export default App;
