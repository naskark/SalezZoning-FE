import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function GovernmentOffices() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

    let save = () => {
        
    }

    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Health Institutes </h3>

            <div>
            <TextField label = "Name of the government office" 
            value= {userData['nameofgovernmentoffice']} onChange={(e)=>setUserData({...userData, "nameofgovernmentoffice" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Address of the office" 
            value= {userData['addressofoffice']} onChange={(e)=>setUserData({...userData, "addressofoffice" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of employees" 
            value= {userData['numberofgovernmentemmployees']} onChange={(e)=>setUserData({...userData, "numberofgovernmentemmployees" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Working hours of the office" 
            value= {userData['workinghoursoftheoffice']} onChange={(e)=>setUserData({...userData, "workinghoursoftheoffice" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            
            <Button variant="contained" onClick={()=>setStep(15)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(17)} color= "primary">Next  </Button>
        </div>
    )
}