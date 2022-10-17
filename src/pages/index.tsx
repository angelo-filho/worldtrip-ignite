import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useBreakpointValue,
  useMediaQuery,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import NextLink from "next/link";

const travelTypes = [
  {
    image: "/travels_types/cocktail.svg",
    text: "vida nortuna",
  },
  {
    image: "/travels_types/surf.svg",
    text: "praia",
  },
  {
    image: "/travels_types/building.svg",
    text: "moderno",
  },
  {
    image: "/travels_types/museum.svg",
    text: "clássico",
  },
  {
    image: "/travels_types/earth.svg",
    text: "e mais...",
  },
];

export default function Home() {
  const [airplaneShow] = useMediaQuery(["(min-width: 1440px)"]);

  const isMobile = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <>
      <Box maxW={[null, null, "1440px"]} mx={[null, null, "auto"]}>
        <Flex
          align="center"
          justifyContent="space-between"
          px={["1rem", null, "140px"]}
          pt={["1.75rem", null, "5rem"]}
          pb={["1.75rem", null, "4.375rem"]}
          bgImage="/hero_background.png"
          bgSize="cover"
          position="relative"
        >
          <Box>
            <Heading
              color="white"
              fontWeight="medium"
              fontSize={["1.25rem", null, "2.25rem"]}
              mb="2"
            >
              5 Continentes,
              <br /> infinitas possibilidades.
            </Heading>

            <Text
              color="info.100"
              fontWeight="normal"
              fontSize={[".875rem", null, "1.25rem"]}
              pr={["1", null, null, null, "30rem"]}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.{" "}
            </Text>
          </Box>

          {airplaneShow && (
            <Image
              src="/airplane.svg"
              ml="200px"
              position="absolute"
              right="140px"
              bottom="-33px"
            />
          )}
        </Flex>
      </Box>

      <Flex
        flexDir="column"
        maxW={[null, null, 1440]}
        mx={[null, null, "auto"]}
        align="center"
        pt={["2.25rem", null, "7.125rem"]}
        pb="1.25rem"
      >
        <Wrap
          width="100%"
          px={["2.4375rem", null, "140px"]}
          color="text.900"
          fontWeight="medium"
          fontSize="1.125rem"
          mb={["2.25rem", null, "5rem"]}
          justify={"center"}
          spacing={["4rem", null, "130px"]}
        >
          {travelTypes.map(travel => (
            <WrapItem key={travel.text}>
              <Flex align="center" direction={["row", null, "column"]}>
                {isMobile ? (
                  <Image src="/list_circle.png" w="8px" h="8px" mr="2" />
                ) : (
                  <Image src={travel.image} mb="24px" />
                )}
                <Text color="text.900" fontSize={["1.125rem", null, "1.5rem"]}>
                  {travel.text}
                </Text>
              </Flex>
            </WrapItem>
          ))}
        </Wrap>

        <Divider
          w={["60px", "90px"]}
          mb={["1.5rem", null, "3.25rem"]}
          borderBottomColor="text.900"
          opacity={1}
        />

        <Heading
          mb={["1.25rem", null, "3.25rem"]}
          fontWeight="medium"
          fontSize={["1.25rem", null, "2.25rem"]}
          textAlign="center"
          color="text.900"
        >
          Vamos nessa?
          <br /> Então escolha seu continente
        </Heading>

        <Box
          mb={["1.5rem", null, "2.5rem"]}
          w="100%"
          px={[null, null, "100px"]}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
            navigation
            pagination={{ clickable: true }}
          >
            {[0, 1, 2, 3, 4].map(i => (
              <SwiperSlide key={i}>
                <NextLink href="/trip/europe">
                  <Link>
                    <Center bgImage="/europe.png" h={[250, null, 450]}>
                      <VStack spacing={[".75rem", "1rem"]} pt="2rem">
                        <Heading
                          color="text.100"
                          fontWeight="bold"
                          fontSize={["1.5rem", null, "3rem"]}
                        >
                          Europa
                        </Heading>
                        <Text
                          color="info.100"
                          fontWeight="bold"
                          fontSize={[".875rem", null, "1.5rem"]}
                        >
                          O continente mais antigo.
                        </Text>
                      </VStack>
                    </Center>
                  </Link>
                </NextLink>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Flex>
    </>
  );
}
