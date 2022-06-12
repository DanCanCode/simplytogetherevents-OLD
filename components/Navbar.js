import React from "react";
import Link from "next/link";
import styles from "../public/Home.module.css";
import {
  Box,
  Button,
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
import { FiMenu } from "react-icons/fi";

const Navbar = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [width, height] = props.windowSize;

  const displayNav = () => {
    if (width > 800) {
      return (
        <Flex>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/contact">Contact</Link>
        </Flex>
      );
    } else {
      return (
        <>
          <Button
            ref={btnRef}
            onClick={onOpen}
            colorScheme="blackAlpha"
            variant="ghost"
            minH={10}
            _active={{
              transform: "scale(0.9)",
            }}
          >
            <Icon as={FiMenu} color="#ffffff" boxSize={8} />
          </Button>

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
        </>
      );
    }
  };

  return (
    <Flex as="nav" className={styles.navbar}>
      <Image
        src="simplytogether_events.png"
        alt="Simply Together Events Logo"
      />

      {displayNav()}
    </Flex>
  );
};

export default Navbar;
