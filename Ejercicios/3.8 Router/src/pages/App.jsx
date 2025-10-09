import 'react'
import { Routes, Route}  from "react-router-dom";
import '../styles/app.css'

const App = () => {
  

  return (
    
         
    <Routes>
      <Route path="/" element={Overview}/>
      <Route path= "/repositories" element={Repositories}/>
      <Route path= "/packages" element={Packages}/>
      <Route path= "/people" element={People}/>
      <Route path= "/teams" element={Teams}/>
      <Route path= "/projects" element={Projects}/>
      <Route path= "/settings" element={Settings}/>
    </Routes> 
  )
}

export default App
