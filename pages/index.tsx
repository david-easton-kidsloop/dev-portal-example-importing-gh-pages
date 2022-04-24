import { Box, Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import styles from '../styles/Home.module.css'
import HeroBaseLayout from "../components/layouts/HeroBase"
import Section from '../components/shared/Section'

const Home: NextPage = () => {
  const heroContent = {
    title: `Education infrastructure for the internet`,
    subtitle: `Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.`
  }

  return (
    <HeroBaseLayout hero={ heroContent } >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Box>
          <Box width="40%">
            <Typography variant="h4" paddingBottom={2}>
              A fully integrated suite of payments products
            </Typography>
          </Box>
          <Box display="flex" width="100%">
            <Box paddingRight={4}>
              <Typography>
                We bring together everything that’s required to build websites and apps that accept payments and send payouts globally. Stripe’s products power payments for online and in-person retailers, subscriptions businesses, software platforms and marketplaces, and everything in between.
              </Typography>
            </Box>
            <Box>
              <Typography>
                We also help companies beat fraud, send invoices, issue virtual and physical cards, get financing, manage business spend, and much more.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Section>
    </HeroBaseLayout>
  )
}

export default Home