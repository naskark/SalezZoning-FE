import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function CroppingPattern() {
const { setStep, userData, setUserData} = useContext(multiStepContext);

let save = () => {

}

    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Cropping Pattern </h3>
            <div>
            <TextField label = "Name of crop" value= {userData['nameofcrop']} onChange={(e)=>setUserData({...userData, "nameofcrop" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Season of crop" value= {userData['seasonofcrop']} onChange={(e)=>setUserData({...userData, "seasonofcrop" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Area under cultivation for crop" value= {userData['cropcultivation']} onChange={(e)=>setUserData({...userData, "cropcultivation" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Cash or subsistence crop" value= {userData['subsistence']} onChange={(e)=>setUserData({...userData, "subsistence" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            {/* <div>
            <TextField label = "District" value= {userData['district']} onChange={(e)=>setUserData({...userData, "district" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div> */}
            <Button variant="contained" onClick={() =>setStep(4) } color= "secondary">Back </Button> <span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
            <Button variant="contained" onClick={()=>setStep(6)} color= "primary">Next  </Button>
        
        </div>
    )
}