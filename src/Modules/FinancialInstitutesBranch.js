import React, {useContext} from 'react';
import {Button , TextField} from '@material-ui/core';
import { multiStepContext } from '../StepContext';

export default function FinancialInstitutesBranch() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

    let save = () => {
        
    }
    return (
        <div>
            <h3 style={{color: 'red', textDecoration: 'underline'}}> Financial Institutes (Branch) </h3>

            <div>
            <TextField label = "Name of financial institute" 
            value= {userData['nameoffinancialinstitute']} onChange={(e)=>setUserData({...userData, "nameoffinancialinstitute" : e.target.value})} 
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
            <TextField label = "Ownership type of Institute" 
            value= {userData['ownershiptypeofinstitute']} onChange={(e)=>setUserData({...userData, "ownershiptypeofinstitute" : e.target.value})} 
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

            <div>
            <TextField label = "Number of customers" 
            value= {userData['numberofcustomers']} onChange={(e)=>setUserData({...userData, "numberofcustomers" : e.target.value})}
             margin = "normal" 
             variant = "outlined" 
             color= "secondary" />
            </div>

            <div>
            <TextField label = "Number of centers/groups" 
            value= {userData['numberofcenters']} onChange={(e)=>setUserData({...userData, "numberofcenters" : e.target.value})} 
            margin = "normal"
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Types of financial products" 
            value= {userData['typesoffinancialproducts']} onChange={(e)=>setUserData({...userData, "typesoffinancialproducts" : e.target.value})}
             margin = "normal" 
             variant = "outlined"
              color= "secondary" />
            </div>

            <div>
            <TextField label = "Established since" 
            value= {userData['establishedsince']} onChange={(e)=>setUserData({...userData, "establishedsince" : e.target.value})} 
            margin = "normal" 
            variant = "outlined"
             color= "secondary" />
            </div>


            <Button variant="contained" onClick={()=>setStep(9)} color= "secondary">Back  </Button><span> </span>
            <Button variant="contained" onClick={()=> save} color= "secondary">Save  </Button><span> </span>
        <Button variant="contained" onClick={()=>setStep(11)} color= "primary">Next  </Button>
        </div>
    )
}