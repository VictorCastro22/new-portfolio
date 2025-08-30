import { Navbar } from './components/Navbar';
import { Apresentacao } from './components/Apresentacao';

function App() {
  return (
    <div className="bg-slate-900 font-sans antialiased text-gray-100">
      <Navbar />
      <Apresentacao />
    </div>
  );
}

export default App;