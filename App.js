import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div >
     <Header />
     <Home />
     
     <Footer />

    </div>
  );
}

export default App;
