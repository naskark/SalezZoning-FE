import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function FinancialInstitutesVillage() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

    let save = () => {

    }
    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Financial Institutes (Village) </h3>

            <div>
            <TextField label = "MFIs/ Financial institutes doing business in the village" 
            value= {userData['financialinstitutebusiness']} onChange={(e)=>setUserData({...userData, "financialinstitutebusiness" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            
            <Button variant="contained" onClick={()=>setStep(10)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(12)} color= "primary">Next  </Button>
        </div>
    )
}