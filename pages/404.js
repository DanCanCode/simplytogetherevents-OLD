import Link from "next/link";
import {
  Box,
  Text,
  Image,
  Container,
  Icon,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { FaInstagram, FaEnvelope, FaPinterest } from "react-icons/fa";

const NotFound = (props) => {
  return (
    <Box backgroundColor="#fcf7f2">
      <Container padding="3em">
        <Image
          src="./simplytogether_events.png"
          alt="simply together events logo"
        />
        <Box paddingY="1em">
          <Text textAlign="center" fontSize={42}>
            404
          </Text>
          <Text textAlign="center" fontSize={24}>
            Page Not Found
          </Text>
        </Box>

        <Box align="center">
          <Link href="/" passHref>
            <Button colorScheme="pink" size="lg">
              Return Home
            </Button>
          </Link>
        </Box>

        <Box align="center" paddingTop="1em">
          <IconButton
            marginX=".5em"
            as="a"
            href="https://www.instagram.com/simplytogether.e/"
            colorScheme="purple"
            borderRadius="100%"
            icon={<Icon as={FaInstagram} />}
          />

          <IconButton
            as="a"
            marginX=".5em"
            colorScheme="red"
            borderRadius="100%"
            href="https://www.pinterest.com/simplytogetherevents/_created"
            icon={<Icon as={FaPinterest} />}
          />

          <IconButton
            as="a"
            marginX=".5em"
            colorScheme="whatsapp"
            borderRadius="100%"
            href="mailto:simplytogetherevents@gmail.com"
            icon={<Icon as={FaEnvelope} />}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound;
