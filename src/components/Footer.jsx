import { Box,  Stack, Typography, styled } from '@mui/material'
import React from 'react'
import { Facebook, Instagram, Twitter } from '@mui/icons-material'


const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
  color: 'white'

})

const Footer = () => {
  return (
    <Box sx={{ background: 'black', height: 'auto', mt: '20px' }}>
      <Stack direction={{ xs: 'col', md: 'row', }} p={7}>
        <Box flex={1}>
          <Typography  color={'white'} align='center' >
           <u > Contact Us</u>
          </Typography>
          <Typography color={'white'} align='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography color={'white'} align='center'>
            Consectetur recusandae beatae quis,
          </Typography>
          <Typography color={'white'} align='center'>
            qui eum dolorum expedita magni earum doloribus
          </Typography>

        </Box>

        <Box flex={1}>

          <Typography color={'white'} align='center' >
            <u>Data Policy</u>
          </Typography>

          <Typography color={'white'} align='center'>
            Cookies
          </Typography>

          <Typography color={'white'} align='center'>
            Data Safety
          </Typography>


        </Box>

        <Box flex={1}>

          <Typography color={'white'} align='center' >
            <u>Categories</u>
          </Typography>

          <Typography color={'white'} align='center'>
            Kids
          </Typography>
          <Typography color={'white'} align='center'>
            Women
          </Typography>
          <Typography color={'white'} align='center'>
            Men
          </Typography>


        </Box>

        <Box>

          <Typography color={'white'} align='center' >
            <u>Follow us </u>
          </Typography>

          <SocialBox>

           <Facebook /> 

            <Instagram />
            <Twitter />
          </SocialBox>

        </Box>

      </Stack>
    </Box>
  )
}

export default Footer