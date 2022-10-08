import Link from "next/link";
import {
  Box,
  Divider,
  Text,
  Image,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  TableCaption,
} from "@chakra-ui/react";
import styles from "../../public/Home.module.css";

const Services = (props) => {
  const Navbar = props.navbar;
  const Footer = props.footer;

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box backgroundColor="#fcf7f2">
      {Navbar}

      <Box className={styles.pageHeadings}>
        <Image src="../images/services.png" alt="Services" />
      </Box>
      <Box className={styles.serviceLinks}>
        <Text as="a" href="#eventDesign" textTransform="lowercase">
          event design
        </Text>

        <Divider
          height="14px"
          borderColor="#000000"
          borderLeftWidth={1.5}
          orientation="vertical"
        />

        <Text as="a" href="#eventPlanning" textTransform="lowercase">
          event planning
        </Text>

        <Divider
          height="14px"
          borderColor="#000000"
          borderLeftWidth={1.5}
          orientation="vertical"
        />

        <Text as="a" href="#eventCreation" textTransform="lowercase">
          event creation
        </Text>

        <Divider
          height="14px"
          borderColor="#000000"
          borderLeftWidth={1.5}
          orientation="vertical"
        />

        <Text as="a" href="#luxuryPicnics" textTransform="lowercase">
          luxury picnics
        </Text>

        <Divider
          height="14px"
          borderColor="#000000"
          borderLeftWidth={1.5}
          orientation="vertical"
        />

        <Text as="a" href="#partyRentals" textTransform="lowercase">
          party rentals
        </Text>
      </Box>

      <Box className={styles.services}>
        <Box id="eventDesign" className={styles.innerService}>
          <Box>
            <Image src="./images/james-wes-baptism/8.jpg" alt="event design" />
          </Box>

          <Box paddingLeft={20}>
            <Text className={styles.serviceHeadings}>Event Design</Text>
            <Text className={styles.serviceTexts}>
              For any event you are having, we will brainstorm together that
              vision of yours and bring it to life. This is one of the most fun
              parts of cultivating your day. We will make sure that every detail
              is executed and create an aesthetic that you’ll remember forever.
            </Text>

            <Text className={styles.serviceTexts}>
              We bring in all sorts of decor to bring your event alive. We work
              with florals, branding and stationery work, to all different sorts
              of decor you want for your event. From centerpieces, to table
              design, backdrops, lighting and more; we make sure to pay
              attention to detail and your event unique and fitted to your style
              that you’ll love.
            </Text>
          </Box>
        </Box>

        <Box id="eventPlanning" className={styles.innerServiceReverse}>
          <Box>
            <Text className={styles.serviceHeadings}>Event Planning</Text>
            <Text className={styles.serviceTexts}>
              We offer full service planning for any event you may have. From an
              entire wedding, engagement parties, gala’s, charity event’s, and
              much more. We will be here step by step to help you through the
              process of planning and cultivating your event.
            </Text>

            <Text className={styles.serviceTexts}>
              We are your go to contact for bringing in your vendors, planning a
              timeline for the day, breaking down your budget, and taking over
              any of the stress you may have as we move through the process.{" "}
            </Text>

            <Text className={styles.serviceTexts}>
              Day of Coordination is another service we offer. You may already
              have the big things handled and just need someone to take over the
              logistics and make sure everything is going according to plan. I
              bring along myself and an assistant to make sure we are with you
              throughout the day and working alongside with every vendor to make
              things go according to plan.
            </Text>
          </Box>

          <Box>
            <Image src="./images/newWedding.jpeg" alt="event planning" />
          </Box>
        </Box>

        <Box id="eventCreation" className={styles.innerServiceReverse}>
          <Box>
            <video src="./images/event_creation_vid.mp4" autoPlay loop muted />
          </Box>

          <Box paddingLeft={20}>
            <Text className={styles.serviceHeadings}>
              Event Content Creation
            </Text>
            <Text className={styles.serviceTexts}>
              After any special event, do you ever wish you could have some of
              those special moments ready for you right when the night ends?
              What we do is take your phone during the duration of your event
              and capture moments in short-videos and photos. You don’t have to
              worry about any of your guest or even Maid of Honor being
              responsible for this throughout your event and let them enjoy the
              evening with you. Now you can look at some of those special
              moments on your honeymoon and reminisce on the night even sooner.
            </Text>
            <Link href="/contact">
              <Button
                colorScheme="pink"
                _hover={{
                  transform: "scale(0.9)",
                }}
                _active={{
                  transform: "scale(0.9)",
                }}
              >
                Contact for pricing
              </Button>
            </Link>
          </Box>
        </Box>

        <Box id="luxuryPicnics" className={styles.innerService}>
          <Box paddingLeft={20}>
            <Text className={styles.serviceHeadings}>Luxury Picnics</Text>
            <Text className={styles.serviceTexts}>
              Perfect for any birthday party, bridal shower, engagement, or any
              intimate event. We offer luxury picnics for up to 2-20 people. You
              pick the location (indoor or outdoor) and we bring it to life! We
              work alongside you to create a luxury picnic to a color scheme and
              theme of your choice.
            </Text>

            <Button
              onClick={onOpen}
              colorScheme="pink"
              _hover={{
                transform: "scale(0.9)",
              }}
              _active={{
                transform: "scale(0.9)",
              }}
            >
              View Pricing
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Luxury Picnic Pricing</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text
                    fontSize={14}
                    color="rgba(0, 0, 0, .6)"
                    paddingBottom=".5em"
                  >
                    All 2 hour picnic experiences include set-up, clean-up,
                    picnic table, floor sheet, floral arrangement, table decor,
                    tableware, and a game.
                  </Text>

                  <TableContainer>
                    <Table variant="striped">
                      <TableCaption>
                        additional time: 30 min | $40, 1 hr | $75
                      </TableCaption>
                      <Thead>
                        <Tr>
                          <Th>Name</Th>
                          <Th>Number of People</Th>
                          {/* <Th>Time</Th> */}
                          <Th isNumeric>Price</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td>You & I</Td>
                          <Td>2</Td>
                          {/* <Td>2 hr</Td> */}
                          <Td isNumeric>$255</Td>
                        </Tr>

                        <Tr>
                          <Td>Proposal**</Td>
                          <Td>2</Td>
                          {/* <Td>2 hr</Td> */}
                          <Td isNumeric>$425</Td>
                        </Tr>

                        <Tr>
                          <Td>All 4 You</Td>
                          <Td>3 - 4</Td>
                          {/* <Td>2 hr</Td> */}
                          <Td isNumeric>$300</Td>
                        </Tr>

                        <Tr>
                          <Td>Let's Party</Td>
                          <Td>5 - 8</Td>
                          {/* <Td>2 hr</Td> */}
                          <Td isNumeric>$450</Td>
                        </Tr>

                        <Tr>
                          <Td>The Gathering</Td>
                          <Td>8 - 12</Td>
                          {/* <Td>2 hr</Td> */}
                          <Td isNumeric>$600</Td>
                        </Tr>

                        <Tr>
                          <Td>All Out</Td>
                          <Td>12 - 20</Td>
                          {/* <Td>2 hr</Td> */}
                          <Td isNumeric>$825</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <Text
                    fontSize={14}
                    color="rgba(0, 0, 0, .6)"
                    paddingY=".5em"
                    align="center"
                  >
                    ** Includes 5x7 photo, bouquet of flowers, chocolate covered
                    strawberries, bottle of champagne & 2 glasses (must be 21 or
                    older). Inquire for marquee MARRY ME or LOVE letters
                  </Text>
                </ModalBody>

                <ModalFooter>
                  <Button colorScheme="pink" mr={3} onClick={onClose}>
                    Close
                  </Button>
                  <Link href="/contact">
                    <Button variant="ghost" onClick={onClose}>
                      Contact Us
                    </Button>
                  </Link>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>

          <Box>
            <Image
              src="./images/thanksgiving-picnic/11.jpg"
              alt="luxury picnics"
            />
          </Box>
        </Box>

        <Box id="partyRentals" className={styles.innerService}>
          <Box>
            <Image src="./images/IMG_3322.jpeg" alt="party rentals" />
          </Box>
          <Box>
            <Text className={styles.serviceHeadings}>Party Rentals</Text>
            <Text className={styles.serviceTexts}>
              Looking for a backdrop, welcome sign, or some last minute decor to
              bring your event alive? Check out our gallery below to view
              rentals we have. No event design or planning fee is required. We
              will rent out the item to you with full delivery*, set-up*, and
              clean-up*.
            </Text>

            <Link href="/services/party-rentals">
              <Button
                colorScheme="pink"
                _hover={{
                  transform: "scale(0.9)",
                }}
                _active={{
                  transform: "scale(0.9)",
                }}
              >
                Party Rentals
              </Button>
            </Link>

            <Text paddingTop="1em" fontSize={14} color="rgba(0, 0, 0, .6)">
              *additonal fee applied after inquiry. fee based on location.
            </Text>
          </Box>
        </Box>
      </Box>

      <Box className="instagram-api">{/* <Text>Recent Posts</Text> */}</Box>

      {Footer}
    </Box>
  );
};

export default Services;
