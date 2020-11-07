import React from 'react'
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
    const classes = useStyles();

    return (
        <form className={classes.root}>
            <Typography variant='h3'>
                Sign Up!
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField fullWidth required label="First Name" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth required label="Last Name" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <TextField fullWidth required label="Work Email" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth label="Phone Number" variant="outlined" />
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
                            <TextField fullWidth required label="Address" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth required label="City" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth required label="Zip Code" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth required label="State" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth required label="Country" variant="outlined" />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        Work Address
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <TextField fullWidth required label="Address" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth required label="City" variant="outlined" />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField fullWidth required label="Zip Code" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth required label="State" variant="outlined" />
                        </Grid>
                        <Grid item xs={6}>
                            <TextField fullWidth required label="Country" variant="outlined" />
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
