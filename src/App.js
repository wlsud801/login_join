<<<<<<< HEAD
import Routers from "./shared/Routers";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
=======
import { QueryClient, QueryClientProvider } from 'react-query';
import Routers from './shared/Routers';
>>>>>>> origin/main

const queryclient = new QueryClient();

function App() {
  return (
<<<<<<< HEAD
    <QueryClientProvider client={queryClient}>
      <Routers />;
=======
    <QueryClientProvider client={queryclient}>
      <Routers />
>>>>>>> origin/main
    </QueryClientProvider>
  );
}

export default App;
