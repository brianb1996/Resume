import React, {useRef, useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import About from '../containers/About'
import Education from '../containers/Education'
import Experience from '../containers/Experience'
import Interests from '../containers/Interests'
import Skills from '../containers/Skills'
import {Link} from 'react-scroll'
import { Grid } from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'darkslategrey'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  large: {
    display: 'flex',
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));




const NavBar = (props) => {

  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const AboutRef = useRef(null)
  const EducationRef = useRef(null)
  const ExperienceRef = useRef(null)
  const InterestsRef = useRef(null)
  const SkillsRef = useRef(null)

  // const [section, setSection] = React.useState("");

  //

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Render this somewhere using:
  // <Route path="..." children={<LongContent />} />

  const menuData = [
    {
      title: 'About',
    },
    {
      title: 'Experience',
    },
    {
      title: 'Education',
    },
    {
      title: 'Skills',
    },
    {
      title: 'Interests',
    }
  ]

  const drawer = (
    <div justify="center"> 
      <div className={classes.toolbar} />
      <Hidden xsDown implementation="css" >
        <Grid container justify='center'>
          <Avatar 
            alt="Brian Bredahl" 
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEmxodT-brRpQ/profile-displayphoto-shrink_200_200/0/1517494521058?e=1628121600&v=beta&t=lBKpvRbo9xe_iyv7PIIp55lqdkxzzzV-tR5EtcZTLZg" 
            className={classes.large}
            />
        </Grid>
        <div className={classes.toolbar} />
      </Hidden>
      <List>
        {menuData.map((data) => (
          <ListItem button key={data.title} component={Link} activeClass="active" to={data.title} spy={true} smooth={true}> 
            <ListItemText primary={data.title} align="center"/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;



  return (
    <div className={classes.root}>
      <CssBaseline />

      <nav className={classes.drawer} aria-label="Menu" >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap>
                Brian Bredahl
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content} style={{backgroundColor:'lightgrey', height:'100%'}}>
        <About/>
        <Experience/>
        <Education/>
        <Skills/>
        <Interests/>
      </main>
    </div>
  );
}



export default NavBar;