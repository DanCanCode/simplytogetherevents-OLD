import styles from "../public/Home.module.css";
import Link from "next/link";
import { Box, Text, Image, Button } from "@chakra-ui/react";

const Home = (props) => {
  const Navbar = props.navbar;

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}
      <Box paddingY="1em">
        <Box position="relative">
          <Image src="./newHomeBg.png" alt="home page" />

          <Text className={styles.homeText}>Simply Together Events</Text>
        </Box>

        <Box className={styles.home}>
          <Text>
            Simply Brining Everyone Together The Most Beautiful Way We Know How.
          </Text>

          <Link href="/services">
            <Button
              variant="outline"
              colorScheme="pink"
              _active={{
                transform: "scale(0.9)",
              }}
            >
              learn more
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
