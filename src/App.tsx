import { Navbar } from './components/Navbar';
import { Apresentacao } from './components/Apresentacao';
import { SobreMim } from './components/SobreMim';
import { ProjectsSection } from './components/Projetos';

function App() {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Apresentacao />
      <SobreMim />
      <ProjectsSection />
    </div>
  );
}

export default App;