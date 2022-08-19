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
};

export default Collaboration;
