import React from 'react'
import {useForm} from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    // root: {
    //     '& > *': {
    //         margin: theme.spacing(1),
    //         width: '45ch',
    //     },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '5em'
    },
}),
);

export default function SignUp() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const classes = useStyles();

    return (
        <form className={classes.root} onSubmit={onSubmit}>
            <Typography variant='h3'>
                Sign Up!
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField name="last-name" fullWidth required label="First Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="first-name" fullWidth required label="Last Name" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField name="work-email" fullWidth required label="Work Email" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="phone-number" fullWidth label="Phone Number" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField name="password" type="password" fullWidth required password label="Password" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="confirm-password" type="password" fullWidth required password label="Confirm Password" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        Home Address
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField name="home-address" fullWidth required label="Address" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField name="home-city" fullWidth required label="City" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField name="home-zip" fullWidth required label="Zip Code" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="home-state" fullWidth required label="State" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="home-country" fullWidth required label="Country" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        Work Address
                    </Typography>
                    {/* TODO, add maps api or dropdown menu when the backend is developed */ }
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField name="work-address" fullWidth required label="Address" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField name="work-city" fullWidth required label="City" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField name="work-zip" fullWidth required label="Zip Code" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="work-state" fullWidth required label="State" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField name="work-country" fullWidth required label="Country" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button color="secondary" fullWidth type="submit" variant="contained">
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
