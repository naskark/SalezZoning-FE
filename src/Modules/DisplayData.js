import React, { useContext } from "react";
import { TableContainer, TableHead, TableBody, TableCell, TableRow, Table  } from "@material-ui/core";
import { multiStepContext } from "../StepContext";

export default function DisplayData() {
    const { finalData} = useContext (multiStepContext);
    return (
        <TableContainer style={{display: 'flex', justifyContent: 'center'}}>
            <Table border="1" style={{width: '70%', justifyContent:'center'}} size="small" aria-label="caption table">
                <TableHead>
                    <TableRow style={{backgroundColor: 'burlywood', color: 'aliceblue'}}>
                    <TableCell> Name of branch </TableCell>
                    <TableCell> Name of village </TableCell>
                    <TableCell> Pin code </TableCell>
                    <TableCell> Distance from Branch </TableCell>
                    <TableCell> Populations </TableCell>
                    <TableCell> Number of Households </TableCell>
                    <TableCell> Gram Panchayat </TableCell>
                    <TableCell> Address of Gram Panchayat </TableCell>
                    <TableCell> High Agrregation Points </TableCell>
                    <TableCell> Major Sources of Irrigation </TableCell>
                    <TableCell> Area Under Irrigation </TableCell>
                    <TableCell> Number of tractors in the village </TableCell>
                    <TableCell> Number of pucca houses in the village </TableCell>
                    <TableCell> Number of permanent shops in the village </TableCell>
                    <TableCell> Number of manufacturing units in the village </TableCell>
                    <TableCell> Number of land owning households in the village </TableCell>
                    <TableCell> Number of marginal farmers in the village </TableCell>
                    <TableCell> Number of small farmers (2.5 to 5 acres, rounded) in the village </TableCell>
                    <TableCell> Number of medium farmers (5 to 10 acres, rounded) in the village </TableCell>
                    <TableCell> Number of large farmers (10 acres, rounded) in the village </TableCell>
                    <TableCell> Number of salaried individuals in the village </TableCell>
                    <TableCell> Number of NRI households in the village </TableCell>
                    <TableCell> Number of doctors in the village </TableCell>
                    <TableCell> Name of crop </TableCell>
                    <TableCell>Season of crop </TableCell>
                    <TableCell> Area under cultivation for crop </TableCell>
                    <TableCell> Cash or subsistence crop </TableCell>
                    <TableCell> Month Of Harvest Of Crop </TableCell>
                    <TableCell>Average Yield of Crop </TableCell>
                    <TableCell> Crops Sold To </TableCell>
                    <TableCell> Income Realization </TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                {finalData.map((data) =>(
                    <TableRow key={data.email}>

                    <TableCell> {data.nameofbranch} </TableCell>
                    <TableCell> {data.nameofvillage} </TableCell>
                    <TableCell> {data.pincode} </TableCell>
                    <TableCell> {data.distancefrombranch} </TableCell>
                    <TableCell> {data.populations} </TableCell>
                    <TableCell> {data.numberofhouseholds} </TableCell>
                    <TableCell> {data.grampanchayat} </TableCell>
                    <TableCell> {data.address} </TableCell>
                    <TableCell> {data.agrregation} </TableCell>
                    <TableCell> {data.sourcesofirrigation} </TableCell>
                    <TableCell> {data.underirrigation} </TableCell>
                    <TableCell> {data.tractors} </TableCell>
                    <TableCell> {data.puccahouse} </TableCell>
                    <TableCell> {data.permanentshop} </TableCell>
                    <TableCell> {data.manufacturingunits} </TableCell>
                    <TableCell> {data.landowning} </TableCell>
                    <TableCell> {data.marginalfarmers} </TableCell>
                    <TableCell> {data.smallfarmers} </TableCell>
                    <TableCell> {data.mediumfarmers} </TableCell>
                    <TableCell> {data.largefarmers} </TableCell>
                    <TableCell> {data.salariedindividuals} </TableCell>
                    <TableCell> {data.nrihouseholds} </TableCell>
                    <TableCell> {data.doctors} </TableCell>
                    <TableCell> {data.nameofcrop} </TableCell>
                    <TableCell> {data.seasonofcrop} </TableCell>
                    <TableCell> {data.cropcultivation} </TableCell>
                    <TableCell> {data.subsistence} </TableCell>
                    <TableCell> {data.cropharvest} </TableCell>
                    <TableCell> {data.yieldofcrop} </TableCell>
                    <TableCell> {data.cropssoldto} </TableCell>
                    <TableCell> {data.incomerealization} </TableCell>

                    </TableRow>
                ))}
                </TableBody>
            </Table>

        </TableContainer>
    )
}
