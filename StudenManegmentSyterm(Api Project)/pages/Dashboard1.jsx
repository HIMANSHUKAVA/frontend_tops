import React, { useState } from "react";
import Layoutm from "../Layoutm";
import { Box, Card, CardHeader, Container, Grid, IconButton, Rating, Toolbar, Typography } from "@mui/material";
import { CheckCircle, PermIdentity } from "@mui/icons-material";

export default function Dashboard1() {
  const [rating, setrating] = useState(4)
  return (
    <>
      <Layoutm />

      <Toolbar />
      <Container>
        <Box sx={{ ml: "190px", p: 3 }}>
          <Typography variant="h4" color="initial">
            Dashboard
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={3}>
                 <Card sx={{maxWidth:250 , mt:3}}>
                   <CardHeader  avatar={<IconButton><PermIdentity sx={{fontSize:70}} color='primary'/></IconButton>} subheader={<Typography variant='h5'>Student</Typography>} title={<Typography variant='h4'>600</Typography>}/>
                </Card>
            </Grid>

            <Grid item xs={3}>
                 <Card sx={{maxWidth:250 , mt:3}}>
                   <CardHeader  avatar={<IconButton><CheckCircle sx={{fontSize:70}} color='primary'/></IconButton>} subheader={<Typography variant='h5'>Attendence</Typography>} title={<Typography variant='h4'>350</Typography>}/>
                </Card>
            </Grid>
            
            
            <Grid item xs={3}>
                 <Card sx={{maxWidth:250 , mt:3}}>
                   <CardHeader  avatar={<IconButton><PermIdentity sx={{fontSize:70}} color='primary'/></IconButton>} subheader={<Typography variant='h5'>Review</Typography>} title={<Rating value={rating}/>}/>
                </Card>
            </Grid>
            
          </Grid>
        </Box>
      </Container>
    </>
  );
}
