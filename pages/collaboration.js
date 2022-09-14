import {
  Box,
  Text,
  Input,
  Select,
  Textarea,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
} from "@chakra-ui/react";

import { useState } from "react";
import styles from "../public/Home.module.css";

const Collaboration = (props) => {
  const [collabInfo, setCollabInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const Navbar = props.navbar;
  const Footer = props.footer;

  return (
    <Box backgroundColor="#fcf7f2">
      <Box className={styles.collabBackground}>
        <Box backgroundColor="rgba(0,0,0, 0.2)">
          {Navbar}

          <Box as="form" action="" method="POST" className={styles.contact}>
            <FormControl isRequired className={styles.contactInputs}>
              <Grid>
                <Box>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <Input
                    variant="flushed"
                    type="text"
                    name="firstName"
                    required
                    onChange={(event) => {
                      setCollabInfo((prevState) => ({
                        ...prevState,
                        firstName: event.target.value,
                      }));
                    }}
                    value={collabInfo.firstName}
                  />
                </Box>

                <Box>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <Input
                    variant="flushed"
                    type="text"
                    name="lastName"
                    required
                    onChange={(event) => {
                      setCollabInfo((prevState) => ({
                        ...prevState,
                        lastName: event.target.value,
                      }));
                    }}
                    value={collabInfo.lastName}
                  />
                </Box>
              </Grid>

              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                variant="flushed"
                type="email"
                name="email"
                value={collabInfo.email}
                required
                onChange={(event) => {
                  setCollabInfo((prevState) => ({
                    ...prevState,
                    email: event.target.value,
                  }));
                }}
              />

              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Input
                name="phone"
                type="phone"
                value={collabInfo.phone}
                required
                onChange={(event) => {
                  setCollabInfo((prevState) => ({
                    ...prevState,
                    phone: event.target.value,
                  }));
                }}
                variant="flushed"
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

export default Collaboration;
