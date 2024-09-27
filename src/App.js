import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { initializeApp } from './data/init';
import { RoutesComponent } from './pages/routes';
import Title from './components/Title';

function App() {
  initializeApp();

  

  return (
    <>
      <Router>
        <div className="App" >
          <Title />
          <header className="header">
            <div className='d-flex align-items-center mt-5 p-4 container rounded'
              style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}
            >
              <RoutesComponent />
            </div>
          </header>
          <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
          <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/web/popper.min.js"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </div>
      </Router>
    </>
  );
}

export default App;