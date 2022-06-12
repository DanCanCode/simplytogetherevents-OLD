import { Box, Text } from "@chakra-ui/react";
import styles from "../public/Home.module.css";

const About = (props) => {
  const Navbar = props.navbar;
  const [width, height] = props.windowSize;

  return (
    <Box className={styles.aboutBackground}>
      <Box w="100%" h="100vh" bgColor="rgba(0,0,0,0.5)">
        {Navbar}
        <Text textAlign="center" verticalAlign="baseline" color="#ffffff">
          About Us
        </Text>
      </Box>
    </Box>
  );
};

export default About;
