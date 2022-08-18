import {
  Box,
  Image,
  Text,
  Badge,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import styles from "../../public/Home.module.css";

const Rentals = (props) => {
  const Navbar = props.navbar;
  const Footer = props.footer;

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}

      <Box className={styles.pageHeadings}>
        <Image src="../images/partyRentals.png" alt="Party Rentals" />
        <Text>View items to rent out</Text>
      </Box>

      <Box className={styles.partyRentals}>
        <Accordion allowMultiple>
          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#C9184A", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Welcome Sign | $125
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.partyRentalContainer}>
                <Box className={styles.partyRentalPhotos}>
                  <Box>
                    <Image
                      src="../images/party-rentals/welcome-sign-1.jpg"
                      alt="Welcome Sign 1"
                    />
                    <Image
                      src="../images/party-rentals/welcome-sign-2.jpeg"
                      alt="Welcome Sign 2"
                    />
                  </Box>

                  <Box>
                    <Image
                      src="../images/party-rentals/welcome-sign-3.jpeg"
                      alt="Welcome Sign 3"
                    />
                    <Image
                      src="../images/party-rentals/welcome-sign-4.jpg"
                      alt="Welcome Sign 4"
                    />
                  </Box>
                </Box>

                <Box>
                  <ul>
                    <li>
                      <Text>
                        handprinted acrylic sign (font & color of choice)
                      </Text>
                    </li>

                    <li>
                      <Text>rose gold or gold easel</Text>
                    </li>

                    <li>
                      <Text>optional white floral swag</Text>
                    </li>
                  </ul>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#FF4D6D", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Easel Rental | $15
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.partyRentalContainer}>
                <Box className={styles.partyRentalPhotos}>
                  <Image />
                </Box>

                <Box>
                  <ul>
                    <li>
                      <Text>available in rose gold or gold</Text>
                    </li>

                    <li>
                      <Text>holds up to 24”x36” and 8 lbsl</Text>
                    </li>
                  </ul>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#800F2F", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Mirror & Easel | $50
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.partyRentalContainer}>
                <Box className={styles.partyRentalPhotos}>
                  <Image
                    src="../images/party-rentals/mirror.jpeg"
                    alt="Mirror and Easel"
                  />
                </Box>

                <Box>
                  <ul>
                    <li>
                      <Text>40” lightweight easel</Text>
                    </li>

                    <li>
                      <Text>mirror comes plain</Text>
                    </li>
                  </ul>

                  <Text>* inquire for custom design</Text>
                  <Text>* greenery not included</Text>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#590D22", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Bar Cart | $70
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.partyRentalContainer}>
                <Box className={styles.partyRentalPhotos}>
                  <Box>
                    <Image
                      src="../images/party-rentals/bar-cart-1.jpg"
                      alt="Bar Cart 1"
                    />
                  </Box>

                  <Box>
                    <Image
                      src="../images/party-rentals/bar-cart-2.jpeg"
                      alt="Bar Cart 2"
                    />
                  </Box>

                  <Box>
                    <Image
                      src="../images/party-rentals/bar-cart-3.jpg"
                      alt="Bar Cart 3"
                    />
                  </Box>
                </Box>

                <Box>
                  <ul>
                    <li>
                      <Text>optional white floral attached</Text>
                    </li>
                  </ul>

                  <Text>With Add-ons | $125</Text>
                  <ul>
                    <li>
                      <Text>ice bucket</Text>
                    </li>
                    <li>
                      <Text>drink sign</Text>
                    </li>
                    <li>
                      <Text>6 champagne glasses</Text>
                    </li>
                    <li>
                      <Text>custom photo printed (5x7)</Text>
                    </li>
                  </ul>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#590D22", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Polaroid Camera | $20{" "}
                  <Badge marginLeft=".5em" colorScheme="pink">
                    Popular
                  </Badge>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.partyRentalContainer}>
                <Box className={styles.partyRentalPhotos}></Box>

                <Box>
                  <ul>
                    <li>
                      <Text>Includes 10 photos that you get to keep</Text>
                    </li>
                  </ul>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#590D22", color: "white" }}>
                <Box flex="1" textAlign="left">
                  White Umbrella with Stand | $30
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.partyRentalContainer}>
                <Box className={styles.partyRentalPhotos}>
                  <Box>
                    <Image
                      src="../images/party-rentals/umbrella-1.jpg"
                      alt="White Umbrella 1"
                    />
                  </Box>
                </Box>

                <Box>
                  <ul>
                    <li>
                      <Text></Text>
                    </li>
                  </ul>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#590D22", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Grass Backdrop with Sign | $350
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.partyRentalContainer}>
                <Box className={styles.partyRentalPhotos}>
                  <Box>
                    <Image
                      src="../images/party-rentals/grass-backdrop-1.jpeg"
                      alt="Grass Backdrop 1"
                    />
                  </Box>

                  <Box>
                    <Image
                      src="../images/party-rentals/grass-backdrop-2.jpg"
                      alt="Grass Backdrop 2"
                    />
                  </Box>
                </Box>

                <Box>
                  <ul>
                    <li>
                      <Text>
                        includes LED sign (Better Together or Blessed)
                      </Text>
                    </li>

                    <li>
                      <Text>we can attach your own sign</Text>
                    </li>
                  </ul>

                  <Text>*inquire price for bigger size</Text>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton _expanded={{ bg: "#590D22", color: "white" }}>
                <Box flex="1" textAlign="left">
                  Fairy Light Backdrop with Eucalyptus Garland | $450
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Box className={styles.partyRentalContainer}>
                <Box className={styles.partyRentalPhotos}>
                  <Box>
                    <Image
                      src="../images/party-rentals/fairy-backdrop-1.jpeg"
                      alt="Fairy Light Backdrop 1"
                    />
                  </Box>

                  <Box>
                    <Image
                      src="../images/party-rentals/fairy-backdrop-2.jpeg"
                      alt="Fairy Light Backdrop 2"
                    />
                  </Box>
                </Box>

                <Box>
                  <ul>
                    <li>
                      <Text></Text>
                    </li>
                  </ul>

                  <Text>*inquire price for bigger size</Text>
                </Box>
              </Box>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
      {Footer}
    </Box>
  );
};

export default Rentals;
