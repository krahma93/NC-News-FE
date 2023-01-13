import './App.css';
import Header from "./components/Header"
import AllArticles from "./components/AllArticles"
import Nav from "./components/Nav"
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import SingleArticle from "./components/SingleArticle"
import LogIn from './components/Login';


function App() {


  return (

    <BrowserRouter>
    
    <div className="App">

      <Header />
      <Nav />
      <Routes>
        <Route>
          <Route path="/" element={<AllArticles />} />
          <Route path="/articles/:article_id" element={<SingleArticle />} />
          <Route path="/topics/:slug" element={<AllArticles />} />
          <Route path='/LogIn' element={<LogIn />} />
          <Route path="*" element={<h1> This page does not exist</h1>}/>


        </Route>
      </Routes>

  
    </div>
    </BrowserRouter>
  );
}

export default App;
