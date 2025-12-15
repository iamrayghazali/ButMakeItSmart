import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-secondary">
      <Navbar />
      <div className="mt-16">
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
