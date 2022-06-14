import { Box, Container, Text, Image } from "@chakra-ui/react";
import styles from "../public/Home.module.css";

const About = (props) => {
  const Navbar = props.navbar;
  const [width, height] = props.windowSize;

  return (
    <>
      <Box className={styles.aboutBackground}>
        <Box w="100%" h="100vh" bgColor="rgba(0,0,0,0.5)">
          {Navbar}
          <Box className={styles.mainBackgroundText}>
            <Text
              paddingBottom={2}
              fontSize={48}
              fontFamily="serif"
              letterSpacing={1}
            >
              About Us
            </Text>
            <Text fontSize={20} textTransform="uppercase" letterSpacing={2}>
              Nice to meet you!
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className={styles.beforeAbout}>
        <Container display="flex" flexDirection="column" alignItems="center">
          <Image
            htmlWidth={400}
            align="center"
            src="./simplytogether_events.png"
            alt="Simply Together Events Logo"
          />
          <Text fontFamily="serif" fontSize={18}>
            Simply Togther Events is more than just an event planning service.
            We strive to provide our customers with the best _____. Our mission
            is to make sure your vision comes to life.
          </Text>
        </Container>
      </Box>

      <Container maxWidth="none" className={styles.about}>
        <Text fontFamily="serif" fontSize={40}>
          {"Founder & CEO"}
        </Text>
        <Image
          htmlWidth={500}
          borderRadius="full"
          src="./Samantha.webp"
          alt="Samantha Espinal"
        />
        <Text fontFamily="serif" fontSize={32}>
          Samantha Espinal
        </Text>

        <Text textAlign="center" maxWidth="65vw">
          From a young age, I've wanted nothing more than to always be around
          people. My parents always joke with me how I would have a friend
          comeover all day and 10 minutes after they would leave, I would ask if
          someone else could then sleepover. With that being said, from hangouts
          to parties, I've always loved to go above and beyond. I love the look
          on people's faces when they see how beautifully a party I set up was
          or how they come and tell me it was the best party they have ever been
          too. It only felt best if I took what I've always loved and turned it
          into something I can offer for everyone. From event planning to
          designing, rentals, and luxury picnics, I am here to simply bring
          everyone together the most beautiful way I know how.
        </Text>

        <Text>social media links maybe</Text>
      </Container>

      <Box>
        <Text>FAQ SECTION</Text>
      </Box>
    </>
  );
};

export default About;
