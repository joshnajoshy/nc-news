import Header from './Header'
import ListArticles from './ListArticles';
import Welcome from './Welcome';
import { Route, Routes } from "react-router";


function App() {
  return (
    <main>
    <Header/>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/articles' element={<ListArticles/>}/>
    </Routes>
    </main>
  )
}

export default App
