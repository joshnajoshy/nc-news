import Header from './Header'
import ListArticles from './ListArticles';
import Welcome from './Welcome';
import { Route, Routes } from "react-router";
import SingleArticle from './SingleArticle';
import ListTopics from './ListTopics';
import ArticlesForTopic from './ArticlesForTopic';
import ErrorComponent from './ErrorComponent';


function App() {
  return (
    <main>
    <Header/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/articles' element={<ListArticles/>}/>
      <Route path='/articles/:article_id' element={<SingleArticle/>}/>
      <Route path='/topics' element={<ListTopics/>}/>
      <Route path='/topics/:topic' element={<ArticlesForTopic/>}/>
      <Route path='*' element={<ErrorComponent/>} />
      <Route path='/articles/*' element={<ErrorComponent/>} />
      <Route path='/topics/*' element={<ErrorComponent/>} />
    </Routes>
    </main>
  )
}

export default App
