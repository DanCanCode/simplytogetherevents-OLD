import { Box, Text, Image } from "@chakra-ui/react";
import styles from "../public/Home.module.css";

const Gallery = (props) => {
  const Navbar = props.navbar;

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}

      <Box className={styles.pageHeadText}>
        <Text textTransform="uppercase">Galleries</Text>
        <Text textTransform="lowercase">View photos from past events</Text>
      </Box>
      <Box>
        <Image />
      </Box>
    </Box>
  );
};

export default Gallery;
