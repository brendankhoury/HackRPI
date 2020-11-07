import React, { Component } from 'react'
import { Card, CardContent, Fab, Grid, Typography } from '@material-ui/core'
import MailIcon from '@material-ui/icons/Mail';
import '../Assets/CarpoolFinder.css'


const fakeData = [
    {
        "Name": "Amy A",
        "AproxDist": "1 mile",
        "Email": "amy@example.com"
    },
    {
        "Name": "Bary B",
        "AproxDist": "1.5 miles",
        "Email": "bary@example.com"
    },
    {
        "Name": "Cary C",
        "AproxDist": "1.7 miles",
        "Email": "cary@example.com"
    }
]

export default class CarpoolFinder extends Component {
    render() {
        return (
            <Grid container className="CarpoolRoot" spacing ={2}>
                {
                    fakeData.map((val) =>
                        <Grid item xs={3}>
                            <Card className="PersonCard">
                                <CardContent>
                                    <Typography variant="h5" component="h2">
                                        {val.Name}
                                    </Typography>
                                    <Typography>
                                        Approximate distance: {val.AproxDist}
                                    </Typography>
                                    <Fab color="primary" aria-label="email" className="MailFab">
                                        <MailIcon/>
                                    </Fab>
                                </CardContent>

                            </Card>
                        </Grid>)
                }
            </Grid>
        )
    }
}
