import styles from "../public/Home.module.css";
import Link from "next/link";
import { Box, Center, Divider, Flex, Icon } from "@chakra-ui/react";
import { FaInstagram, FaEnvelope, FaPinterest } from "react-icons/fa";

const Footer = () => {
  return (
    <Box as="footer" className={styles.footer}>
      <Flex className={styles.innerFooter}>
        <Box>
          <a href="https://www.instagram.com/simplytogether.e/">
            <Icon as={FaInstagram} boxSize={6} />
          </a>

          <a href="https://www.pinterest.com/simplytogetherevents/_created">
            <Icon as={FaPinterest} boxSize={6} />
          </a>

          <a href="mailto:simplytogetherevents@gmail.com">
            <Icon as={FaEnvelope} boxSize={6} />
          </a>
        </Box>

        <Center height="3.5em">
          <Divider
            borderColor="#000000"
            borderLeftWidth={2}
            orientation="vertical"
          />
        </Center>

        <Flex direction="column">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </Flex>
      </Flex>

      <p>
        &copy; {new Date().getFullYear()} Simply Togehter Events LLC. All Rights
        Reserved.
      </p>
    </Box>
  );
};

export default Footer;
