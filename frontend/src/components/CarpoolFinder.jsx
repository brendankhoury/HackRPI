import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import '../Assets/CarpoolFinder.css'


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
            <Grid container className="root">
                {
                    fakeData.map((val) => 
                        <h1>
                            {JSON.stringify(val)}
                        </h1>)
                }
            </Grid>
        )
    }
}
