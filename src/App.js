import Routers from "./shared/Routers";
import { QueryClient, QueryClientProvider } from "react-query";

const queryclient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <Routers />
    </QueryClientProvider>
  );
}

export default App;
