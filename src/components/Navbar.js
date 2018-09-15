import React from 'react'; 
import '@material-ui/core'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import {Link,NavLink} from 'react-router-dom';

const Navbar = (props) => {
  return(
    <div className="container">
       <AppBar position="static" color="primary">
        <Toolbar>
          <Button  color="secondary"><Link to="/">Home</Link> </Button>
          <Button   color="inherit"><NavLink to="about">About</NavLink></Button>
          <Button   color="inherit"><NavLink to="/Contact">Contact</NavLink></Button>
        </Toolbar>
        
      </AppBar>
    </div>
  )
}

export default Navbar;
