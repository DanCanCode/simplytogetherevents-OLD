import styles from "../styles/Home.module.css";
import { Box, Flex, Icon } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <Box
      as="footer"
      className={styles.footer}
      align="center"
      opacity={0.4}
      fontSize="sm"
    >
      <Flex direction="column" justifyContent="center" alignItems="center">
        <Flex marginBottom={3}>
          <a href="https://www.instagram.com/simplytogether.e/">
            <Icon as={BsInstagram} color="#000000" boxSize={6} />
          </a>
        </Flex>

        <p>
          &copy; {new Date().getFullYear()} Simply Togehter Events. All Rights
          Reserved.
        </p>
      </Flex>
    </Box>
  );
};

export default Footer;
