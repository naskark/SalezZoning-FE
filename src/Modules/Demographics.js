import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function Demographics() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

    let save =() => {
        
    }
    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Demographics </h3>

            <div>
            <TextField label = "Number of land owning households in the village" 
            value= {userData['landowning']} onChange={(e)=>setUserData({...userData, "landowning" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Number of marginal farmers (<2.5 acres, rounded) in the village" 
            value= {userData['marginalfarmers']} onChange={(e)=>setUserData({...userData, "marginalfarmers" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of small farmers (2.5 to 5 acres, rounded) in the village" 
            value= {userData['smallfarmers']} onChange={(e)=>setUserData({...userData, "smallfarmers" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of medium farmers (5 to 10 acres, rounded) in the village" 
            value= {userData['mediumfarmers']} onChange={(e)=>setUserData({...userData, "mediumfarmers" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of large farmers (>10 acres, rounded) in the village" 
            value= {userData['largefarmers']} onChange={(e)=>setUserData({...userData, "largefarmers" : e.target.value})}
             margin = "normal" 
             variant = "outlined" 
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of salaried individuals in the village" 
            value= {userData['salariedindividuals']} onChange={(e)=>setUserData({...userData, "salariedindividuals" : e.target.value})} 
            margin = "normal"
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of NRI households in the village" 
            value= {userData['nrihouseholds']} onChange={(e)=>setUserData({...userData, "nrihouseholds" : e.target.value})}
             margin = "normal" 
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of doctors in the village" 
            value= {userData['doctors']} onChange={(e)=>setUserData({...userData, "doctors" : e.target.value})} 
            margin = "normal" 
            variant = "outlined"
             color= "secondary" />
            </div>
            <Button variant="contained" onClick={()=>setStep(3)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(5)} color= "primary">Next  </Button>
        </div>
    )
}