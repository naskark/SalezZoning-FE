import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function StoresInVillage() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

let save = () => {

}

    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Stores in Village </h3>

            <div>
            <TextField label = "Type of store" 
            value= {userData['typeofstore']} onChange={(e)=>setUserData({...userData, "typeofstore" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Name of store" 
            value= {userData['nameofstore']} onChange={(e)=>setUserData({...userData, "nameofstore" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Address of store" 
            value= {userData['addressofstore']} onChange={(e)=>setUserData({...userData, "addressofstore" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Name of owner" 
            value= {userData['nameofowner']} onChange={(e)=>setUserData({...userData, "nameofowner" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Contact number of owner" 
            value= {userData['contactnumberofowner']} onChange={(e)=>setUserData({...userData, "contactnumberofowner" : e.target.value})}
             margin = "normal" 
             variant = "outlined" 
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Average daily walkins" 
            value= {userData['averagedailywalkins']} onChange={(e)=>setUserData({...userData, "averagedailywalkins" : e.target.value})} 
            margin = "normal"
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Build of store" 
            value= {userData['buildofstore']} onChange={(e)=>setUserData({...userData, "buildofstore" : e.target.value})}
             margin = "normal" 
             variant = "outlined"
              color= "secondary" />
            </div>

            

            <Button variant="contained" onClick={()=>setStep(8)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(10)} color= "primary">Next  </Button>
        </div>
    )
}