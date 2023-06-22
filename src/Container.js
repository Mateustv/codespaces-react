import {AppBar, Box, Button, Container, Grid, IconButton, Toolbar, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function ContainerS(){
    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
                    <AppBar position="static">
                        <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            News
                        </Typography>
                        <Button color="inherit">Login</Button>
                        </Toolbar>
                    </AppBar>
                </Box>
            <Container component='main' maxWidth='sm' fixed>
                <Grid 
                    container 
                    spacing={16}   
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item sm={12}>
                        <Typography variant='h4' component='h1'>
                            Ola, Fernanda!
                        </Typography>
                    </Grid>
                    <Grid item sm={12} container spacing={1}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm={12}>
                            <Typography variant='h4' component='h1'>
                                Ola, Fernanda!
                            </Typography>
                        </Grid>
                        <Grid item sm={12}>
                            <Typography variant='h4' component='h1'>
                                Ola, Fernanda!
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={12} container spacing={3}
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item sm={12} container><Button variant="contained" fullWidth>Contained</Button></Grid>
                        <Grid item sm={12} container><Button variant="contained" fullWidth>Contained</Button></Grid>
                        <Grid item sm={12} container><Button variant="contained" fullWidth>Contained</Button></Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}