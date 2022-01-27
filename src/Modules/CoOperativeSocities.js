import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function CoOperativeSocities() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

    let save = () => {
        
    }
    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Co-operative Socities </h3>

            <div>
            <TextField label = "Name of the co-operative society" 
            value= {userData['nameofsociety']} onChange={(e)=>setUserData({...userData, "nameofsociety" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" c
            olor= "secondary" />
            </div>

            <div>
            <TextField label = "Address of the co-operative society" 
            value= {userData['addressofsociety']} onChange={(e)=>setUserData({...userData, "addressofsociety" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Type of co-operative" 
            value= {userData['typeofsociety']} onChange={(e)=>setUserData({...userData, "typeofsociety" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Product/ commodity involved" 
            value= {userData['productinvolved']} onChange={(e)=>setUserData({...userData, "productinvolved" : e.target.value})} 
            margin = "normal" 
            variant = "outlined" 
            color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of members of the co-operative society" 
            value= {userData['numberofmembersinsociety']} onChange={(e)=>setUserData({...userData, "numberofmembersinsociety" : e.target.value})}
             margin = "normal" 
             variant = "outlined" 
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Average daily collection" 
            value= {userData['dailycollection']} onChange={(e)=>setUserData({...userData, "dailycollection" : e.target.value})} 
            margin = "normal"
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Payment cycle of the co-operative society" 
            value= {userData['paymentcycle']} onChange={(e)=>setUserData({...userData, "paymentcycle" : e.target.value})}
             margin = "normal" 
             variant = "outlined"
              color= "secondary" />
            </div>

            


            <Button variant="contained" onClick={()=>setStep(12)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(14)} color= "primary">Next  </Button>
        </div>
    )
}