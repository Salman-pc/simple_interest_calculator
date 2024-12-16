import React, { useState } from 'react'
import '../App.css'
import { Button, Stack, TextField } from '@mui/material'



function Hero() {
    const [amount,setamount]=useState("")
    const [rate,setrate]=useState("")
    const [year,setyear]=useState("")
    const [interest,setInterast]=useState(0)

    const [isinvalidPrinciple,setisinvalidPrinciple]=useState(false)
    const [isinvalidrate,setisinvalidrate]=useState(false)
    const [isinvalidyear,setsinvalidyear]=useState(false)  

    const validRegex=/^[0-9]*.?[0-9]+$/

    const validateinput=(e)=>{
        const {name,value}=e.target
        console.log(name,value);
        
        if (name=="principle") {
            setamount(value)
        }
        else if(name=="rate"){
            setrate(value)
        }
        else{
            setyear(value)
        }

        if (validRegex.test(value) || value== "") {
            
            if (name=="principle") {
                setisinvalidPrinciple(false)
            }
            else if(name=="rate"){
                setisinvalidrate(false)
            }
            else{
                setsinvalidyear(false)
            }
        } else {
            if (name=="principle") {
                setisinvalidPrinciple(true)
            }
            else if(name=="rate"){
                setisinvalidrate(true)
            }
            else{
                setsinvalidyear(true)
            }
        }

        
    }

    const handileCalculate=(e)=>{
         e.preventDefault()
        console.log("hai welcome");
        if (amount && rate && year) {
            setInterast(amount*rate*year/100)
        }
        else{
            alert("please fill out")
        }
    }

    const resethandil =()=>{
        setInterast(0)
        setamount("")
        setrate("")
        setyear("")
        setisinvalidPrinciple(false)
        setisinvalidrate(false)
        setsinvalidyear(false)
    }

  return (
    <div>
        <div className="container mt-5 border p-3 " style={{maxWidth:"500px"}}>
            <div className="outer-div border  p-4 bg-light shadow rounded ">
            
            <div className="inner-div text-center">
                <h2 className="mb-3 fw-bold" style={{ color: "#ff5733" }}>
                Simple Interest Calculator
                </h2>
                <h4 className="text-muted" style={{ color: "#6c757d" }}>
                Calculate Your Simple Interest Easily
                </h4>
                {/* Nested Inner Div */}
                <div
                className="my-4 nested-inner-div d-flex flex-column justify-content-center align-items-center shadow-lg rounded"
                style={{
                    height: "200px",
                    background: "linear-gradient(90deg,rgb(142, 179, 51),rgb(134, 152, 29))",
                    color: "#2e2e2e",
                }}
                >
                <h1
                    className="d-flex align-items-center "
                    style={{ color: "#1e90ff" ,fontSize:"50px"}}
                >
                    ₹ {interest}
                </h1>
                <span className="fs-5 mt-2" style={{ color: "" }}>
                    Total Simple Interest
                </span>
                </div>
            </div>
            </div>
            <form>
                <TextField onChange={validateinput} value={amount || " "} id="principle_amount" name='principle' className='mt-2 w-100' label="Amount" variant="outlined"  />
                {isinvalidPrinciple && <p className='mt-1 text-danger fw-bold'>Invalide pricniple amount</p>}
                <TextField onChange={validateinput} value={rate || ""} id="principle_interest" name='rate' className='mt-2 w-100' label="Interest" variant="outlined"  />

                {isinvalidrate&&<p className='mt-1 text-danger fw-bold'>Invalide pricniple amount</p>}
                <TextField onChange={validateinput} value={year || ""} id="principle_year" name='year' className='mt-2 w-100' label="Year" variant="outlined"  />
                {isinvalidyear&&<p className='mt-1 text-danger fw-bold'>Invalide pricniple amount</p>}

                <Stack className='my-4' direction="row" spacing={2}>

                    <Button type='submit' onClick={handileCalculate} disabled={ isinvalidPrinciple || isinvalidrate || isinvalidyear } className='bg-dark text-light' variant="outlined">CALCULATE</Button>
                    {console.log("hi", isinvalidPrinciple || "hsi",isinvalidrate || "hoi",isinvalidyear)
                    }
                    <Button onClick={resethandil} variant="outlined">RESET</Button>
                        
                </Stack>
            </form>

        </div>
    </div>

  )
}

export default Hero
