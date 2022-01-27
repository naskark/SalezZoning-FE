import React, { useContext} from 'react';
import '../App.css';
import Identifier from '../Modules/Identifier';
import VillageDetails from '../Modules/VillageDetails';
import Infrastructure from '../Modules/Infrastructure';
import Demographics from '../Modules/Demographics';
import CroppingPattern from '../Modules/CroppingPattern';
import CropIncomePattern from '../Modules/CropIncomePattern';
import OpinionMakers from '../Modules/OpinionMakers';
import NeedGaps from '../Modules/NeedGaps';
import StoresInVillage from '../Modules/StoresInVillage';
import FinancialInstitutesBranch from '../Modules/FinancialInstitutesBranch';
import FinancialInstitutesVillage from '../Modules/FinancialInstitutesVillage';
import EducationalInstitutes from '../Modules/EducationalInstitutes';
import CoOperativeSocities from '../Modules/CoOperativeSocities';
import ManufacturingUnit from '../Modules/ManufacturingUnit';
import HealthInstitutes from '../Modules/HealthInstitutes';
import GovernmentOffices from '../Modules/GovernmentOffices';
import ShoppingComplex from '../Modules/ShoppingComplex';
import APMC from '../Modules/APMC';
import {Stepper, StepLabel, Step} from '@material-ui/core';
import {multiStepContext} from '../StepContext';
import DisplayData from '../Modules/DisplayData';

function Form () {
    const {currentStep, finalData} = useContext(multiStepContext);
function showStep (step){
  switch(step){
  case 1 : 
  return <Identifier/>
  case 2 : 
  return <VillageDetails/>
  case 3 : 
  return <Infrastructure/>
  case 4 : 
  return <Demographics/>
  case 5 : 
  return <CroppingPattern/>
  case 6 : 
  return <CropIncomePattern />
  case 7 : 
  return <OpinionMakers />
  case 8 : 
  return < NeedGaps/>
  case 9 : 
  return < StoresInVillage/>
  case 10 : 
  return < FinancialInstitutesBranch/>
  case 11 : 
  return < FinancialInstitutesVillage/>
  case 12 : 
  return < EducationalInstitutes/>
  case 13 : 
  return <CoOperativeSocities />
  case 14 : 
  return < ManufacturingUnit/>
  case 15 : 
  return <HealthInstitutes />
  case 16 : 
  return < GovernmentOffices/>
  case 17 : 
  return < ShoppingComplex/>
  case 18 : 
  return < APMC/>
  
}
}

return (
    <div className='App-header'>
<div className="center-stepper">

<Stepper style={{width: '18%'}} activeStep = {currentStep -1} orientation= "horizontal" >
  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>
  
  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>
  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>

  <Step>
    <StepLabel></StepLabel>
  </Step>
  

</Stepper>
</div>

{ showStep(currentStep)}
<br/>
{finalData.length > 0 ? <DisplayData/> : ''}
  </div>
)
};

export default Form;
