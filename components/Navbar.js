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
} from "@chakra-ui/react";
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
            <DrawerContent backgroundColor="#E8E1D9">
              <DrawerCloseButton />

              <DrawerBody margin={10}>
                <Box as="ul">
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

              <DrawerFooter>
                {/* <Link
                  href="https://www.linkedin.com/in/danieleespinal/"
                  isExternal
                  marginRight={2}
                >
                  <Icon as={BsLinkedin} color="#c9c9c9" boxSize={6} />
                </Link>

                <Link
                  href="https://github.com/DanCanCode"
                  isExternal
                  marginLeft={2}
                >
                  <Icon as={BsGithub} color="#c9c9c9" boxSize={6} />
                </Link> */}
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
