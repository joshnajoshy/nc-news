import Header from './Header'
import ListArticles from './ListArticles';
import Welcome from './Welcome';
import { Route, Routes } from "react-router";
import SingleArticle from './SingleArticle';


function App() {
  return (
    <main>
    <Header/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/articles' element={<ListArticles/>}/>
      <Route path='/articles/:article_id' element={<SingleArticle/>}/>
    </Routes>
    </main>
  )
}

export default App
