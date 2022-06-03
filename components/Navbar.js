import Link from "next/link";
import styles from "../public/Home.module.css";
import { Box, Image, Center, Divider, Flex, Icon } from "@chakra-ui/react";
import { FaInstagram, FaEnvelope, FaPinterest } from "react-icons/fa";

const Navbar = () => {
  return (
    <Box as="nav" className={styles.navbar}>
      <Image
        maxHeight={100}
        maxWidth={100}
        src="simplytogether_events.png"
        alt="Simply Together Events Logo"
      />

      <Flex>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/contact">Contact</Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
