import styles from "../public/Home.module.css";
import { Box, Text, Image } from "@chakra-ui/react";

const Home = (props) => {
  const Navbar = props.navbar;
  const [width, height] = props.windowSize;
  return (
    <>
      <Box className={styles.homeBackground}>
        <Box w="100%" h="100vh" bgColor="rgba(0,0,0,0.5)">
          {Navbar}
          <Box className={styles.mainBackgroundText}>
            <Image
              htmlWidth={350}
              paddingBottom="1em"
              align="center"
              src="./simplytogether_events.png"
              alt="Simply Together Events Logo"
            />
            <Text
              fontSize={20}
              textTransform="uppercase"
              letterSpacing={2}
              maxWidth="40vw"
            >
              to simply bring everyone together the best way we know how.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
