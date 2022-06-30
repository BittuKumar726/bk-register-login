
import React, { useState } from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DocumentPreview = (props) => {
    const { data } = props;
    const [loading, setLoading] = useState(false);

    return (
        <>
            <Box sx={{ width: '100%', maxWidth: 500, margin: '1rem'}}>
                <Typography variant="h4" component="div" gutterBottom>
                <strong style={{margin: '1rem'}}>Name:</strong> {data?.fullName}<br/>
                <strong style={{margin: '1rem'}}>Email Id:</strong> {data?.email}<br/>
                <strong style={{margin: '1rem'}}>Phone Number:</strong> {data?.phoneNumber}<br/>
                <strong style={{margin: '1rem'}}>Age:</strong> {data?.age}<br/>
                <strong style={{margin: '1rem'}}>Gender:</strong> {data?.gender}<br/>
                <strong style={{margin: '1rem'}}>Date of Birth:</strong> {data?.dob}
                </Typography>
                
            </Box>
        </>
    )
}
export default DocumentPreview;


