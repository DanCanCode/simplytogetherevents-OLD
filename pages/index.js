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
          <Image
            className={styles.homeText}
            src="./homepageText.png"
            alt="Simply Together Events"
          />
        </Box>

        <Box className={styles.home}>
          <span>
            Simply brining everyone together the most beautiful way we know how.
          </span>

          <Link href="/services">
            <Button
              bgColor="#800F2F"
              _hover={{
                transform: "scale(0.9)",
              }}
              _active={{
                bgColor: "#590D22",
                transform: "scale(0.9)",
              }}
            >
              <Text color="#ffffff">learn more</Text>
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
