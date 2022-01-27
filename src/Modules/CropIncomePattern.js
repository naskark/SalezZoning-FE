import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function CropIncomePattern() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

    let save = () => {
        
    }
    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Crop Income Pattern </h3>

            <div>
            <TextField label = "Month Of Harvest Of Crop" 
            value= {userData['cropharvest']} onChange={(e)=>setUserData({...userData, "cropharvest" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Average Yield of Crop" 
            value= {userData['yieldofcrop']} onChange={(e)=>setUserData({...userData, "yieldofcrop" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Crops Sold To" 
            value= {userData['cropssoldto']} onChange={(e)=>setUserData({...userData, "cropssoldto" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Income Realization" 
            value= {userData['incomerealization']} onChange={(e)=>setUserData({...userData, "incomerealization" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>
            <Button variant="contained" onClick={()=>setStep(5)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(7)} color= "primary">Next  </Button>
        </div>
    )
}