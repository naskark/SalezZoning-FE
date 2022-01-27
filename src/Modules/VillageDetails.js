import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function VillageDetails() {
const { setStep, userData, setUserData} = useContext(multiStepContext);

let save = () => {

}

    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Village Details </h3>
            <div>
            <TextField label = "Address of Gram Panchayat" value= {userData['address']} onChange={(e)=>setUserData({...userData, "address" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "High Agrregation Points" value= {userData['agrregation']} onChange={(e)=>setUserData({...userData, "agrregation" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            {/* <div>
            <TextField label = "District" value= {userData['district']} onChange={(e)=>setUserData({...userData, "district" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div> */}
            <Button variant="contained" onClick={() =>setStep(1) } color= "secondary">Back </Button> <span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={() =>setStep(3) } color= "primary">Next  </Button>
        </div>
    )
}