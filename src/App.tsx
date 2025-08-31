import { Navbar } from './components/Navbar';
import { Apresentacao } from './components/Apresentacao';
import { SobreMim } from './components/SobreMim';

function App() {
  return (
    <div className="bg-slate-900 font-sans antialiased text-gray-100">
      <Navbar />
      <Apresentacao />
      <SobreMim />
    </div>
  );
}

export default App;