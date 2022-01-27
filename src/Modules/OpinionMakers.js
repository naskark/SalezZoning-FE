import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function OpinionMakers() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

let save = () => {
    
}

    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Opinion Makers </h3>

            <div>
            <TextField label = "Name of Sarpanch" 
            value= {userData['nameofsarpanch']} onChange={(e)=>setUserData({...userData, "nameofsarpanch" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Contact number of Sarpanch" 
            value= {userData['contactofsarpanch']} onChange={(e)=>setUserData({...userData, "contactofsarpanch" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Name of milk society chairman" 
            value= {userData['milksocietychairman']} onChange={(e)=>setUserData({...userData, "milksocietychairman" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Contact number of milk society chairman" 
            value= {userData['contactnumberofchairman']} onChange={(e)=>setUserData({...userData, "contactnumberofchairman" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Name of milk society secretary" 
            value= {userData['nameofmilksocietysecretary']} onChange={(e)=>setUserData({...userData, "nameofmilksocietysecretary" : e.target.value})}
             margin = "normal" 
             variant = "outlined" 
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Contact number of milk society secretary" 
            value= {userData['numberofmilksocietysecretary']} onChange={(e)=>setUserData({...userData, "numberofmilksocietysecretary" : e.target.value})} 
            margin = "normal"
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Name of teacher" 
            value= {userData['nameofteacher']} onChange={(e)=>setUserData({...userData, "nameofteacher" : e.target.value})}
             margin = "normal" 
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Contact number of teacher" 
            value= {userData['contactnumberofteacher']} onChange={(e)=>setUserData({...userData, "contactnumberofteacher" : e.target.value})} 
            margin = "normal" 
            variant = "outlined"
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Name of large farmer (>10 acres, rounded)" 
            value= {userData['nameoflargefarmer']} onChange={(e)=>setUserData({...userData, "nameoflargefarmer" : e.target.value})} 
            margin = "normal" 
            variant = "outlined"
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Contact number of large farmer" 
            value= {userData['contactnumberoflargefarmer']} onChange={(e)=>setUserData({...userData, "contactnumberoflargefarmer" : e.target.value})} 
            margin = "normal" 
            variant = "outlined"
             color= "secondary" />
            </div>


            <Button variant="contained" onClick={()=>setStep(6)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(8)} color= "primary">Next  </Button>
        </div>
    )
}