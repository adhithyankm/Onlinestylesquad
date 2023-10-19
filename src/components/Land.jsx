import { Box, Typography } from '@mui/material'
import React from 'react'
import Shop from "../../src/components/img/Shop.jpg"

function Land() {
    return (
        <Box>
            <Typography align='center' variant='h3' sx={{ fontWeight: 900 }}>
                Style <b style={{ color: "red" }}>Squad</b>
            </Typography>
            <Typography align='center' variant='body2' sx={{ fontWeight: 100 }}>
                We Make you look the better of you!
            </Typography>

            <Box sx={{
                backgroundImage: `url(${Shop})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: "black",
                backgroundAttachment:"fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                objectFit:'fill',
                height: 600,
                width: "100%",
                display:"flex",
                justifyContent:"center"
            }}>
                <Box sx={{width:{xs:"100%",sm:"50%",md:"40%"},padding:{xs:3,sm:2,md:20} }}>
                    <Box sx={{ background: "white", opacity: "0.8" }}>
                        <Typography variant='h6' color='tomato' align='center' pt={8}>
                            Trending Styles
                        </Typography>

                        <Typography variant='h4' align='center'>
                            Style:Igniting the spark in life
                        </Typography>

                        <Typography variant='body1' align='center' pb={8}>
                            We love to change your style
                        </Typography>

                    </Box>
                </Box>

            </Box>



        </Box>
    )
}

export default Land