import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
// import Home from './components/Home.jsx'
import ShowAllTask from './Alltask/ShowAllTask.jsx'
import {
  QueryClient, QueryClientProvider
} from '@tanstack/react-query'
import UpdateTask from './update/UpdateTask.jsx'
import Nabvar from './Navbar/Nabvar.jsx'
const queryClient =new QueryClient();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      
    <BrowserRouter>
   
    <Nabvar />
    <Routes>
      <Route path="/" element={<App />} />
      {/* < Route path='/home' element = {<Home />} /> */}
      < Route path='/alltask' element = {<ShowAllTask />}  />
      < Route path='/updateTask/:id' element = {<UpdateTask />} loader = {(params) => fetch(`http://localhost:8000/updateTask/${params.id}`)} />
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>
  </StrictMode>,
)
// = () => fetch(``) 
