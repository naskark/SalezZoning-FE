import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function ShoppingComplex() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
let save = () => {

}


    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}>Shopping complex/ market in the branch location </h3>

            <div>
            <TextField label = "Name of complex" 
            value= {userData['nameofcomplex']} onChange={(e)=>setUserData({...userData, "nameofcomplex" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Address of complex" 
            value= {userData['addressofcomplex']} onChange={(e)=>setUserData({...userData, "addressofcomplex" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of stores" 
            value= {userData['numberofstores']} onChange={(e)=>setUserData({...userData, "numberofstores" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Types of stores in complex" 
            value= {userData['typesofstoresincomplex']} onChange={(e)=>setUserData({...userData, "typesofstoresincomplex" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Ownership of stores" 
            value= {userData['ownershipofstores']} onChange={(e)=>setUserData({...userData, "ownershipofstores" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Average daily walkins" 
            value= {userData['averagedailywalkinofstore']} onChange={(e)=>setUserData({...userData, "averagedailywalkinofstore" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            
            <Button variant="contained" onClick={()=>setStep(16)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(18)} color= "primary">Next  </Button>
        </div>
    )
}