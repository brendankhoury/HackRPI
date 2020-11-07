import { Button, Grid, makeStyles, TextField } from '@material-ui/core'
import { useForm } from 'react-hook-form'

import React from 'react'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: '5em'
    },
}),
);
export default function Login() {
    // eslint-disable-next-line
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);
    const classes = useStyles();

    return (
        <form className={classes.root} onSubmit={onSubmit}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField name="Email" fullWidth required label="Email" variant="outlined"/>
                </Grid>
                <Grid item xs={12}>
                    <TextField name="Password" type="password" fullWidth required label="Email" variant="outlined"/>
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
