import styles from "../public/Home.module.css";
import Link from "next/link";
import { Box, Text, Image, Icon, Button } from "@chakra-ui/react";
import { FaInstagram, FaEnvelope, FaPinterest } from "react-icons/fa";

const Home = (props) => {
  const Navbar = props.navbar;
  const [width, height] = props.windowSize;
  return (
    <>
      <Box className={styles.homeBackground}>
        <Box w="100%" h="100vh" bgColor="rgba(0,0,0,0.5)">
          {Navbar}
          <Box className={styles.mainBackgroundText}>
            <Image
              htmlWidth={350}
              paddingBottom="1em"
              align="center"
              src="./simplytogether_events.png"
              alt="Simply Together Events Logo"
            />
            <Text
              fontSize={20}
              textTransform="uppercase"
              letterSpacing={2}
              maxWidth="40vw"
            >
              to simply bring everyone together the best way we know how.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className={styles.home}>
        <Box className={styles.innerHome}>
          <Box>
            <Image src="./images/IMG_9990.jpg" alt="event design" />
          </Box>

          <Box paddingLeft={20}>
            <Text className={styles.homeHeadings}>Event Design</Text>
            <Text className={styles.homeTexts}>
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
              praesent semper feugiat nibh sed pulvinar proin gravida.{" "}
            </Text>
            <Link href="/">
              <Button
                _hover={{
                  bgColor: "#FF97B7",
                }}
                _active={{
                  bgColor: "#FF5D8F",
                  transform: "scale(0.9)",
                }}
                variant="outline"
              >
                Learn More
              </Button>
            </Link>
          </Box>
        </Box>

        <Box className={styles.innerHomeReverse}>
          <Box>
            <Text className={styles.homeHeadings}>Event Planning</Text>
            <Text className={styles.homeTexts}>
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
              praesent semper feugiat nibh sed pulvinar proin gravida.{" "}
            </Text>
            <Link href="/">
              <Button
                _hover={{
                  bgColor: "#FF97B7",
                }}
                _active={{
                  bgColor: "#FF5D8F",
                  transform: "scale(0.9)",
                }}
                variant="outline"
              >
                Learn More
              </Button>
            </Link>
          </Box>

          <Box>
            <Image src="./images/IMG_5655.jpg" alt="event planning" />
          </Box>
        </Box>

        <Box className={styles.innerHome}>
          <Box>
            <Image src="./images/IMG_3862.jpg" alt="luxury picnics" />
          </Box>

          <Box paddingLeft={20}>
            <Text className={styles.homeHeadings}>Luxury Picnics</Text>
            <Text className={styles.homeTexts}>
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
              praesent semper feugiat nibh sed pulvinar proin gravida.{" "}
            </Text>
            <Link href="/">
              <Button
                _hover={{
                  bgColor: "#FF97B7",
                }}
                _active={{
                  bgColor: "#FF5D8F",
                  transform: "scale(0.9)",
                }}
                variant="outline"
              >
                View Pricing
              </Button>
            </Link>
          </Box>
        </Box>

        <Box className={styles.innerHomeReverse}>
          <Box>
            <Text className={styles.homeHeadings}>Party Rentals</Text>
            <Text className={styles.homeTexts}>
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
              praesent semper feugiat nibh sed pulvinar proin gravida.{" "}
            </Text>
            <Link href="/">
              <Button
                _hover={{
                  bgColor: "#FF97B7",
                }}
                _active={{
                  bgColor: "#FF5D8F",
                  transform: "scale(0.9)",
                }}
                variant="outline"
              >
                Learn More
              </Button>
            </Link>
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
    </>
  );
};

export default Home;
