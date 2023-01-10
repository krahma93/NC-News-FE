import './App.css';
import Header from "./components/Header"
import AllArticles from "./components/AllArticles"
import Nav from "./components/Nav"
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import SingleArticle from "./components/SingleArticle"



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
        </Route>
      </Routes>

  
    </div>
    </BrowserRouter>
  );
}

export default App;
