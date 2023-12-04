import { AppBar, Container, Toolbar, Typography } from '@mui/material'
import React from 'react'

function Navbar() {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography>
            Hello Dear
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar