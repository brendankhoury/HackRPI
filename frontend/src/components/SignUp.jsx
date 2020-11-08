import { React, Component } from 'react'

import TextField from '@material-ui/core/TextField';
import { Button, Checkbox, FormControlLabel, FormGroup, Grid, Typography, withStyles } from '@material-ui/core';
import BadLogin from '../SingletonDataStore'


const styles = ((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '2.5em',
        marginRight: '8%',
        marginLeft: '8%'
    },
}));


class SignUp extends Component {
    state = {
        "daysWorked": { "Monday": true, "Tuesday": true, "Wednesday": true, "Thursday": true, "Friday": true, "Saturday": false, "Sunday": false },
        "work-start-time": "08:00",
        "work-end-time": "05:00",
        "ownsCar": false
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }
    submissionHandler = (event) => {
        event.preventDefault();
        var daysWorkedString = ""
        // for (var day in this.state.daysWorked) {
        //     daysWorkedString += this.state.daysWorked[day] ? '1' : '0'
        // }
        var finalObject = {
            "name": this.state["first-name"] + " " + this.state["last-name"],
            "email": this.state.email,
            "phone": this.state.phone,
            "password": this.state.password,
            "homeAdd": this.state["home-address"] + " " + this.state["home-city"] + " " + this.state["home-state"] + " " + this.state["home-zip"],
            "workAdd": this.state["work-address"] + " " + this.state["work-city"] + " " + this.state["work-state"] + " " + this.state["work-zip"],
            "daysWorked": this.state.daysWorked,
            "ownsCar": this.state.ownsCar,
            "startTime": this.state["work-start-time"],
            "endTime": this.state["work-end-time"]
        }
        BadLogin.setLogin(this.state.email, this.state.password)
        fetch('/api/signup', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            body: JSON.stringify(finalObject)

            }).then(response => {
                window.location.href = '/carpoolfinder'
            }

        )
    }
    daysChangeHandler = (event) => {
        var tmp = this.state.daysWorked
        tmp[event.target.value] = event.target.checked
        this.setState({ "daysWorked": tmp })
    }
    carChangeHandler = (event) => {
        this.setState({ "ownsCar": event.target.checked })
    }
    render() {
        const { classes } = this.props;
        return (
            <form className={classes.root} onSubmit={this.submissionHandler}>

                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant='h5'>
                            Sign Up!
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField onChange={this.myChangeHandler} name="first-name" fullWidth required label="First Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField onChange={this.myChangeHandler} name="last-name" fullWidth required label="Last Name" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField onChange={this.myChangeHandler} name="email" fullWidth required label="Work Email" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField onChange={this.myChangeHandler} name="phone" fullWidth label="Phone Number" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <TextField onChange={this.myChangeHandler} name="password" type="password" fullWidth required password label="Password" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField onChange={this.myChangeHandler} name="confirm-password" type="password" fullWidth required password label="Confirm Password" variant="outlined" />
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
                                <TextField onChange={this.myChangeHandler} name="home-address" fullWidth required label="Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField onChange={this.myChangeHandler} name="home-city" fullWidth required label="City" variant="outlined" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField onChange={this.myChangeHandler} name="home-zip" fullWidth required label="Zip Code" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField onChange={this.myChangeHandler} name="home-state" fullWidth required label="State" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField onChange={this.myChangeHandler} name="home-country" fullWidth required label="Country" variant="outlined" />
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
                                <TextField onChange={this.myChangeHandler} name="work-address" fullWidth required label="Address" variant="outlined" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField onChange={this.myChangeHandler} name="work-city" fullWidth required label="City" variant="outlined" />
                            </Grid>
                            <Grid item xs={4}>
                                <TextField onChange={this.myChangeHandler} name="work-zip" fullWidth required label="Zip Code" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField onChange={this.myChangeHandler} name="work-state" fullWidth required label="State" variant="outlined" />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField onChange={this.myChangeHandler} name="work-country" fullWidth required label="Country" variant="outlined" />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container spacing={2}>
                            <Grid item xs={6} justify="center">
                                <Grid container align="center" justify="center" alignItems="center">
                                    <FormGroup row name="daysWorked" onChange={this.myChangeHandler} >
                                        <FormControlLabel onChange={this.daysChangeHandler}
                                            value="Sunday"
                                            control={<Checkbox color="primary" />}
                                            label="S"
                                            checked={this.state.daysWorked.Sunday}
                                            labelPlacement="top" />
                                        <FormControlLabel onChange={this.daysChangeHandler}
                                            value="Monday"
                                            control={<Checkbox color="primary" />}
                                            label="M"
                                            checked={this.state.daysWorked.Monday}
                                            labelPlacement="top" />
                                        <FormControlLabel onChange={this.daysChangeHandler}
                                            value="Tuesday"
                                            control={<Checkbox color="primary" />}
                                            label="Tu"
                                            checked={this.state.daysWorked.Tuesday}
                                            labelPlacement="top" />
                                        <FormControlLabel onChange={this.daysChangeHandler}
                                            value="Wednesday"
                                            control={<Checkbox color="primary" />}
                                            label="W"
                                            checked={this.state.daysWorked.Wednesday}
                                            labelPlacement="top" />
                                        <FormControlLabel onChange={this.daysChangeHandler}
                                            value="Thursday"
                                            control={<Checkbox color="primary" />}
                                            label="Th"
                                            checked={this.state.daysWorked.Thursday}
                                            labelPlacement="top" />
                                        <FormControlLabel onChange={this.daysChangeHandler}
                                            value="Friday"
                                            control={<Checkbox color="primary" />}
                                            label="F"
                                            checked={this.state.daysWorked.Friday}
                                            labelPlacement="top" />
                                        <FormControlLabel onChange={this.daysChangeHandler}
                                            value="Saturday"
                                            control={<Checkbox color="primary" />}
                                            label="S"
                                            checked={this.state.daysWorked.Saturday}
                                            labelPlacement="top" />
                                    </FormGroup>
                                </Grid>
                            </Grid>
                            <Grid item xs={2}>
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
                                    onChange={this.myChangeHandler}
                                />
                            </Grid>
                            <Grid item xs={2}>
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
                                    onChange={this.myChangeHandler}
                                />
                            </Grid>
                            <Grid item xs={2}>
                                <FormGroup row >
                                    <FormControlLabel
                                        onChange={this.carChangeHandler}
                                        value="ownsCar"
                                        control={<Checkbox color="primary" />}
                                        label="Owns Car?"
                                        checked={this.state.ownsCar}
                                        labelPlacement="start" />
                                </FormGroup>
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
}
export default withStyles(styles, { withTheme: true })(SignUp)