import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../public/Home.module.css";

const Gallery = (props) => {
  const Navbar = props.navbar;
  const Footer = props.footer;

  const router = useRouter();
  const { slug } = router.query;

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}

      <Box className={styles.pageHeadText}>
        <Text textTransform="uppercase">Galleries</Text>
        <Text textTransform="lowercase">View photos from past events</Text>
      </Box>

      <Box className={styles.gallery}>
        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "nick-selena-engagement" },
          }}
        >
          <Image
            src="./images/nick-selena-engagement/cover.png"
            alt="Nick and Selena Engagement Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "james-wes-baptism" },
          }}
        >
          <Image
            src="./images/james-wes-baptism/cover.png"
            alt="James Wes Baptism Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "colin-jeanine-gender-reveal" },
          }}
        >
          <Image
            src="./images/colin-jeanine-gender-reveal/cover.png"
            alt="Colin and Jeanine Gallery"
          />
        </Link>

        <Image
          src="./images/giovanni_dedication/cover.png"
          alt="Giovanni's Dedication Gallery"
        />

        <Image
          src="./images/international_womens_day_gala/cover.png"
          alt="International Womens Day Gala Gallery"
        />

        <Image
          src="./images/valentines_day/cover.png"
          alt="Valentines Day Picnic Gallery"
        />

        <Image
          src="./images/omar_basma_engagement/cover.png"
          alt="Omar and Basma Engagement Gallery"
        />

        <Image
          src="./images/stephen_alyssa_engagement/cover.png"
          alt="Stephen and Alyssa Engagement Gallery"
        />

        <Image
          src="./images/thanksgiving_picnic/cover.png"
          alt="Thanksgiving Picnic Gallery"
        />

        <Image
          src="./images/gows_graduation/cover.png"
          alt="Gows Graduation Gallery"
        />

        <Image src="./images/halloween/cover.png" alt="Halloween Gallery" />

        <Image
          src="./images/denas_sweet_sixteen/cover.png"
          alt="Denas Sweet Sixteen Gallery"
        />
      </Box>

      {Footer}
    </Box>
  );
};

export default Gallery;
