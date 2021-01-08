import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import './LeftBar.scss'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import CropFreeRoundedIcon from '@material-ui/icons/CropFreeRounded';

const drawerWidth = 90;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    position: 'rtl'
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const LeftBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <h2>Menu</h2>
        <div className={classes.toolbar} />
        <List>
          <Link to='tasks' className='punkt'>
            <AssignmentIcon />
                Меню
            </Link>
          <Link to='booking' className='punkt'>
            <LocalMallOutlinedIcon />
                Заказ
            </Link>
          <Link to='teacher' className='punkt'>
            <SupervisorAccountIcon />
                Персонал
            </Link>
          <Link to='qr-code' className='punkt'>
            <CropFreeRoundedIcon />
                QR-Code
            </Link>
        </List>
      </Drawer>
    </div>
  );
}
export default LeftBar;