import { Avatar, Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

// const avatarSrc = "https://www.google.com/url?sa=i&url=https%3A%2F%2F2ndskiesforex.com%2Ftrading-strategies%2Ftrading-psychology-are-you-over-trading-how-do-we-define-it%2F&psig=AOvVaw3asXMT1ZVo4OezOZA2aaQK&ust=1715184947897000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCpm__3-4UDFQAAAAAdAAAAABAE";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading app in India, we provide our guidance
            at a very low price.
          </Text>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]}  />
          <Text>Neeraj Yadav</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;