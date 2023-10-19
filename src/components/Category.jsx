import { Box, Stack, Typography, styled } from '@mui/material'
import React from 'react'
import kid from '../components/img/kid.jpg'
import male from '../components/img/male.jpg'
import female from '../components/img/female.jpg'

const StyledBox = styled(Box)({
    height: 200,
    width: "100%",
    cursor: 'pointer',
    backgroundRepeat:"no-repeat",
    backgroundPosition:'center',
    backgroundSize:'cover'

})

const StyledTypography = styled(Typography)({
    margin: '25% 50px 25% 50px',
    background: 'white',
    opacity: '0.8'

})

export const Category = () => {
    return (
        <>
            <Box>
                <Stack direction={{xs:'column',sm:'row'}} spacing={{xs:1,sm:2,md:4,}} mt={5}>

                    <StyledBox sx={{ backgroundImage: `url(${kid})` }}>
                        <StyledTypography align='center' variant='h3'>
                            Kids
                        </StyledTypography>
                    </StyledBox>
                    <StyledBox sx={{backgroundImage:`url(${male})`}}>
                        <StyledTypography align='center' variant='h3'>
                            Mens
                        </StyledTypography>
                    </StyledBox>
                    <StyledBox sx={{backgroundImage:`url(${female})`}}>
                        <StyledTypography align='center' variant='h3'>
                            Womens
                        </StyledTypography>
                    </StyledBox>

                </Stack>
            </Box>
        </>
    )
}

