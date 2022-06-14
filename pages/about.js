import { Box, Container, Text, Image, Divider, Center } from "@chakra-ui/react";
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

      <Center>
        <Divider
          width="70vw"
          borderColor="rgba(0,0,0, 0.8)"
          borderBottomWidth={2}
        />
      </Center>

      <Box padding="2em" bgColor="#f4f4f4">
        <Text textAlign="center" fontFamily="serif" fontSize={32}>
          {"Frequently Asked Questions & Information"}
        </Text>

        <Box className={styles.faq}>
          <Box>
            <Text fontFamily="serif" fontSize={22}>
              what if I need to cancel or reschedule my luxury picnic?
            </Text>
            <Text>
              Things come up, thats life. In the event that you may need to
              cancel or reschedule, please give at least 72 hours notice. You
              can reschedule your picnic for no extra charge if within the time
              frame. Any event canceled or rescheduled less than 72 hours will
              not be refunded.
            </Text>
          </Box>

          <Box>
            <Text fontFamily="serif" fontSize={22}>
              what if I am late to my luxury picnic?
            </Text>
            <Text>
              If you arrive late to your scheduled picnic time, we will not be
              able to extend the time. Again, things come up and you can
              reschedule with no charge if done within 72 hours in advance.
              There will be no price adjustments or refunds if you arrive late.
              If you do not show up, it will be considered a cancelation and no
              refund will be issued.
            </Text>
          </Box>

          <Box>
            <Text fontFamily="serif" fontSize={22}>
              what if there is inclement weather the day of my scheduled picnic?
            </Text>
            <Text>
              We can't control the weather and neither can you! You will be able
              to reschedule your picnic at no extra charge if the weather
              decides to not be great. We also offer the option of changing the
              picnic location to somewhere indoors (fees may apply) if you are
              persistent on keeping the date. Either way, will make it happen,
              stress free!
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
