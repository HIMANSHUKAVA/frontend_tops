import { AppBar, Button, Collapse, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import SchoolIcon from '@mui/icons-material/School';
import { AccountCircle, ExpandLess, ExpandMore, ListAlt } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import CloseIcon from "@mui/icons-material/Close";

import {Authocontex} from './pages/Useautho'
import Swal from 'sweetalert2';

export default function Layout() {
  const [drawer, setdrawer] = useState(false);

  // create the state for submenu of account section

  const [opens, setopens] = useState(false);  
  

  const {islogin , setislogin} = useContext(Authocontex);
 
  // handler method
  const handleropens = ()=>{
    setopens(!opens);
  }

  const handllogoutevent = ()=>{
    setislogin(false);

    Swal.fire({
              icon: "success",
              title: "succesfully Log Out",
              timer: 1500,
              showConfirmButton: false,
              
          });
  }
  return (
    <>
    
      <AppBar
        position="fixed"
        color="primary"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1  , backgroundColor:"#212529"}}

      >
        <Toolbar>
          <Typography variant="h6" flexGrow={1}>
            Student Manegment Syaterm
            </Typography>

          <Typography variant="h6">Phone : 9601972547</Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant='permanent' open={()=>{setdrawer(true)}} onClose={()=>{setdrawer(false)}}>
        <div style={{ width: "190px", padding: "10px" }}>
          <Toolbar/>
         <Typography variant='h5'>Navigetion</Typography>
        
          {islogin ? (
            <>
             <List>
          <ListItem>
            <ListItemButton component={Link} to={"/attendece"}>
              <ListItemIcon><CheckCircleIcon/></ListItemIcon>
              <ListItemText primary="Attendece"/>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component={Link} to={"/absence"}>
              <ListItemIcon><CloseIcon/></ListItemIcon>
              <ListItemText primary="Absence"/>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton component={Link} to="/newadmission">
              <ListItemIcon><SchoolIcon/></ListItemIcon>
              <ListItemText primary="New Admission"/>
            </ListItemButton>

        </ListItem>


        <ListItem>
            <ListItemButton component={Link} to="/studentlist">
              <ListItemIcon><ListAlt/></ListItemIcon>
              <ListItemText primary="Student List"/>
            </ListItemButton>
           </ListItem>

            <ListItem>
            <ListItemButton component={Link} to="/viewattend">
              <ListItemIcon><ListAlt/></ListItemIcon>
              <ListItemText primary="View attendence"/>
            </ListItemButton>
           </ListItem>
           

        <ListItem >
        <ListItemButton onClick={handleropens}>
          <ListItemIcon><AccountCircle/></ListItemIcon>
          <ListItemText primary="Account"/>
          {opens ? <ExpandLess/> :<ExpandMore/>}
        </ListItemButton>
      </ListItem>
          <List component="div" disablePadding>
                  <ListItem>
                    <ListItemButton onClick={(handllogoutevent)}  component={Link} to="/login">
                      <ListItemText primary="Logout" />
                    </ListItemButton>
                  </ListItem>
                </List><Collapse in={opens} timeout={"auto"} unmountOnExit>  

          </Collapse>

          </List>
            </>
            ) : (

              <>
              <List>
              <ListItem>
                <ListItemButton component={Link} to="/login">
                  <ListItemText primary="Login" />
                </ListItemButton>
              </ListItem>

              <ListItem>
                <ListItemButton component={Link} to="/register">
                  <ListItemText primary="Register"/>
                </ListItemButton>
              </ListItem>
            </List>
              </>
            )
        
        }
     </div>
      </Drawer>
    </>
  )
}
