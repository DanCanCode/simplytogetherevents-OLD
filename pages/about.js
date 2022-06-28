import { Box, Container, Text, Image, Button } from "@chakra-ui/react";
import Link from "next/link";
import styles from "../public/Home.module.css";

const About = (props) => {
  const Navbar = props.navbar;
  const Footer = props.footer;

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}

      <Box className={styles.about}>
        <Box>
          <Image
            htmlWidth={500}
            src="./images/international-womens-day-gala/9.jpg"
            alt="Samantha Espinal"
          />
        </Box>

        <Box className={styles.aboutText}>
          <Image
            className={styles.aboutWelcomeText}
            src="./aboutWelcomeText.png"
            alt="Welcome to Simply Together Events"
          />
          <Text>
            From a young age, I wanted nothing more than to entertain and have
            people around. From hangouts to parties, I always loved being able
            to go above and beyond in what I create. Being able to gather
            everyone together for an event and see the look on their faces shows
            me how beautifully things can come together. This made me realize I
            wanted to share that with the world.
          </Text>
          <Text>
            I welcome you Simply Together Events. I offer event planning, event
            design, luxury picnics, and party rentals. For whatever you may need
            for your upcoming event, I am here to do it all. I am happy that my
            wide expansion of services can carter to some of the biggest events
            and most intimate moments with your loved ones. I am here to provide
            a stress-free, fun, and beautiful gatherings for anyone.
          </Text>

          <Box paddingY="1.5em">
            <Text>With Love,</Text>
            <Image
              htmlWidth={400}
              src="./aboutText.png"
              alt="Samantha Espinal"
            />
            <Text textAlign="center">CEO | Founder</Text>
          </Box>
        </Box>
      </Box>

      <Box className={styles.linkToServices}>
        <Box>
          <Container>
            <Text textTransform="uppercase" paddingBottom=".5em">
              Want More?
            </Text>
            <Text paddingBottom="1em">
              Click the button below to view all the services we offer!
            </Text>

            <Link href="/services">
              <Button
                _hover={{
                  transform: "scale(0.9)",
                  bgColor: "#FF97B7",
                }}
                _active={{
                  bgColor: "#FF5D8F",
                  transform: "scale(0.9)",
                }}
                variant="outline"
              >
                <Text>View Services</Text>
              </Button>
            </Link>
          </Container>
        </Box>
      </Box>

      {Footer}
    </Box>
  );
};

export default About;
