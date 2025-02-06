
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css'
import Home from './page/Home';
import InfinteScroll from "./page/InfinteScroll";
import Modal from "./components/Modal";
import Pagination from "./page/Pagination";
import Employee from "./page/Employee";
import ReactTheory from "./page/ReactTheory";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/InfinteScroll' element={<InfinteScroll />} />
        <Route path='/Modal' element={<Modal />} />
        <Route path='/Pagination' element={<Pagination />} />
        <Route path='/Employee' element={<Employee />} />
        <Route path='/ReactTheory' element={<ReactTheory />} />
      </Routes>
    </BrowserRouter >
  )
}

export default App
