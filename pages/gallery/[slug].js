import { Box, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import styles from "../../public/Home.module.css";

const GalleryView = (props) => {
  const Navbar = props.navbar;
  const Footer = props.footer;

  const router = useRouter();
  const { slug, items } = router.query;
  const photoArr = [];

  for (let i = 1; i <= items; i++) {
    photoArr.push(
      <Image
        src={`../images/${slug}/${i}.jpg`}
        alt={`${slug} photo ${i}`}
        key={i}
      />
    );
  }

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}
      <Box className={styles.singleGallery}>
        {photoArr.map((item) => {
          return item;
        })}
      </Box>
    </Box>
  );
};

export default GalleryView;
