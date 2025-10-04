// Fichero src/components/App.jsx
import { useState } from "react";
import Preview from "./Preview";
import Form from "./Form";


const App = () => {
  // Estados del componente
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [region, setRegion] = useState("España peninsular"); // Iniciamos el componente con la primera opción del select
  const [paymentType, setPaymentType] = useState("");
  const [legalTerms, setLegalTerms] = useState(false);




  return (
   
       
          <Preview name={name} 
          email={email} 
          region={region} 
          legalTerms={legalTerms} 
          paymentType={paymentType} 
          />
             

     
  );
};

export default App;