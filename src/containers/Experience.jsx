import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';


const content = {
    margin: '5px'
}

const page ={
    padding: '10% 2%'
}

const Experience = () => {
    const work = [
        {
            "name": "Rick's Ace Hardware",
            "location": "Ellisville, MO",
            "role": "Department Manager",
            "start": "July 2019",
            "end": "Current",
            "responsibilities": [
                "Maintain Hardware, Electrical, Plumbing, and Housewares departments as well as Stock room and outdoor areas.",
                "General Retail Store Operations.",
                "Complete Customer Deliveries",
                "Resolve any issues with store equipment, and facilities.",
                "Ensure all customers receive outstanding customer service.",
                "Perform any role in the store."
            ]
        },
        {
            "name": "Office Depot",
            "location": "Ellisville, MO",
            "role": "Sales Associate and Computer Tech",
            "start": "March 2015",
            "end": "August 2016",
            "responsibilities": [
                "Resolve customer problems with computers, printers, and tablets.",
                "Set up devices for customers.",
                "Deliver customer satisfaction.",
                "Ensure customers get the complete package.",
                "Maintain the sales floor."
            ]
        },
        {
            "name": "Promac Inc.",
            "location": "Fenton, MO",
            "role": "Warehouse Associate",
            "start": "June 2014",
            "end": "March 2015",
            "responsibilities": [
                "Maintain Warehouse area and file room.",
                "Receive deliveries from various parcel carriers.",
                "Prepare Customer orders based on engineer’s specifications.",
                "Maintain inventory and inventory system.",
                "Deliver mail to various team members."
            ]
        }
    
    ]
        return(
            <div style={page} id="Experience">
                <Typography variant='h2'>
                    Experience
                </Typography>
                <Grid container spacing={1} style={content}>
                    {work.map((job) => {
                        return(
                            <>
                                <Grid item xs={12}justify="flex-end">
                                    <Grid container>
                                        <Grid item xs={12} justify="flex-end">
                                            <Typography variant='h6' align="right" style={{color:"darkslategrey"}}>
                                                {job.start} - {job.end}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6} justify="flex-start">
                                            <Typography variant='h6'>
                                                {job.name}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} md={6} justify="flex-start">
                                            <Typography variant='h6'>
                                                {job.location}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} justify="flex-start">
                                            <Typography variant='h6'>
                                                Role: {job.role}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12} justify="flex-start">
                                            <Typography variant='h6' align="left">
                                                Responsibilities:
                                            </Typography>
                                            <List dense="true">
                                                {job.responsibilities.map((respons) => {  
                                                    return(
                                                        <ListItem>
                                                            <ListItemIcon>
                                                                <FiberManualRecordIcon style={{fontSize: 10}}/>
                                                            </ListItemIcon>
                                                            <ListItemText
                                                            primary={respons}
                                                            />
                                                        </ListItem>
                                                    )   
                                                })}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </>
                        )
                    })}
                    
                    <Grid item xs={3}>

                    </Grid>

                </Grid>
            </div>
        )
    
}

export default Experience

// <List dense={dense}>
// {generate(
//   <ListItem>
//     <ListItemIcon>
//       <FolderIcon />
//     </ListItemIcon>
//     <ListItemText
//       primary="Single-line item"
//       secondary={secondary ? 'Secondary text' : null}
//     />
//   </ListItem>,
// )}
// </List>