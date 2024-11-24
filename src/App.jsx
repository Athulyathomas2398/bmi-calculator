
import './App.css'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [height,setHeight]=useState("")
  const [weight,setWeight]=useState("")
  const [bmi,setBmi]=useState("")
  const [category,setCategory]=useState("")
  
  console.log(height,weight);
console.log(bmi);


const calculateBMI=()=>{
  
  const heightInMeters=height/100 
  const bmi=(weight/(heightInMeters * heightInMeters)).toFixed(2)
  
  setBmi(bmi)
  if(height&&weight){
    if(bmi<18.5){
      setCategory("Under Weight")
    }
    else if(bmi>=18.5 && bmi<=24.9){
      setCategory("Normal Weight")
    }
    else if(bmi>=25 && bmi<=29.9){
      setCategory("Over Weight")
    }
    else{
      setCategory("Obesity")
    }

  }
  else{
    toast.warning("Please fill both height and weight")
    
  }
  
}

  return (
    <>

    <div className="body-bmi  border border-1 rounded shadow  mt-5 p-5 " style={{width:"480px",height:"500px",marginLeft:"400px"}}>
      <h1 className='h1 text-center p-3 fw-bold fs-3 '>BMI Calculator</h1>
      <div className="d-flex  p-5 w-100" style={{justifyContent:"space-between"}}>
      <FloatingLabel onChange={(e)=>setHeight(e.target.value)} className='input w-100 me-5 ' controlId="height" label="Height">
        <Form.Control type="number" placeholder="enter your height " />
      </FloatingLabel>

      <FloatingLabel onChange={(e)=>setWeight(e.target.value)} className='input w-100 ' controlId="weight" label="Weight">
        <Form.Control type="number" placeholder="enter your weight" />
      </FloatingLabel>
      </div>
      <div className=" p-5 text-center">
      <Button onClick={calculateBMI} style={{color:"white"}} variant="outline-info">Check Status</Button>

      </div>
      {
       height&&weight &&
       bmi &&
       <div className=" text-center" style={{color:"white"}}>
         <h3>Your BMI:{bmi}</h3>
         <h4 >Your Status:{category}</h4>
       </div>
        
      }

    </div>
     <ToastContainer position="top-center" autoClose={3000} theme="colored"></ToastContainer>
    </>
  )
}

export default App
