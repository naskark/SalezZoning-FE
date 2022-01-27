import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function ManufacturingUnit() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);


    let save =() => {
        
    }
    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Manufacturing Unit/ Factories and Producers </h3>

            <div>
            <TextField label = "Name of Manufacturing unit/ producer" 
            value= {userData['nameofmanufacturingunit']} onChange={(e)=>setUserData({...userData, "nameofmanufacturingunit" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Address of manufacturing unit/ producer" 
            value= {userData['addressofmanufacturingunit']} onChange={(e)=>setUserData({...userData, "addressofmanufacturingunit" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Location of manufacturing unit" 
            value= {userData['locationofmanufacturingunit']} onChange={(e)=>setUserData({...userData, "locationofmanufacturingunit" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Scale of manufacturing" 
            value= {userData['scaleofmanufacturing']} onChange={(e)=>setUserData({...userData, "scaleofmanufacturing" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Product manufactured" 
            value= {userData['productmanufactured']} onChange={(e)=>setUserData({...userData, "productmanufactured" : e.target.value})}
             margin = "normal" 
             variant = "outlined" 
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Source of major raw material" 
            value= {userData['sourceofmajorrawmaterial']} onChange={(e)=>setUserData({...userData, "sourceofmajorrawmaterial" : e.target.value})} 
            margin = "normal"
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of employees" 
            value= {userData['numberofemployees']} onChange={(e)=>setUserData({...userData, "numberofemployees" : e.target.value})}
             margin = "normal" 
             variant = "outlined"
              color= "secondary" />
            </div>

            


            <Button variant="contained" onClick={()=>setStep(13)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(15)} color= "primary">Next  </Button>
        </div>
    )
}