import Head from "next/head";
import { Box, Container } from "@chakra-ui/react";

function Main({ children, router }) {
  return (
    <Box as="main" padding-bottom={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Simply Together Events</title>
      </Head>

      <Container max-width="container.md" padding-top={14}>
        {children}
      </Container>
    </Box>
  );
}

export default Main;
