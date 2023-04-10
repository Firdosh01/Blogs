import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Blogs from './Components/Blogs';
import Pagination from './Pagination';

function App() {
  return (
    <div>

      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default App;
