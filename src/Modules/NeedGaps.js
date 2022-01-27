import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function NeedGaps() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

let save = () => {
    
}

    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Need Gaps </h3>

            <div>
            <TextField label = "Agricultural Implements" 
            value= {userData['agriculturalimplements']} onChange={(e)=>setUserData({...userData, "agriculturalimplements" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Dairy equipments" 
            value= {userData['dairyequipments']} onChange={(e)=>setUserData({...userData, "dairyequipments" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Irrigation sources" 
            value= {userData['irrigationsources']} onChange={(e)=>setUserData({...userData, "irrigationsources" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Borrowing purposes" 
            value= {userData['borrowingpurposes']} onChange={(e)=>setUserData({...userData, "borrowingpurposes" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Informal sources of borrowing" 
            value= {userData['informalsourcesofburrowing']} onChange={(e)=>setUserData({...userData, "informalsourcesofburrowing" : e.target.value})}
             margin = "normal" 
             variant = "outlined" 
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Purpose of informal borrowing" 
            value= {userData['purposeofinformalburrowing']} onChange={(e)=>setUserData({...userData, "purposeofinformalburrowing" : e.target.value})} 
            margin = "normal"
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Average amount of informal borrowing" 
            value= {userData['averageamountofinformalborrowing']} onChange={(e)=>setUserData({...userData, "averageamountofinformalborrowing" : e.target.value})}
             margin = "normal" 
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Average rate of interest of informal borrowing" 
            value= {userData['rateofinterestofinformalborrowing']} onChange={(e)=>setUserData({...userData, "rateofinterestofinformalborrowing" : e.target.value})} 
            margin = "normal" 
            variant = "outlined"
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Average duration of informal borrowing" 
            value= {userData['durationofinformaborrowing']} onChange={(e)=>setUserData({...userData, "durationofinformaborrowing" : e.target.value})} 
            margin = "normal" 
            variant = "outlined"
             color= "secondary" />
            </div>

            <Button variant="contained" onClick={()=>setStep(7)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(9)} color= "primary">Next  </Button>
        </div>
    )
}