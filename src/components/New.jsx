import { Box, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import perfume from '../components/img/perfume.jpg'



import React from 'react'

const New = () => {
  return (
    <>
    <Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>

                    <Grid item  >
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="100%"
                            image={perfume}
                            
                        />
                        <CardContent>
                            <Typography gutterBottom variant="body1" align='center' component="div" color={'tomato'}>
                                PERFUMES
                            </Typography>
                            <Typography gutterBottom variant="h5" align='center' component="div" >
                                Perfumes:Embrace the Power of Captivating Scents 
                            </Typography>
                            <Typography variant="h5" align='center' color="text.secondary">
                                You are never fully dressed without perfumes
                            </Typography>
                        </CardContent>
                    </Grid>
                    


                </Grid>

            </Box>
    </>
  )
}

export default New
