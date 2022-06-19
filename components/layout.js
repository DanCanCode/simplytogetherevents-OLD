import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <ChakraProvider>
      <Head>
        <meta name="description" content="Simply Together Events Homepage" />
        <meta name="author" content="Daniel Espinal" />
        <meta name="author" content="Samantha Espinal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <title>Simply Together Events</title>
      </Head>

      <main>{children}</main>
    </ChakraProvider>
  );
};

export default Layout;
