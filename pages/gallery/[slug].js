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

  const partial = Math.round(items / 3);

  const firstColumn = photoArr.slice(0, partial);
  const secondColumn = photoArr.slice(partial, partial + partial);
  const thirdColumn = photoArr.slice(partial + partial);

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}

      <Box className={styles.singleGalleryHeading}>
        <Image src={`../images/${slug}/heading.png`} alt={`${slug}`} />
      </Box>

      <Box className={styles.singleGallery}>
        <Box>
          {firstColumn.map((item) => {
            return item;
          })}
        </Box>

        <Box>
          {secondColumn.map((item) => {
            return item;
          })}
        </Box>

        <Box>
          {thirdColumn.map((item) => {
            return item;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default GalleryView;
