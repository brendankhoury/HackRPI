import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'

import React from 'react'
import BadLogin from '../SingletonDataStore';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '5em'
    },
}),
);
var email = ""
var password = ""

export default function Login() {
    // eslint-disable-next-line
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (event) => {
        event.preventDefault();
        BadLogin.setLogin(email, password)
        window.location.href = '/carpoolfinder'

    };
    const emailChangeHamdler = (event) => {
        email = event.target.value
    }

    const passwordChangeHandler = (event) => {
        password = event.target.password        
    }

    const classes = useStyles();

    return (
        <form className={classes.root} onSubmit={onSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField onChange={emailChangeHamdler} name="Email" fullWidth required label="Email" variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField onChange={passwordChangeHandler} name="Password" type="password" fullWidth required label="Password" variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <Button size="large" color="secondary" fullWidth type="submit" variant="contained">
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
