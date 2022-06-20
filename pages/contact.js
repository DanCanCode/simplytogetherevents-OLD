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
    status: "",
  });

  const Navbar = props.navbar;
  const Footer = props.footer;

  const toast = useToast();

  const handleSubmit = () => {
    if (contactInfo.name.length) {
      console.log("success");
      setContactInfo((prevState) => ({
        ...prevState,
        status: "success",
      }));

      toast({
        title: "Sent",
        description: "Thank you for your interest!",
        position: "top",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } else {
      setContactInfo((prevState) => ({
        ...prevState,
        status: "error",
      }));

      toast({
        title: "Error",
        description: "Make sure all fields are filled out.",
        position: "top",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box backgroundColor="#fcf7f2">
      <Box className={styles.contactBackground}>
        <Box backgroundColor="rgba(0,0,0, 0.4)">
          {Navbar}

          <Box className={styles.beforeContact}>
            <Text letterSpacing={2}>LET'S GET PLANNING!</Text>

            <Button
              colorScheme="messenger"
              _active={{
                transform: "scale(0.9)",
              }}
            >
              request appointment
            </Button>
          </Box>

          <Box className={styles.contact}>
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

              <Box>
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

              <Box>
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

              <Box>
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

              <Box>
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
                  _placeholder={{ color: "#ffffff" }}
                />
              </Box>

              <Button
                variant="outline"
                size="lg"
                _active={{
                  transform: "scale(0.9)",
                }}
                onClick={() => {
                  handleSubmit();
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
