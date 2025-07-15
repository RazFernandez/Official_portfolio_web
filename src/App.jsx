import './styles/index.css'
import Root from './root'
import Home from './Pages/Home/Home'
import About from './Pages/AboutMe/About'
import Portfolio from './Pages/Portfolio/Portfolio'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Skills from './Pages/Skills/Skills'

/*
  All routes are defined in here
*/
//Fix nested main tag
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Root />}>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/portfolio' element={<Portfolio />}></Route>
    <Route path='/skills' element={<Skills />}></Route>
  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={router}>
     </RouterProvider>
    </>
  )
}

export default App
