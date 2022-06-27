import Link from "next/link";
import {
  Box,
  Text,
  Image,
  Icon,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { FaInstagram, FaEnvelope, FaPinterest } from "react-icons/fa";
import styles from "../public/Home.module.css";

const Services = (props) => {
  const Navbar = props.navbar;
  const Footer = props.footer;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}

      <Box className={styles.pageHeadText}>
        <Text textTransform="uppercase">Services</Text>
        <Text textTransform="lowercase">Everything we offer</Text>
      </Box>

      <Box className={styles.services}>
        <Box className={styles.innerService}>
          <Box>
            <Image src="./images/james_wes_baptism/14.jpg" alt="event design" />
          </Box>

          <Box paddingLeft={20}>
            <Text className={styles.serviceHeadings}>Event Design</Text>
            <Text className={styles.serviceTexts}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta
              nibh venenatis cras sed felis eget velit aliquet sagittis.
              Sagittis orci a scelerisque purus semper eget duis at tellus. Quam
              quisque id diam vel quam elementum. Eu augue ut lectus arcu
              bibendum at varius vel pharetra. Nunc mattis enim ut tellus
              elementum sagittis vitae. Ornare lectus sit amet est placerat.
              Lacus sed viverra tellus in. Ornare arcu dui vivamus arcu felis
              bibendum ut. Faucibus ornare suspendisse sed nisi lacus sed. Urna
              porttitor rhoncus dolor purus non enim praesent elementum. Sapien
              pellentesque habitant morbi tristique senectus. Nec tincidunt
              praesent semper feugiat nibh sed pulvinar proin gravida.
            </Text>
          </Box>
        </Box>

        <Box className={styles.innerServiceReverse}>
          <Box>
            <Text className={styles.serviceHeadings}>Event Planning</Text>
            <Text className={styles.serviceTexts}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta
              nibh venenatis cras sed felis eget velit aliquet sagittis.
              Sagittis orci a scelerisque purus semper eget duis at tellus. Quam
              quisque id diam vel quam elementum. Eu augue ut lectus arcu
              bibendum at varius vel pharetra. Nunc mattis enim ut tellus
              elementum sagittis vitae. Ornare lectus sit amet est placerat.
              Lacus sed viverra tellus in. Ornare arcu dui vivamus arcu felis
              bibendum ut. Faucibus ornare suspendisse sed nisi lacus sed. Urna
              porttitor rhoncus dolor purus non enim praesent elementum. Sapien
              pellentesque habitant morbi tristique senectus. Nec tincidunt
              praesent semper feugiat nibh sed pulvinar proin gravida.
            </Text>
          </Box>

          <Box>
            <Image
              src="./images/giovanni_dedication/12.jpg"
              alt="event planning"
            />
          </Box>
        </Box>

        <Box className={styles.innerService}>
          <Box>
            <Image src="./images/IMG_3862.jpg" alt="luxury picnics" />
          </Box>

          <Box paddingLeft={20}>
            <Text className={styles.serviceHeadings}>Luxury Picnics</Text>
            <Text className={styles.serviceTexts}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta
              nibh venenatis cras sed felis eget velit aliquet sagittis.
              Sagittis orci a scelerisque purus semper eget duis at tellus. Quam
              quisque id diam vel quam elementum. Eu augue ut lectus arcu
              bibendum at varius vel pharetra. Nunc mattis enim ut tellus
              elementum sagittis vitae. Ornare lectus sit amet est placerat.
              Lacus sed viverra tellus in. Ornare arcu dui vivamus arcu felis
              bibendum ut. Faucibus ornare suspendisse sed nisi lacus sed. Urna
              porttitor rhoncus dolor purus non enim praesent elementum. Sapien
              pellentesque habitant morbi tristique senectus. Nec tincidunt
              praesent semper feugiat nibh sed pulvinar proin gravida.
            </Text>

            <Button
              onClick={onOpen}
              colorScheme="pink"
              _hover={{
                transform: "scale(0.9)",
              }}
              _active={{
                transform: "scale(0.9)",
              }}
            >
              View Pricing
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Luxury Picnic Pricing</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text>lwkjfnjkeasnfioenfaklefjejakfkjefekjf</Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="pink" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Link href="/contact">
                    <Button variant="ghost" onClick={onClose}>
                      Contact Us
                    </Button>
                  </Link>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Box>

        <Box className={styles.innerServiceReverse}>
          <Box>
            <Text className={styles.serviceHeadings}>Party Rentals</Text>
            <Text className={styles.serviceTexts}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Porta
              nibh venenatis cras sed felis eget velit aliquet sagittis.
              Sagittis orci a scelerisque purus semper eget duis at tellus. Quam
              quisque id diam vel quam elementum. Eu augue ut lectus arcu
              bibendum at varius vel pharetra. Nunc mattis enim ut tellus
              elementum sagittis vitae. Ornare lectus sit amet est placerat.
              Lacus sed viverra tellus in. Ornare arcu dui vivamus arcu felis
              bibendum ut. Faucibus ornare suspendisse sed nisi lacus sed. Urna
              porttitor rhoncus dolor purus non enim praesent elementum. Sapien
              pellentesque habitant morbi tristique senectus. Nec tincidunt
              praesent semper feugiat nibh sed pulvinar proin gravida.
            </Text>
          </Box>

          <Box>
            <Image
              src="./images/colin_jeanine_gender_reveal/4.jpg"
              alt="party rentals"
            />
          </Box>
        </Box>
      </Box>

      <Box className="instagram-api">
        <Text>Recent Posts</Text>
      </Box>

      {Footer}
    </Box>
  );
};

export default Services;
