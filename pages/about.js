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
        <Box className={styles.aboutImage}>
          <Image htmlWidth={500} src="./Samantha.webp" alt="Samantha Espinal" />
        </Box>

        <Box className={styles.aboutText}>
          <Text paddingY="1.5em">
            From a young age, I've wanted nothing more than to always be around
            people. My parents always joke with me how I would have a friend
            comeover all day and 10 minutes after they would leave, I would ask
            if someone else could then sleepover. With that being said, from
            hangouts to parties, I've always loved to go above and beyond. I
            love the look on people's faces when they see how beautifully a
            party I set up was or how they come and tell me it was the best
            party they have ever been too. It only felt best if I took what I've
            always loved and turned it into something I can offer for everyone.
            From event planning to designing, rentals, and luxury picnics, I am
            here to simply bring everyone together the most beautiful way I know
            how.
          </Text>
          <Text>With Love,</Text>

          <Text textAlign="center">CEO | Founder</Text>
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
