import React, {useContext, useState} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';
import Axios from 'axios';


function Identifier() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);
    const url="/sales/zoning/village/{villageId}/identifier/"
    const [form, setData] = useState ({
        nameOfBranch: "",
        nameOfVillage:"",
        pincode:"",
        distanceFromBranch:"",
        population:"",
        numberOfHousehold:""

    })

    function handle(e) {
        const newdata={...form}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    

function save(e) {
    e.preventDefault();
    Axios.post(url,{
        // nameOfBranch: data.nameOfBranch,
    })
.then(res => {
    console.log(res.form)
})

}

    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Identifier </h3>
            <div>
            <TextField label = "Name of branch"   value= {form && form.nameOfBranch} onChange={(e)=>setUserData({...userData, "nameOfBranch" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Name of village" value= {userData['nameofvillage']} onChange={(e)=>setUserData({...userData, "nameofvillage" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Pin code" value= {userData['pincode']} onChange={(e)=>setUserData({...userData, "pincode" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Distance from Branch" value= {userData['distancefrombranch']} onChange={(e)=>setUserData({...userData, "distancefrombranch" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Populations" value= {userData['populations']} onChange={(e)=>setUserData({...userData, "populations" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Number of Households" value= {userData['numberofhouseholds']} onChange={(e)=>setUserData({...userData, "numberofhouseholds" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <div>
            <TextField label = "Gram Panchayat" value= {userData['grampanchayat']} onChange={(e)=>setUserData({...userData, "grampanchayat" : e.target.value})} margin = "normal" variant = "outlined" color= "secondary" />
            </div>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(2)} color= "primary">Next  </Button>
        </div>
    );
}

export default Identifier;