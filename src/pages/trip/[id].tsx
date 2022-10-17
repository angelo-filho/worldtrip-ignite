import { InfoOutlineIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";

const cardsPath = "/cards/";

const trips = [
  {
    city: "Londres",
    country: "Reino Unido",
    image: cardsPath + "london.png",
    avatar: cardsPath + "england.png",
  },
  {
    city: "Paris",
    country: "França",
    image: cardsPath + "paris.png",
    avatar: cardsPath + "france.png",
  },
  {
    city: "Roma",
    country: "Itália",
    image: cardsPath + "rome.png",
    avatar: cardsPath + "italy.png",
  },
  {
    city: "Praga",
    country: "República Tcheca",
    image: cardsPath + "prague.png",
    avatar: cardsPath + "czech.png",
  },
  {
    city: "Amsterdã",
    country: "Holanda",
    image: cardsPath + "amsterdam.png",
    avatar: cardsPath + "netherlands.png",
  },
];

export default function Trip() {
  return (
    <>
      <Flex
        maxW="1440px"
        mx="auto"
        h={[150, 250, 375, null, 500]}
        backgroundImage="/europa_banner.png"
        backgroundSize="cover"
        align={["center", null, "end"]}
        justify={["center", null, "start"]}
        pl={[null, null, "80px", "140px"]}
        pb={[null, null, "59px"]}
      >
        <Heading
          color="text.100"
          fontWeight="semibold"
          fontSize={["1.75rem", "2.5rem", "3rem"]}
        >
          Europa
        </Heading>
      </Flex>

      <Flex
        maxW="1400px"
        px={["1rem", null, "80px", null, "140px"]}
        mx="auto"
        mt={["1.5rem", null, "5rem"]}
        direction={["column", null, null, "row"]}
      >
        <Text
          color="text.900"
          fontSize={[".875rem", "1.25rem", "1.5rem"]}
          fontWeight="normal"
          textAlign="justify"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>

        <Flex
          gap={["2rem", null, "2.625rem"]}
          mt={["1rem", null, "3rem", "0"]}
          ml={[null, null, null, "4.375rem"]}
          align="center"
          justify={[null, null, "center"]}
        >
          <VStack align={["start", null, "center"]} spacing=".125rem">
            <Text
              fontWeight="semibold"
              fontSize={["1.5rem", "2.25rem", "3rem"]}
              color="highlight.600"
            >
              50
            </Text>
            <Text
              color="text.900"
              fontWeight={["medium", null, "semibold"]}
              fontSize={["1.125rem", null, "1.5rem"]}
            >
              países
            </Text>
          </VStack>
          <VStack align={["start", null, "center"]} spacing=".125rem">
            <Text
              fontWeight="semibold"
              fontSize={["1.5rem", "2.25rem", "3rem"]}
              color="highlight.600"
            >
              60
            </Text>
            <Text
              color="text.900"
              fontWeight={["medium", null, "semibold"]}
              fontSize={["1.125rem", null, "1.5rem"]}
            >
              línguas
            </Text>
          </VStack>
          <VStack align={["start", null, "center"]} spacing=".125rem">
            <Text
              fontWeight="semibold"
              fontSize={["1.5rem", "2.25rem", "3rem"]}
              color="highlight.600"
            >
              24
            </Text>
            <Text
              color="text.900"
              whiteSpace="nowrap"
              fontWeight={["medium", null, "semibold"]}
              fontSize={["1.125rem", null, "1.5rem"]}
            >
              cidades +100
              <InfoOutlineIcon
                as="span"
                w={["10px", null, "16px"]}
                h={["10px", null, "16px"]}
                ml=".3125rem"
                color="info.opacity"
              />
            </Text>
          </VStack>
        </Flex>
      </Flex>

      <Box px={["1rem", null, "5rem", "8.75rem"]} maxW="1440px" mx="auto">
        <Heading
          mt={["2rem", null, "5rem"]}
          color="text.900"
          fontWeight="medium"
          fontSize={["1.5rem", null, "2.25rem"]}
        >
          Cidades +100
        </Heading>

        <Wrap
          spacingY={["1.25rem", null, "3rem"]}
          spacingX={["0px", "2.8125rem"]}
          justify={["center", null, null, null, "start"]}
          mt={["1.25rem", null, "2.5rem"]}
          mb={["1.25rem", null, "2.25rem"]}
        >
          {trips.map(trip => {
            return (
              <WrapItem key={trip.country}>
                <Flex direction="column">
                  <Image src={trip.image} />

                  <Flex
                    px="1.5rem"
                    pt="1.125rem"
                    pb="1.5625rem"
                    align="center"
                    justify="space-between"
                    backgroundColor="white"
                    borderBottom="1px"
                    borderBottomColor="highlight.300"
                    borderLeft="1px"
                    borderLeftColor="highlight.300"
                    borderRight="1px"
                    borderRightColor="highlight.300"
                    borderBottomRadius="4px"
                  >
                    <Flex direction="column">
                      <Heading
                        mb=".75rem"
                        color="text.900"
                        fontWeight="semibold"
                        fontSize="1.25rem"
                      >
                        {trip.city}
                      </Heading>

                      <Text color="info.900">{trip.country}</Text>
                    </Flex>

                    <Image src={trip.avatar} w="30px" h="30px" />
                  </Flex>
                </Flex>
              </WrapItem>
            );
          })}
        </Wrap>
      </Box>
    </>
  );
}
