import { Box, Text, Image } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../public/Home.module.css";

const Gallery = (props) => {
  const Navbar = props.navbar;
  const Footer = props.footer;

  const router = useRouter();
  const { slug, items } = router.query;

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}

      <Box className={styles.pageHeadings}>
        <Image src="../images/galleries.png" alt="Galleries" />
        <Text textTransform="lowercase">View photos from past events</Text>
      </Box>

      <Box className={styles.gallery}>
        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "nick-selena-engagement", items: 17 },
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
            query: { slug: "james-wes-baptism", items: 17 },
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
            query: { slug: "colin-jeanine-gender-reveal", items: 13 },
          }}
        >
          <Image
            src="./images/colin-jeanine-gender-reveal/cover.png"
            alt="Colin and Jeanine Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "giovannis-dedication", items: 12 },
          }}
        >
          <Image
            src="./images/giovannis-dedication/cover.png"
            alt="Giovanni's Dedication Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "international-womens-day-gala", items: 22 },
          }}
        >
          <Image
            src="./images/international-womens-day-gala/cover.png"
            alt="International Womens Day Gala Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "valentines-day-picnic", items: 9 },
          }}
        >
          <Image
            src="./images/valentines-day-picnic/cover.png"
            alt="Valentines Day Picnic Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "omar-basma-engagement", items: 9 },
          }}
        >
          <Image
            src="./images/omar-basma-engagement/cover.png"
            alt="Omar and Basma Engagement Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "stephen-alyssa-engagement", items: 7 },
          }}
        >
          <Image
            src="./images/stephen-alyssa-engagement/cover.png"
            alt="Stephen and Alyssa Engagement Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "thanksgiving-picnic", items: 15 },
          }}
        >
          <Image
            src="./images/thanksgiving-picnic/cover.png"
            alt="Thanksgiving Picnic Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "gows-graduation", items: 7 },
          }}
        >
          <Image
            src="./images/gows-graduation/cover.png"
            alt="Gows Graduation Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "halloween-party", items: 3 },
          }}
        >
          <Image
            src="./images/halloween-party/cover.png"
            alt="Halloween Gallery"
          />
        </Link>

        <Link
          href={{
            pathname: "/gallery/[slug]",
            query: { slug: "denas-sweet-sixteen", items: 3 },
          }}
        >
          <Image
            src="./images/denas-sweet-sixteen/cover.png"
            alt="Denas Sweet Sixteen Gallery"
          />
        </Link>
      </Box>

      {Footer}
    </Box>
  );
};

export default Gallery;
