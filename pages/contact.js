import {
  Box,
  Text,
  Image,
  Input,
  Icon,
  Select,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "../public/Home.module.css";

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

  const contactPhoto = () => {
    if (width > 800) {
      return (
        <Box>
          <Image src="./images/IMG_6003.jpg" alt="" />
        </Box>
      );
    }
  };

  return (
    <>
      <Box className={styles.contactBackground}>
        <Box w="100%" h="100vh" bgColor="rgba(0,0,0,0.5)">
          {Navbar}
          <Box className={styles.mainBackgroundText}>
            <Text
              paddingBottom={2}
              fontSize={48}
              fontFamily="serif"
              letterSpacing={1}
            >
              Contact Us
            </Text>
            <Text fontSize={20} textTransform="uppercase" letterSpacing={2}>
              Let's Do This!
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className={styles.beforeContact}>
        <Container>
          <Text fontSize={22} textTransform="uppercase" letterSpacing={2}>
            Are you ready?
          </Text>
          <Text fontFamily="serif" fontSize={18}>
            We are here to help! Tell us about the event and let's make your
            vision come to life. Please fill out the form below and we will
            contact you to dicuss your ideas and/or confirm your booking.
          </Text>
          <Text color="rgba(0, 0, 0, 0.5)" fontSize={14} marginTop="1em">
            * Please allow 1 to 3 business days for a response. Also, please
            check your junk/spam mail.
          </Text>
        </Container>
      </Box>

      <Box className={styles.contact}>
        <FormControl isRequired className={styles.contactInputs}>
          <Box>
            <FormLabel htmlFor="name" fontFamily="serif" fontSize={18}>
              Name
            </FormLabel>
            <Input
              id="name"
              type="name"
              borderColor="rgba(0, 0, 0, 0.5)"
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

          <Box>
            <FormLabel htmlFor="email" fontFamily="serif" fontSize={18}>
              Email
            </FormLabel>
            <Input
              id="email"
              type="email"
              borderColor="rgba(0, 0, 0, 0.5)"
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

          <Box>
            <FormLabel htmlFor="phone" fontFamily="serif" fontSize={18}>
              Phone
            </FormLabel>
            <Input
              id="phone"
              type="phone"
              borderColor="rgba(0, 0, 0, 0.5)"
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

          <Box>
            <FormLabel htmlFor="event" fontFamily="serif" fontSize={18}>
              Event Type
            </FormLabel>
            <Select
              variant="flushed"
              borderColor="rgba(0, 0, 0, 0.5)"
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

          <Box>
            <FormLabel htmlFor="info" fontFamily="serif" fontSize={18}>
              Tell us about the event:
            </FormLabel>
            <Textarea
              id="info"
              type="info"
              borderColor="rgba(0, 0, 0, 0.5)"
              value={contactInfo.info}
              onChange={(event) => {
                setContactInfo((prevState) => ({
                  ...prevState,
                  info: event.target.value,
                }));
              }}
              variant="flushed"
              placeholder="Enter details about your event here"
              _placeholder={{ opacity: 0.5, color: "#000000" }}
            />
          </Box>

          <Button
            bgColor="#FF0A54"
            size="lg"
            height="48px"
            width="100px"
            _hover={{
              bgColor: "#C9184A",
            }}
            _active={{
              bgColor: "#C9184A",
              transform: "scale(0.9)",
            }}
            onClick={() => {
              console.log(contactInfo);
            }}
          >
            <Text color="#ffffff">Submit</Text>
          </Button>
        </FormControl>

        {contactPhoto()}
      </Box>
    </>
  );
};

export default Contact;
