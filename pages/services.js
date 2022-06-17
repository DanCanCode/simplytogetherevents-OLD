import { Box, Text, Image } from "@chakra-ui/react";
import styles from "../public/Home.module.css";

const Services = (props) => {
  const Navbar = props.navbar;
  const [width, height] = props.windowSize;

  return (
    <>
      <Box className={styles.servicesBackground}>
        <Box w="100%" h="100vh" bgColor="rgba(0,0,0,0.5)">
          {Navbar}
          <Box className={styles.mainBackgroundText}>
            <Text
              paddingBottom={2}
              fontSize={48}
              fontFamily="serif"
              letterSpacing={1}
            >
              Services
            </Text>
            <Text
              fontSize={20}
              textTransform="uppercase"
              letterSpacing={2}
              maxWidth="40vw"
            >
              here is what we offer.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className={styles.services}>
        <Box className={styles.innerServices}>
          <Text>Event Design</Text>

          <Box className={styles.serviceImages}>
            <Box>
              <Image
                src="./images/88FB0DB0-B13A-457A-86F5-7470519D078F.jpg"
                alt="event design 1"
              />
            </Box>

            <Box>
              <Image src="./images/IMG_0434.jpg" alt="event design 2" />
            </Box>

            <Box>
              <Image src="./images/IMG_1410.jpg" alt="event design 3" />
            </Box>

            <Box>
              <Image src="./images/IMG_8181.jpg" alt="event design 4" />
            </Box>
          </Box>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            sit amet cursus sit amet dictum sit amet. Posuere ac ut consequat
            semper. Lectus proin nibh nisl condimentum id venenatis a. In hac
            habitasse platea dictumst quisque sagittis purus. Molestie a iaculis
            at erat pellentesque adipiscing commodo. Ultricies tristique nulla
            aliquet enim tortor at auctor. Bibendum at varius vel pharetra vel.
            Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Laoreet
            suspendisse interdum consectetur libero id faucibus nisl tincidunt.
            Ligula ullamcorper malesuada proin libero nunc consequat interdum
            varius. Arcu felis bibendum ut tristique et egestas quis ipsum
            suspendisse. Malesuada fames ac turpis egestas. Mollis aliquam ut
            porttitor leo a diam. Egestas sed sed risus pretium. Pharetra et
            ultrices neque ornare aenean euismod. Vestibulum sed arcu non odio.
            Tellus in hac habitasse platea dictumst vestibulum.
          </Text>
        </Box>

        <Box className={styles.innerServices}>
          <Text>Event Planning</Text>

          <Box className={styles.serviceImages}>
            <Box>
              <Image src="./images/IMG_9423.jpg" alt="event planning 1" />
            </Box>

            <Box>
              <Image src="./images/IMG_9804.jpg" alt="event planning 2" />
            </Box>

            <Box>
              <Image src="./images/IMG_9748.jpg" alt="event planning 3" />
            </Box>

            <Box>
              <Image src="./images/IMG_8177.jpg" alt="event planning 4" />
            </Box>
          </Box>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            sit amet cursus sit amet dictum sit amet. Posuere ac ut consequat
            semper. Lectus proin nibh nisl condimentum id venenatis a. In hac
            habitasse platea dictumst quisque sagittis purus. Molestie a iaculis
            at erat pellentesque adipiscing commodo. Ultricies tristique nulla
            aliquet enim tortor at auctor. Bibendum at varius vel pharetra vel.
            Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Laoreet
            suspendisse interdum consectetur libero id faucibus nisl tincidunt.
            Ligula ullamcorper malesuada proin libero nunc consequat interdum
            varius. Arcu felis bibendum ut tristique et egestas quis ipsum
            suspendisse. Malesuada fames ac turpis egestas. Mollis aliquam ut
            porttitor leo a diam. Egestas sed sed risus pretium. Pharetra et
            ultrices neque ornare aenean euismod. Vestibulum sed arcu non odio.
            Tellus in hac habitasse platea dictumst vestibulum.
          </Text>
        </Box>

        <Box className={styles.innerServices}>
          <Text>Luxury Picnics</Text>

          <Box className={styles.serviceImages}>
            <Box>
              <Image src="./images/IMG_5951.jpg" alt="luxury picnic 1" />
            </Box>

            <Box>
              <Image src="./images/IMG_3566.jpg" alt="luxury picnic 2" />
            </Box>

            <Box>
              <Image src="./images/IMG_4237.jpg" alt="luxury picnic 3" />
            </Box>

            <Box>
              <Image src="./images/IMG_6140.jpg" alt="luxury picnic 4" />
            </Box>
          </Box>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            sit amet cursus sit amet dictum sit amet. Posuere ac ut consequat
            semper. Lectus proin nibh nisl condimentum id venenatis a. In hac
            habitasse platea dictumst quisque sagittis purus. Molestie a iaculis
            at erat pellentesque adipiscing commodo. Ultricies tristique nulla
            aliquet enim tortor at auctor. Bibendum at varius vel pharetra vel.
            Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Laoreet
            suspendisse interdum consectetur libero id faucibus nisl tincidunt.
            Ligula ullamcorper malesuada proin libero nunc consequat interdum
            varius. Arcu felis bibendum ut tristique et egestas quis ipsum
            suspendisse. Malesuada fames ac turpis egestas. Mollis aliquam ut
            porttitor leo a diam. Egestas sed sed risus pretium. Pharetra et
            ultrices neque ornare aenean euismod. Vestibulum sed arcu non odio.
            Tellus in hac habitasse platea dictumst vestibulum.
          </Text>
        </Box>

        <Box className={styles.innerServices}>
          <Text>Party Rentals</Text>

          <Box className={styles.serviceImages}>
            <Box>
              <Image src="./images/IMG_9732.jpg" alt="party rental 1" />
            </Box>

            <Box>
              <Image src="./images/IMG_9953.jpg" alt="party rental 2" />
            </Box>

            <Box>
              <Image src="./images/IMG_8154.jpg" alt="party rental 3" />
            </Box>

            <Box>
              <Image src="./images/IMG_1623.jpg" alt="party rental 4" />
            </Box>
          </Box>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet
            sit amet cursus sit amet dictum sit amet. Posuere ac ut consequat
            semper. Lectus proin nibh nisl condimentum id venenatis a. In hac
            habitasse platea dictumst quisque sagittis purus. Molestie a iaculis
            at erat pellentesque adipiscing commodo. Ultricies tristique nulla
            aliquet enim tortor at auctor. Bibendum at varius vel pharetra vel.
            Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Laoreet
            suspendisse interdum consectetur libero id faucibus nisl tincidunt.
            Ligula ullamcorper malesuada proin libero nunc consequat interdum
            varius. Arcu felis bibendum ut tristique et egestas quis ipsum
            suspendisse. Malesuada fames ac turpis egestas. Mollis aliquam ut
            porttitor leo a diam. Egestas sed sed risus pretium. Pharetra et
            ultrices neque ornare aenean euismod. Vestibulum sed arcu non odio.
            Tellus in hac habitasse platea dictumst vestibulum.
          </Text>
        </Box>
      </Box>
    </>
  );
};

export default Services;
