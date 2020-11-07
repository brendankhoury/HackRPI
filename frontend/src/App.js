import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Route } from 'react-router';
import { BrowserRouter, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <BrowserRouter>

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              CarpoolCoordinator
          </Typography>
            <Button component={Link} to="/login" color="inherit">
              Login
              </Button>
          </Toolbar>
        </AppBar>
        <Route exact path="/" component={SignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile">
          Profile not created yet
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
