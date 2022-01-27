import React , {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function Infrastructure() {
    const {setStep, userData, setUserData} = useContext(multiStepContext)

let save =() => {

}

    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Infrastructure </h3>
            <div>
            <TextField label = "Major Sources of Irrigation" value= {userData['sourcesofirrigation']} onChange={(e)=>setUserData({...userData, "sourcesofirrigation" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Area Under Irrigation" value= {userData['underirrigation']} onChange={(e)=>setUserData({...userData, "underirrigation" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Number of tractors in the village" value= {userData['tractors']} onChange={(e)=>setUserData({...userData, "tractors" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Number of pucca houses in the village" value= {userData['puccahouse']} onChange={(e)=>setUserData({...userData, "puccahouse" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Number of permanent shops in the village" value= {userData['permanentshop']} onChange={(e)=>setUserData({...userData, "permanentshop" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Number of manufacturing units in the village" value= {userData['manufacturingunits']} onChange={(e)=>setUserData({...userData, "manufacturingunits" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <Button variant="contained" onClick={()=>setStep(2)} color= "secondary">Back  </Button> <span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
            <Button variant="contained" onClick={() =>setStep(4) } color= "primary">Next  </Button>
        </div>
    )
}