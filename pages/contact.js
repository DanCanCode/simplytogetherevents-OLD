import {
  Box,
  Text,
  Input,
  useToast,
  Select,
  Textarea,
  Button,
  FormControl,
  FormLabel,
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
  const Footer = props.footer;

  return (
    <Box backgroundColor="#fcf7f2">
      <Box className={styles.contactBackground}>
        <Box backgroundColor="rgba(0,0,0, 0.2)">
          {Navbar}

          <Box className={styles.beforeContact}>
            <Text letterSpacing={2}>LET'S GET PLANNING!</Text>

            <Button
              as="a"
              textTransform="lowercase"
              href="https://calendly.com/simplytogetherevents/30min?month=2022-06"
              colorScheme="messenger"
              _hover={{
                transform: "scale(0.9)",
              }}
              _active={{
                transform: "scale(0.9)",
              }}
            >
              request appointment
            </Button>
          </Box>

          <Box
            as="form"
            action="https://formsubmit.co/simplytogetherevents@gmail.com"
            method="POST"
            className={styles.contact}
          >
            <FormControl isRequired className={styles.contactInputs}>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                variant="flushed"
                type="text"
                name="name"
                required
                onChange={(event) => {
                  setContactInfo((prevState) => ({
                    ...prevState,
                    name: event.target.value,
                  }));
                }}
                value={contactInfo.name}
              />

              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                variant="flushed"
                type="email"
                name="email"
                value={contactInfo.email}
                required
                onChange={(event) => {
                  setContactInfo((prevState) => ({
                    ...prevState,
                    email: event.target.value,
                  }));
                }}
              />

              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input
                name="phone"
                type="phone"
                value={contactInfo.phone}
                required
                onChange={(event) => {
                  setContactInfo((prevState) => ({
                    ...prevState,
                    phone: event.target.value,
                  }));
                }}
                variant="flushed"
              />

              <FormLabel htmlFor="event">Event Type</FormLabel>
              <Select
                variant="flushed"
                name="event_type"
                placeholder="Select a service"
                required
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
                <option value="Event Content Creation">
                  Event Content Creation
                </option>
              </Select>

              <FormLabel htmlFor="info">Tell us about the event:</FormLabel>
              <Textarea
                type="info"
                name="message"
                value={contactInfo.info}
                required
                onChange={(event) => {
                  setContactInfo((prevState) => ({
                    ...prevState,
                    info: event.target.value,
                  }));
                }}
                variant="flushed"
                placeholder="Enter details about your event here"
                _placeholder={{ color: "#ffffff" }}
              />

              <Button
                type="submit"
                colorScheme="pink"
                size="lg"
                _hover={{
                  transform: "scale(0.9)",
                }}
                _active={{
                  transform: "scale(0.9)",
                }}
              >
                Submit
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Box>

      {Footer}
    </Box>
  );
};

export default Contact;
