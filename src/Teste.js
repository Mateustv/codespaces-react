import styled from "@emotion/styled";
import { Button, Container, Grid, TextField, Typography } from "@mui/material";

const Img = styled('img')({
    margin: 'auto',
    maxWidth: '100%',
    display: 'block',
    maxHeight: '100%',
  });



export default function Teste(){

    return(
        <Container fixed maxWidth='sm' component='main'>
            <Grid 
                container 
                spacing={5}
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{mt:14}}
            >
                <Grid item container direction="column" justifyContent='center' alignContent='center' spacing={2} sm={12}>
                    <Grid item xs={12} sm={12}>
                        <Img src="Rectangle.svg" alt='logo'/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Typography variant="h2" component='h2'>RUPay</Typography>
                    </Grid>
                </Grid>
                <Grid item container direction="column" justifyContent='center' alignContent='center' spacing={2} sm={12}>
                    <Grid item xs={12} sm={12} container>
                        <TextField id="outlined-basic" fullWidth  label="Filled" variant="filled"/>
                    </Grid>
                    <Grid item xs={12} sm={12} container>
                        <TextField id="outlined-basic" fullWidth label="Outlined" variant="outlined"/>
                    </Grid>
                    <Grid item xs={12} sm={12} container>
                        <Button variant="contained" fullWidth>Contained</Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}