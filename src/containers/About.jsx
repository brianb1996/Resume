import React from 'react'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  }));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const content = {
    margin: '10px'
}

const page ={
    height: '45vh',
    padding: '10% 2%'
}

const About = () => {
    const classes = useStyles()
        return(
            <>
                <div style={page} id="About">
                    <Grid container spacing={1} justify='flex-end'>
                        <Hidden smUp implementation="css">
                            <Grid item xs={3}>
                                <Avatar 
                                    alt="Brian Bredahl" 
                                    src="https://media-exp1.licdn.com/dms/image/C4D03AQEmxodT-brRpQ/profile-displayphoto-shrink_200_200/0/1517494521058?e=1628121600&v=beta&t=lBKpvRbo9xe_iyv7PIIp55lqdkxzzzV-tR5EtcZTLZg" 
                                    className={classes.large}
                                />
                            </Grid>
                        </Hidden>
                        <Grid item xs justify="flex-end">
                            <Grid container spacing={1} justify='flex-end'>
                                <ThemeProvider theme={theme}>
                                    <Typography variant='h1' justify="flex-end" align="right">
                                        <b>BRIAN</b>
                                    </Typography>
                                    <Typography  variant='h1' justify="flex-end" style={{color:'darkslategrey'}} align="right">
                                        <b>BREDAHL</b>
                                    </Typography>
                                </ThemeProvider>
                            </Grid>
                        </Grid>
                        <Grid container justify="flex-end">
                            <Grid item xs={12}>
                                <Typography variant='h5' align="right">
                                    ST. LOUIS MISSOURI
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='h5' align="right">
                                    314-809-2486
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant='h5' align="right">
                                    bbredahl1996@gmail.com
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                <div style={page}>
                    <div style={content}>
                        <Typography variant='body1'>
                            I am currently pursing my Bachelor's Degree in Computer Science at UMSL 
                            and I am searching for an opportunity in programming and web development.
                        </Typography>
                    </div>
                    <Grid container spacing={0} justify="flex-start">
                        <Grid item xs={0}>
                            <IconButton color="inherit" onClick={()=> window.open("http://www.linkedin.com/in/brian-bredahl-338054138", "_blank", "noopener,noreferrer")}>
                                <LinkedInIcon fontSize='large' style={{color:"darkslategrey"}}/>
                            </IconButton>
                        </Grid>
                        <Grid item xs={0}>
                            <IconButton color="inherit" onClick={()=> window.open("https://github.com/brianb1996", "_blank", "noopener,noreferrer")}>
                                <GitHubIcon fontSize="large" style={{color:"darkslategrey"}}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                    
                </div>
            </>
        )
    
}

export default About