import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '5em'
    },
}),
);


const fakeData = [
    {
        "Name": "Amy A",
        "AproxDist": "1 mile",
        "Email":"amy@example.com"
    },
    {
        "Name": "Bary B",
        "AproxDist": "1.5 miles",
        "Email":"bary@example.com"
    },
    {
        "Name": "Cary C",
        "AproxDist": "1.7 miles",
        "Email":"cary@example.com"
    }
]

export default class CarpoolFinder extends Component {
    render() {
        return (
            <Grid container classname = {classes.root}>

            </Grid>
        )
    }
}
