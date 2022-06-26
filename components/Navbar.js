import React from "react";
import Link from "next/link";
import styles from "../public/Home.module.css";
import {
  Box,
  Button,
  IconButton,
  Image,
  Flex,
  Icon,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerFooter,
  useDisclosure,
  Divider,
} from "@chakra-ui/react";
import { FaInstagram, FaEnvelope, FaPinterest } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [width, height] = props.windowSize;

  const displayNav = () => {
    if (width > 600) {
      return (
        <Flex className={styles.fullScreenNav}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </Flex>
      );
    } else {
      return (
        <Box className={styles.smallScreenNav}>
          <IconButton
            marginRight="1em"
            ref={btnRef}
            color="inherit"
            onClick={onOpen}
            colorScheme="blackAlpha"
            variant="ghost"
            icon={<Icon as={IoMenuOutline} boxSize={8} />}
            _hover={{
              color: "#da0041",
            }}
            _active={{
              transform: "scale(0.9)",
            }}
          />

          <Drawer
            finalFocusRef={btnRef}
            onClose={onClose}
            placement="right"
            isOpen={isOpen}
            size="full"
          >
            <DrawerOverlay />
            <DrawerContent backgroundColor="#FF4D6D">
              <DrawerCloseButton color="#ffffff" />

              <DrawerBody padding={20}>
                <Box as="ul" className={styles.navDrawer}>
                  <li>
                    <Link href="/" onPress={onClose}>
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link href="/about" onPress={onClose}>
                      About
                    </Link>
                  </li>

                  <li>
                    <Link href="/services" onPress={onClose}>
                      Services
                    </Link>
                  </li>

                  <li>
                    <Link href="/gallery" onPress={onClose}>
                      Gallery
                    </Link>
                  </li>

                  <li>
                    <Link href="/contact" onPress={onClose}>
                      Contact
                    </Link>
                  </li>
                </Box>
              </DrawerBody>

              <DrawerFooter
                alignItem="center"
                justifyContent="center"
                borderTopWidth={0.5}
                className={styles.navDrawerFooter}
              >
                <a href="https://www.instagram.com/simplytogether.e/">
                  <Icon as={FaInstagram} boxSize={6} />
                </a>

                <a href="https://www.pinterest.com/simplytogetherevents/_created">
                  <Icon as={FaPinterest} boxSize={6} />
                </a>

                <a href="mailto:simplytogetherevents@gmail.com">
                  <Icon as={FaEnvelope} boxSize={6} />
                </a>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Box>
      );
    }
  };

  return (
    <Box as="nav" className={styles.navbar}>
      <Box>
        <Image
          src="simplytogether_events.png"
          alt="Simply Together Events Logo"
        />
      </Box>

      {displayNav()}
    </Box>
  );
};

export default Navbar;
