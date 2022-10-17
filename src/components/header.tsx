import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Image, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

export default function Header() {
  const { asPath } = useRouter();

  const isOnHome = asPath === "/";

  return isOnHome ? (
    <Flex
      w="100%"
      h={["3.125rem", null, "6.25rem"]}
      py={["3", null, "1.75rem"]}
      justify="center"
    >
      <Image src="/Logo.png" />
    </Flex>
  ) : (
    <Flex
      w="100%"
      h={["3.125rem", null, "6.25rem"]}
      py={["3", null, "1.75rem"]}
      px={["1.375rem", null, "6.25rem"]}
      align="center"
      justify="space-between"
    >
      <IconButton
        as="a"
        href="/"
        aria-label="Back to home"
        icon={
          <ChevronLeftIcon
            w={["16px", null, "32px"]}
            h={["16px", null, "32px"]}
          />
        }
        variant="unstyled"
        _active={{ bgColor: "gray.300" }}
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
      />
      <Image src="/Logo.png" h="100%" />
      <div></div>
    </Flex>
  );
}
