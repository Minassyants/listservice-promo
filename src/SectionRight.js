// @ts-ignore
import { Container, Flex, Heading, SimpleGrid, Stack, Text } from '@chakra-ui/react'
// @ts-ignore
import React, { forwardRef } from 'react'



// @ts-ignore
export default forwardRef(function SectionRight(props, ref) {
    // @ts-ignore
    const { children, h, t,} = props
    return (
        <Container maxW={'5xl'} py={12} minH={"50vh"} ref={ref}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    {/* <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        {n}
                    </Text> */}
                    <Heading>{h}</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        {t}
                    </Text>
                    {/* <Stack
                        spacing={4}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                        }>
                        <Feature
                            icon={<Icon as={IoAccessibilitySharp} color={'red.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Ручное управление базами'}
                        />
                        <Feature
                            icon={<Icon as={IoShuffleSharp} color={'red.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Беспорядок в списках баз'}
                        />
                        <Feature
                            icon={<Icon as={IoAlarmSharp} color={'red.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Затраты времени и ресурсов'}
                        />
                    </Stack> */}
                </Stack>
                <Flex>
                    {children}
                </Flex>
            </SimpleGrid>
        </Container>
    )
}
)