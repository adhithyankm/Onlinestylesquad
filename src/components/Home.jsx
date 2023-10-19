import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import Land from './Land'
import { Category } from './Category'
import New from './New'
import Rightbar from './Rightbar'

const Home = () => {
  return (
    <>
    <Box>
        <Land/>
        <Container>

            <Category/>
            <hr />
            <Stack direction={{xs:'column',sm:'column',md:'row'}} spacing={8} mt={8}>

                <Box flex={3} sx={{padding:'18px 100px 100px 100px'}}>
                    <New/>
                </Box>

                <Box flex={1}>
                    <Rightbar/>
                    
                </Box>

            </Stack>
        </Container>
    </Box>
    
    </>
  )
}

export default Home