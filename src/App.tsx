import { Navbar } from './components/Navbar';
import { Apresentacao } from './components/Apresentacao';
import { SobreMim } from './components/SobreMim';
import { ProjectsSection } from './components/Projetos';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="bg-slate-900">
      <Navbar />
      <Apresentacao />
      <SobreMim />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;