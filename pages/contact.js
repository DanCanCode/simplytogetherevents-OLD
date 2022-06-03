import {
  Box,
  Container,
  Input,
  Select,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
} from "@chakra-ui/react";
import { useState } from "react";
import styles from "../public/Home.module.css";
import { FaArrowRight } from "react-icons/fa";

const Contact = () => {
  const [input, setInput] = useState("");

  const isError = input === "";

  const handleChange = (event) => {
    setInput(event.target.value);
    console.log(input);
  };

  return (
    <Container className={styles.contact}>
      <Heading>Contact Us</Heading>

      <FormControl isRequired>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input
          id="name"
          type="name"
          value={input}
          onChange={handleChange}
          variant="flushed"
        />

        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          value={input}
          onChange={handleChange}
          variant="flushed"
        />

        <FormLabel htmlFor="phone">Phone</FormLabel>
        <Input
          id="phone"
          type="phone"
          value={input}
          onChange={handleChange}
          variant="flushed"
        />

        <FormLabel htmlFor="event">Event Type</FormLabel>
        <Select variant="flushed" placeholder="Select a service">
          <option value="eventPlanning">Event Planning</option>
          <option value="eventDesign">Event Design</option>
          <option value="luxuryPicnic">Luxury Picnic</option>
          <option value="rental">Rental</option>
        </Select>

        <FormLabel htmlFor="info">Tell us about the event:</FormLabel>
        <Textarea
          id="info"
          type="info"
          value={input}
          onChange={handleChange}
          variant="flushed"
          placeholder="Enter details about your event here"
        />

        <Button
          colorScheme="pink"
          rightIcon={<FaArrowRight />}
          variant="outline"
        >
          Submit
        </Button>
      </FormControl>
    </Container>
  );
};

export default Contact;
