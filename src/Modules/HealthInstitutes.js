import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function HealthInstitutes() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

let save = () => {
  
}

    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Health Institutes </h3>

            <div>
            <TextField label = "Name of the health institute" 
            value= {userData['nameofhealthinstitute']} onChange={(e)=>setUserData({...userData, "nameofhealthinstitute" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Address of the institute" 
            value= {userData['addressoftheinstitute']} onChange={(e)=>setUserData({...userData, "addressoftheinstitute" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Ownership type of institute" 
            value= {userData['ownershiptypeofhealthinstitute']} onChange={(e)=>setUserData({...userData, "ownershiptypeofhealthinstitute" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Type of institute" 
            value= {userData['typeofhealthinstitute']} onChange={(e)=>setUserData({...userData, "typeofhealthinstitute" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of doctors" 
            value= {userData['numberofdoctors']} onChange={(e)=>setUserData({...userData, "numberofdoctors" : e.target.value})}
             margin = "normal" 
             variant = "outlined" 
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of other staff" 
            value= {userData['numberofotherstaff']} onChange={(e)=>setUserData({...userData, "numberofotherstaff" : e.target.value})} 
            margin = "normal"
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Timings of the institute" 
            value= {userData['timingofthehealthinstitute']} onChange={(e)=>setUserData({...userData, "timingofthehealthinstitute" : e.target.value})}
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
            <TextField label = "Availability of medical store" 
            value= {userData['availabilityofmedicalstore']} onChange={(e)=>setUserData({...userData, "availabilityofmedicalstore" : e.target.value})}
             margin = "normal" 
             variant = "outlined"
              color= "secondary" />
            </div>

            


            <Button variant="contained" onClick={()=>setStep(14)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(16)} color= "primary">Next  </Button>
        </div>
    )
}