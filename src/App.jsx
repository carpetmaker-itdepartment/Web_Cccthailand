import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './views/Home'
import Footer from './components/Footer'
import OurStory from './views/OurStory'
import Navbar from './components/Navbar'
import Navbar2 from './components/Navbar2'
import OurInnovations from './views/OurInnovations'
import LoadingPages from './components/LoadingPages'
import OurCollections from './views/OurCollections'
import Contact from './views/Contact'
import InnoMonsilk from './views/InnoMonsilk'
import InnoAlfresco from './views/InnoAlfresco'
import InnoQvira from './views/InnoQvira'
import CollectionRadiance from './views/CollectionRadiance'
import CollectionAtelier from './views/CollectionAtelier'
import CollectionEthereally from './views/CollectionEthereally'
import CollectionOcean from './views/CollectionOcean'
import CollectionOurdoor from './views/CollectionOurdoor'
import CollectionVersa from './views/CollectionVersa'
import CollectionLuxury from './views/CollectionLuxury'
import CollectionPrivate from './views/CollectionPrivate'
import CollectionClassic from './views/CollectionClassic'

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false); // ตั้งค่าเริ่มต้นเป็น false

  useEffect(() => {
    // ตั้งค่า isLoading เป็น true ทุกครั้งที่เปลี่ยนเส้นทาง
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 1500); // เวลาสำหรับการโหลด
    return () => clearTimeout(timer); // ล้าง timeout เมื่อเปลี่ยนหน้า
  }, [location.pathname]); // เรียกใช้ทุกครั้งที่ path เปลี่ยน

  const navbarPages = [
    '/',
    '/ourcollections/cradiance',
    '/ourcollections/atelier',
    '/ourcollections/ethereally',
    '/ourcollections/ocean',
    '/ourcollections/ourdoor',
    '/ourcollections/versa',
    '/ourcollections/luxury',
    '/ourcollections/private',
    '/ourcollections/classic',
  ];

  // ถ้า isLoading เป็น true ให้แสดง Loading Page
  if (isLoading) return <LoadingPages />;

  


  return (
    <>
        {navbarPages.includes(location.pathname) ? <Navbar/> : <Navbar2/>}
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/ourstory' element={<OurStory/>} />
          <Route path='/ourinnovations' element={<OurInnovations/>}/>
          <Route path='/ourinnovations/monsilk' element={<InnoMonsilk/>}/>
          <Route path='/ourinnovations/alfresco' element={<InnoAlfresco/>}/>
          <Route path='/ourinnovations/qvira' element={<InnoQvira/>}/>

          <Route path='/ourcollections' element={<OurCollections/>}/>
          <Route path='/ourcollections/cradiance' element={<CollectionRadiance/>}/>
          <Route path='/ourcollections/atelier' element={<CollectionAtelier/>}/>
          <Route path='/ourcollections/ethereally' element={<CollectionEthereally/>}/>
          <Route path='/ourcollections/ocean' element={<CollectionOcean/>}/>
          <Route path='/ourcollections/ourdoor' element={<CollectionOurdoor/>}/>
          <Route path='/ourcollections/versa' element={<CollectionVersa/>}/>
          <Route path='/ourcollections/luxury' element={<CollectionLuxury/>}/>
          <Route path='/ourcollections/private' element={<CollectionPrivate/>}/>
          <Route path='/ourcollections/classic' element={<CollectionClassic/>}/>


      

          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </>
    
  )
}

export default App
