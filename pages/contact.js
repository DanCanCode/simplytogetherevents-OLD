import {
  Box,
  Text,
  Container,
  Input,
  Icon,
  Select,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "../public/Home.module.css";
import {
  FaArrowRight,
  FaInstagram,
  FaEnvelope,
  FaPinterest,
} from "react-icons/fa";

const Contact = (props) => {
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
    event: "",
    info: "",
  });

  const Navbar = props.navbar;
  const [width, height] = props.windowSize;

  return (
    <>
      <Box className={styles.contactBackground}>
        <Box w="100%" h="100vh" bgColor="rgba(0,0,0,0.5)">
          {Navbar}
          <Text textAlign="center" verticalAlign="baseline" color="#ffffff">
            Contact Us
          </Text>
        </Box>
      </Box>

      <Container className={styles.contact}>
        <FormControl isRequired className={styles.contactInputs}>
          <Box>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input
              id="name"
              type="name"
              value={contactInfo.name}
              onChange={(event) => {
                setContactInfo((prevState) => ({
                  ...prevState,
                  name: event.target.value,
                }));
              }}
              variant="flushed"
            />
          </Box>

          <Box className="inputFields">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              type="email"
              value={contactInfo.email}
              onChange={(event) => {
                setContactInfo((prevState) => ({
                  ...prevState,
                  email: event.target.value,
                }));
              }}
              variant="flushed"
            />
          </Box>

          <Box className="inputFields">
            <FormLabel htmlFor="phone">Phone</FormLabel>
            <Input
              id="phone"
              type="phone"
              value={contactInfo.phone}
              onChange={(event) => {
                setContactInfo((prevState) => ({
                  ...prevState,
                  phone: event.target.value,
                }));
              }}
              variant="flushed"
            />
          </Box>

          <Box className="inputFields">
            <FormLabel htmlFor="event">Event Type</FormLabel>
            <Select
              variant="flushed"
              placeholder="Select a service"
              onChange={(event) => {
                setContactInfo((prevState) => ({
                  ...prevState,
                  event: event.target.value,
                }));
              }}
            >
              <option value="Event Planning">Event Planning</option>
              <option value="Event Design">Event Design</option>
              <option value="Luxury Picnic">Luxury Picnic</option>
              <option value="Rental">Rental</option>
            </Select>
          </Box>

          <Box className="inputFields">
            <FormLabel htmlFor="info">Tell us about the event:</FormLabel>
            <Textarea
              id="info"
              type="info"
              value={contactInfo.info}
              onChange={(event) => {
                setContactInfo((prevState) => ({
                  ...prevState,
                  info: event.target.value,
                }));
              }}
              variant="flushed"
              placeholder="Enter details about your event here"
            />
          </Box>

          <Button
            colorScheme="pink"
            rightIcon={<FaArrowRight />}
            variant="outline"
            onClick={() => {
              console.log(contactInfo);
            }}
          >
            Submit
          </Button>
        </FormControl>
      </Container>

      <Box className={styles.contactKeepInTouch}>
        <Box className={styles.innerKeepInTouch}>
          <Text textTransform="uppercase" fontWeight="bold">
            Keep In Touch
          </Text>
          <Text>akwfdkawdkjwafkjnawkjfakwjnfkjawnfjkwefjkawfkjwafnjawfjk</Text>
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
    </>
  );
};

export default Contact;
