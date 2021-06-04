import React from 'react'
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { loadCSS } from 'fg-loadcss';

const content = {
    margin: '10px'
}

const page ={
    height: '100vh',
    padding: '5%'
}

const useStyles = makeStyles((theme) => ({
    progIcons: {
      '& > .fa': {
        margin: theme.spacing(2),
      },
    },
  }));

const Skills = () => {
    
      
     
        const classes = useStyles();
      
        React.useEffect(() => {
          const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
          );
      
          return () => {
            node.parentNode.removeChild(node);
          };
        }, []);
      
        return (
            <div style={page} id="Skills">
                <Typography variant='h2'>
                    Skills
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={3} sm = {2} md={1} align="center" > 
                        <Icon className="fab fa-html5" style={{ fontSize: 65,  display: 'initial'}}/>
                    </Grid>
                    <Grid item xs={3} sm = {2} md={1} align="center">
                        <Icon className="fab fa-css3-alt" style={{ fontSize: 65,  display: 'initial'}}/>
                    </Grid>
                    <Grid item xs={3} sm = {2} md={1} align="center">
                        <Icon className="fab fa-js-square" style={{ fontSize: 65,  display: 'initial'}}/>
                    </Grid>
                    <Grid item xs={3} sm = {2} md={1} align="center">
                        <Icon className="fab fa-react" style={{ fontSize: 65,  display: 'initial'}}/>
                    </Grid>
                    <Grid item xs={3} sm = {2} md={1} align="center" >
                        <Icon className="fab fa-java" style={{ fontSize: 65,  display: 'initial'}}/>
                    </Grid>
                    <Grid item xs={3} sm = {2} md={1} align="center">
                        <Icon className="fab fa-npm"  style={{ fontSize: 65, display: 'initial'}}/>
                    </Grid>
                    <Grid item xs={3} sm = {2} md={1} align="center">
                        <Icon className="fab fa-php"  style={{ fontSize: 65,  display: 'initial'}}/>
                    </Grid>
                </Grid>
            </div>
        )
    
}

export default Skills