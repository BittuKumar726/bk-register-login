import Button from '@mui/material/Button';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import LoadingButton from '@mui/lab/LoadingButton';

const useStyles = makeStyles(theme => ({
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(5),
        fontSize: "1.5rem",
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const DocumentForm = (props) => {
    const { documents, onCloseDrawer, currentIdx } = props;
    const classes = useStyles();
    const { data } = props;
    const [loading, setLoading] = useState(false);
    const [values, setValues] = useState(
        {
            _id: data?._id || null,
            fullName: data?.fullName || "",
            email: data?.email || "",
            phoneNumber: data?.phoneNumber || "",
            age: data?.age || "",
            gender: data?.gender || "",
            dob: data?.dob || ""
        }
    )
    const onSave = (e) => {
        setLoading(true)
        e.preventDefault();
        let isNew = !data?._id ? true : false
        let params = { ...values }
        if (isNew) {
            params = { ...params, "_id": `${documents.length}` }
            props.createDocument(params);
            onCloseDrawer();
            return
        }
        if(!isNew){
            props.updateDocument(params)
            onCloseDrawer();
            return
        }
        setLoading(false)
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    return (
        <>
            <Container component="main" maxWidth="xs">
                <form className={classes.form} onSubmit={() => onSave} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="fname"
                                name="fullName"
                                value={values.fullName}
                                variant="outlined"
                                required
                                fullWidth
                                id="fullName"
                                label="Full Name"
                                onChange={e => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                value={values.email}
                                autoComplete="email"
                                onChange={e => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="phoneNumber"
                                label="Phone Number"
                                name="phoneNumber"
                                value={values.phoneNumber}
                                autoComplete="phoneNumber"
                                onChange={e => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="age"
                                name="age"
                                value={values.age}
                                variant="outlined"
                                required
                                fullWidth
                                id="age"
                                label="Age"
                                onChange={e => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="gender"
                                name="gender"
                                value={values.gender}
                                variant="outlined"
                                required
                                fullWidth
                                id="gender"
                                label="Gender"
                                onChange={e => handleChange(e)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <TextField
                                autoComplete="dob"
                                name="dob"
                                value={values.dob}
                                variant="outlined"
                                required
                                fullWidth
                                id="dob"
                                label="Date of Birth"
                                onChange={e => handleChange(e)}
                            />
                        </Grid>

                    </Grid>
                    
                    {" "}
                    <LoadingButton
                        size="small"
                        color="secondary"
                        loading={loading}
                        loadingPosition="start"
                        className={classes.submit}
                        fullWidth
                        variant="contained"
                        type="submit"
                        onClick={onSave}
                    >
                        Save
                    </LoadingButton>

                </form>
            </Container>
        </>
    )
}
export default DocumentForm;


