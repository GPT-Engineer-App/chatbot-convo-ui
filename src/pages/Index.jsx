import React, { useState } from "react";
import { Box, Button, Container, Flex, Input, VStack, Text, useColorModeValue, IconButton, Heading } from "@chakra-ui/react";
import { FaPaperPlane, FaSun, FaMoon } from "react-icons/fa";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Container maxW="xl" p={5}>
      <VStack spacing={4}>
        <Flex justifyContent="space-between" w="full">
          <Heading size="md">React Chat</Heading>
          <IconButton icon={useColorModeValue(<FaMoon />, <FaSun />)} isRound={true} size="sm" alignSelf="flex-end" onClick={() => document.body.classList.toggle("chakra-ui-dark")} />
        </Flex>
        <Box w="full" h="400px" bg={bgColor} color={color} p={3} overflowY="auto" borderRadius="md" borderWidth="1px">
          <VStack spacing={3} align="stretch">
            {messages.map((message, index) => (
              <Text key={index} bg="blue.500" p={2} borderRadius="md" color="white" alignSelf="flex-end">
                {message}
              </Text>
            ))}
          </VStack>
        </Box>
        <Flex w="full">
          <Input placeholder="Type a message..." value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} flex={1} />
          <IconButton icon={<FaPaperPlane />} ml={2} onClick={handleSendMessage} aria-label="Send message" />
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;
