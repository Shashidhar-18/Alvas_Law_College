// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Message from './pages/Messages';
import ViMi from './pages/vissionmission'
import Courses from './pages/Courses';
import Admission from './pages/Admission';
import Infrastructure from './pages/Infrastructure';
import Examination from './pages/Examination';
import Faculty from './pages/Faculty';
import Library from './pages/Library';
import Research from './pages/Research';
import Committees from './pages/Committees';
import Events from './pages/Events';
import Publications from './pages/Publications';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import MootCourt from './pages/moot';
// import GoogleFormPage from './pages/GoogleFormPage';
import ApplicationForm from './pages/ApplicationForm';



function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <Header />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="w-full">
          <div className="max-w-[2000px] mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/messages" element={<Message />} />
              <Route path="/vm" element={<ViMi />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/admission" element={<Admission />} />
              <Route path="/apply" element={<ApplicationForm />} />
              <Route path="/infrastructure" element={<Infrastructure />} />
              <Route path="/moot-court" element={<MootCourt />} />
              <Route path="/examination" element={<Examination />} />
              <Route path="/faculty" element={<Faculty />} />
              <Route path="/library" element={<Library />} />
              <Route path="/research" element={<Research />} />
              <Route path="/committees" element={<Committees />} />
              <Route path="/events" element={<Events />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>
        </main>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
