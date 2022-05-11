import { Container } from '@chakra-ui/react';
import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';
import { useState } from 'react';
import { Select } from '@chakra-ui/react'



const customerDetail = () => {

    const [showPassword, setShowPassword] = useState(false);
    return (

        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={'gray.50'}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'} textAlign={'center'}>
                        Customer Detail
                    </Heading>

                </Stack>
                <Box
                    rounded={'lg'}
                    bg={'white'}
                    boxShadow={'lg'}
                    p={8}>
                    <Stack spacing={4}>
                        <HStack>
                            <Box>
                                <FormControl id="firstName" isRequired>
                                    <FormLabel>First Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl id="lastName">
                                    <FormLabel>Last Name</FormLabel>
                                    <Input type="text" />
                                </FormControl>
                            </Box>
                        </HStack>
                        <HStack>
                            <Box>
                                <FormControl>
                                    <FormLabel htmlFor='country'>Gender</FormLabel>
                                    <Select  id='country' placeholder='Select Gender'>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <FormControl>
                                    <FormLabel htmlFor='age'>Age</FormLabel>
                                    <NumberInput max={200} min={0}>
                                        <NumberInputField id='age' />
                                        <NumberInputStepper>
                                            <NumberIncrementStepper />
                                            <NumberDecrementStepper />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </FormControl>
                            </Box>
                        </HStack>
                        <FormControl id="email" isRequired>
                            <FormLabel>Address</FormLabel>
                            <Input type="email" />
                        </FormControl>

                        <Stack spacing={10} pt={2}>
                            <Button
                                loadingText="Submitting"
                                size="lg"
                                bg={'blue.400'}
                                color={'white'}
                                _hover={{
                                    bg: 'blue.500',
                                }}>
                               Submit
                            </Button>
                        </Stack>
                       
                    </Stack>
                </Box>
            </Stack>
        </Flex>


    );
};

export default customerDetail;