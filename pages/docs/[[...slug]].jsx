import Head from 'next/head'
import { pageProps, staticPaths } from '@opstrace/next-product-docs/serialize'
import Documentation from '@opstrace/next-product-docs'
import HeroBaseLayout from "../../components/layouts/HeroBase"
import { Box, Container } from '@mui/material'

import Sidebar from '../../components/shared/docs/Sidebar'
import Toc from '../../components/shared/docs/Toc'

import theme from '../../utils/vsDark.ts'

export default function Docs({ title, source, sidebarRoutes, tocHeadings }) {
  console.log("SAUCE", source, sidebarRoutes);
  if (source === null) {
    source = ''
  }

  const heroContent = {
    title: title,
    subtitle: ``
  }

  return (
    <>
      <Head>
        <title>{`${title}`}</title>
        <meta name="description" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <HeroBaseLayout hero={ heroContent } >
      <Container>
        <Box display="flex">
          <Sidebar routes={sidebarRoutes} />
        <Documentation source={source} theme={theme} />
          </Box>
          </Container>
    </HeroBaseLayout>
          {/* <Toc contents={tocHeadings} /> */}
    </>
  )
}

export async function getStaticPaths() {
  const paths = await staticPaths()
  console.log("paths", paths);
  return { paths, fallback: false }
}

export async function getStaticProps(ctx) {
  console.log("ctx", ctx);
  return {
    props: {
      ...(await pageProps(ctx))
    }
  }
}