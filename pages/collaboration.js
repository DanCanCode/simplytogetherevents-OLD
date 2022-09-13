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

const Collaboration = (props) => {
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
      <Box className={styles.collabBackground}>
        <Box backgroundColor="rgba(0,0,0, 0.2)">{Navbar}</Box>
      </Box>
      {Footer}
    </Box>
  );
};

export default Collaboration;
