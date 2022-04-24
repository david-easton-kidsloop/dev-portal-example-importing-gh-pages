import { Box, Button, Container, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import PageLinks from "../../data/navigation/header-links.json";

const Header: NextPage = () => {
  return (
      <Box component="header" padding={2} position="absolute" width="100%">
          <Container maxWidth="lg">
              <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex', color: 'white' } }}
          >
            LOGO
          </Typography>
          <Box display="flex">
              { PageLinks.routes.map((page) => (
              <Button
                key={page.title}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.title}
              </Button>
              ))}
            </Box>
            <Box>
                  <Button variant="contained">
                      Sign in
                  </Button>
              </Box>
              </Box>
          </Container>
      </Box>
  )
}

export default Header
