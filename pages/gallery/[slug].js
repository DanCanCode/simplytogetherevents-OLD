import { Box, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "../../public/Home.module.css";

const GalleryView = (props) => {
  const Navbar = props.navbar;
  const Footer = props.footer;

  const router = useRouter();
  const { slug } = router.query;

  return <Box>Hello gallery view</Box>;
};

export default GalleryView;
