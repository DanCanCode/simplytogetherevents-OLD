import Link from "next/link";
import { Box, Text, Image, Button, Icon } from "@chakra-ui/react";
import { FaInstagram, FaEnvelope, FaPinterest } from "react-icons/fa";
import styles from "../public/Home.module.css";

const Services = (props) => {
  const Navbar = props.navbar;
  const Footer = props.footer;
  const [width, height] = props.windowSize;

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}

      <Box className={styles.services}>
        <Box className={styles.innerService}>
          <Box>
            <Image src="./images/IMG_9990.jpg" alt="event design" />
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
            <Image src="./images/IMG_5655.jpg" alt="event planning" />
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
            <Image src="./images/IMG_1625.jpg" alt="party rentals" />
          </Box>
        </Box>
      </Box>

      <Box className={styles.keepInTouch}>
        <Box className={styles.innerKeepInTouch}>
          <Text textTransform="uppercase">Keep In Touch</Text>
          <Text>
            Follow us on social media to stay up to date with the latest events!
          </Text>
          <Box>
            <a href="https://www.instagram.com/simplytogether.e/">
              <Icon as={FaInstagram} boxSize={4} />
            </a>

            <a href="https://www.pinterest.com/simplytogetherevents/_created">
              <Icon as={FaPinterest} boxSize={4} />
            </a>

            <a href="mailto:simplytogetherevents@gmail.com">
              <Icon as={FaEnvelope} boxSize={4} />
            </a>
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
