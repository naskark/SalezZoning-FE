import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function EducationalInstitutes() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

    let save =() => {
        
    }
    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Educational Institutes </h3>

            <div>
            <TextField label = "Name of education institute" 
            value= {userData['nameofeducationalinstitute']} onChange={(e)=>setUserData({...userData, "nameofeducationalinstitute" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Address of the institute" 
            value= {userData['addressoftheeducationalinstitute']} onChange={(e)=>setUserData({...userData, "addressoftheeducationalinstitute" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Ownership type of Institute" 
            value= {userData['ownershiptypeofeducationalinstitute']} onChange={(e)=>setUserData({...userData, "ownershiptypeofeducationalinstitute" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Level of education" 
            value= {userData['levelofeducation']} onChange={(e)=>setUserData({...userData, "levelofeducation" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Type of Institute" 
            value= {userData['typeofisntitute']} onChange={(e)=>setUserData({...userData, "typeofisntitute" : e.target.value})}
             margin = "normal" 
             variant = "outlined" 
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Medium of education" 
            value= {userData['meduimofeducation']} onChange={(e)=>setUserData({...userData, "meduimofeducation" : e.target.value})} 
            margin = "normal"
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of Teachers/Professors" 
            value= {userData['numberofteachers']} onChange={(e)=>setUserData({...userData, "numberofteachers" : e.target.value})}
             margin = "normal" 
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of students" 
            value= {userData['numberofstudents']} onChange={(e)=>setUserData({...userData, "numberofstudents" : e.target.value})} 
            margin = "normal" 
            variant = "outlined"
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Timings of the institute" 
            value= {userData['timingoftheinstitute']} onChange={(e)=>setUserData({...userData, "timingoftheinstitute" : e.target.value})} 
            margin = "normal" 
            variant = "outlined"
             color= "secondary" />
            </div>


            <Button variant="contained" onClick={()=>setStep(11)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(13)} color= "primary">Next  </Button>
        </div>
    )
}