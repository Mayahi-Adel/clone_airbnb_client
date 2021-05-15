import './App.css';
import Home from './pages/Home';
import Header from './pages/partials/Header';
import Footer from './pages/partials/Footer';
import SearchPage from './pages/SearchPage'; 
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Search" component={SearchPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
      

      
      {/* Home */}

          {/* Header */}

          {/* Banner */}
              {/* Search */}

          {/* Cards */}

          {/* Footer */}

      {/* SearchPage */}
          {/* ..... */}
      </div>
  );
}

export default App;
