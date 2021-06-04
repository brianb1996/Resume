import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const content = {
    margin: '10px'
}

const page ={
    height: '100vh',
    padding: '5%'
}

const text ={
    margin:'0px 20px',
    
}

const logo ={
    height: '50px',
     
    
}

const Education = () => {

        return(
            <div style={page} id="Education">
                <Typography variant='h2'>
                    Education
                </Typography>
                <br/>
                <div style={content}>
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={12} md={2}>
                            <img alt="UMSL Logo" src="https://www.umsl.edu//files/images/umsl-logo.png" style={logo}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant='body1' style={text}>
                                University Of Missouri - St.Louis
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant='body1' style={text}>
                                Bachelor of Science - Computer Science
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant='body1' style={text}>
                                Anticipated Graduation - May 2022
                            </Typography>
                        </Grid>
                    </Grid>
                    <br/>
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={12} md={2}>
                            <img alt="STLCC Logo" src="https://pbs.twimg.com/profile_images/654710775290793984/05H8cJxU.jpg" style={logo}/>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant='body1' style={text}>
                                St. Louis Community College
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant='body1' style={text}>
                                Associate of Science - Engineering Science
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={12} md={3}>
                            <Typography variant='body1' style={text}>
                                Graduated - May 2019
                            </Typography>
                        </Grid>
                    </Grid>
                </div>
            </div>
        )
    
}

export default Education