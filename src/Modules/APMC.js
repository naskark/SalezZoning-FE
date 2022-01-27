import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function APMC() {
    const {setStep, userData, setUserData, submitData} = useContext(multiStepContext);
    
    let save = () => {

    }
    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}>APMC </h3>

            <div>
            <TextField label = "Name of APMC" 
            value= {userData['nameofapmc']} onChange={(e)=>setUserData({...userData, "nameofapmc" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Address of APMC" 
            value= {userData['addressofapmc']} onChange={(e)=>setUserData({...userData, "addressofapmc" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of traders in APMC" 
            value= {userData['numberoftradersinapmc']} onChange={(e)=>setUserData({...userData, "numberoftradersinapmc" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of agri-input shops near APMC" 
            value= {userData['numberofagrishops']} onChange={(e)=>setUserData({...userData, "numberofagrishops" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Major commodities traded at APMC" 
            value= {userData['majorcommoditiestraded']} onChange={(e)=>setUserData({...userData, "majorcommoditiestraded" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            
            <Button variant="contained" onClick={()=>setStep(17)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={submitData} color= "primary">Submit</Button>
        </div>
    )
}