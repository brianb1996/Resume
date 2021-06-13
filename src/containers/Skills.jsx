import React, {useState, useEffect} from 'react'
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import { loadCSS } from 'fg-loadcss';
import { makeStyles } from '@material-ui/core/styles';


const content = {
    margin: '10px'
}

const page ={
    height: '100vh',
    padding: '5%'
}

const useStyles = makeStyles((theme) => ({
    popover: {
      pointerEvents: 'none',
    },
    paper: {
      padding: theme.spacing(1),
    },
  }));



const Skills = () => {
      
        const [anchorEl, setAnchorEl] = useState(null)
        const [id, setId] = useState("")

        useEffect(() => {
          const node = loadCSS(
            'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
            document.querySelector('#font-awesome-css'),
          );
      
          return () => {
            node.parentNode.removeChild(node);
          };
        }, []);


        const handlePopoverOpen = (event, id) => {
            setAnchorEl(event.currentTarget)
            setId(`${id}`)
        };
        
        const handlePopoverClose = () => {
            setAnchorEl(null);
            setId("")
        };

        const open = Boolean(anchorEl);
      
        const classes = useStyles();

        const iconData =[
                {key: 'fab fa-html5', name: 'HTML 5'},
                {key: 'fab fa-css3-alt', name:'CSS 3'},
                {key: 'fab fa-js-square', name:'JavaScript'},
                {key: 'fab fa-react', name:'React'},
                {key: 'fab fa-java', name:'Java'},
                {key: 'fab fa-npm', name:'Node.js'},
                {key: 'fab fa-php', name:'PHP'}
        ]

        return (
            <div style={page} id="Skills">
                <Typography variant='h2'>   
                    Skills
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}/>
                    <Grid item xs={12} > 
                        <Typography variant='h5'>
                            Programming Languages and Tools
                        </Typography>
                    </Grid>
                    <Grid item xs={12}/>
                    {iconData.map((iconClass)=>(
                    <Grid item xs={3} sm ={2} md={1} align="center" > 
                        <Icon 
                            className={iconClass.key} 
                            style={{ fontSize: 65,  display: 'initial'}}
                            aria-owns={open ? iconClass.name : undefined}
                            aria-haspopup="true"
                            onMouseEnter={(event)=>handlePopoverOpen(event, iconClass.name)}
                            onMouseLeave={handlePopoverClose}
                        />
                        <Popover
                            id={iconClass.name}
                            className={classes.popover}
                            classes={{
                                paper: classes.paper,
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            <Typography>{id}</Typography>
                        </Popover>
                    </Grid>
                    ))}
                    <Grid item xs={3} sm = {2} md={1} align="center">
                        <img 
                            alt="C++" 
                            src="https://img.icons8.com/ios/452/c-plus-plus-logo.png" 
                            style={{height:'65px', display:'initial'}}
                            aria-owns={open ? "C++" : undefined}
                            onMouseEnter={(event)=>handlePopoverOpen(event, "C++")}
                            onMouseLeave={handlePopoverClose}
                        />
                        <Popover
                            id="C++"
                            className={classes.popover}
                            classes={{
                                paper: classes.paper,
                            }}
                            open={open}
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            onClose={handlePopoverClose}
                            disableRestoreFocus
                        >
                            <Typography>{id}</Typography>
                        </Popover>
                    </Grid>
                </Grid>
            </div>
        )
    
}

export default Skills

