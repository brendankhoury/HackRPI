import React from 'react'
import { useForm } from 'react-hook-form'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '2.5em',
        marginRight:'8%',
        marginLeft:'8%'
    },
}),
);

export default function SignUp() {
    // eslint-disable-next-line
    const { register, handleSubmit, errors } = useForm();
    const submissionHandler = data => console.log(data);
    const classes = useStyles();

    return (
        <form className={classes.root} onSubmit={submissionHandler}>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant='h5'>
                        Sign Up!
                    </Typography>
                </Grid>
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
                    {/* TODO, add maps api or dropdown menu when the backend is developed */}
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
                    <Grid container spacing={2}>
                        <Grid item xs={4} justify="center">
                            <Grid container align="center" justify="center" alignItems="center">
                                <FormGroup row >
                                    <FormControlLabel
                                        value="Sunday"
                                        control={<Checkbox color="primary" />}
                                        label="S"
                                        labelPlacement="top" />
                                    <FormControlLabel
                                        value="Monday"
                                        control={<Checkbox color="primary" />}
                                        label="M"
                                        checked
                                        labelPlacement="top" />
                                    <FormControlLabel
                                        value="Tuesday"
                                        control={<Checkbox color="primary" />}
                                        label="Tu"
                                        checked
                                        labelPlacement="top" />
                                    <FormControlLabel
                                        value="Wednesday"
                                        control={<Checkbox color="primary" />}
                                        label="W"
                                        checked
                                        labelPlacement="top" />
                                    <FormControlLabel
                                        value="Thursday"
                                        control={<Checkbox color="primary" />}
                                        label="Th"
                                        checked
                                        labelPlacement="top" />
                                    <FormControlLabel
                                        value="Friday"
                                        control={<Checkbox color="primary" />}
                                        label="F"
                                        checked
                                        labelPlacement="top" />
                                    <FormControlLabel
                                        value="Saturday"
                                        control={<Checkbox color="primary" />}
                                        label="S"
                                        labelPlacement="top" />
                                </FormGroup>
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                name="work-start-time"
                                label="Work Start Time"
                                defaultValue="08:00"
                                type="time"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={4}>
                            <TextField
                                name="work-end-time"
                                label="Work End Time"
                                defaultValue="17:00"
                                type="time"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                inputProps={{
                                    step: 300, // 5 min
                                }}
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Button size="large" color="secondary" fullWidth type="submit" variant="outlined">
                        Sign Up
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}
