import { Flex, Stack, Text } from '@chakra-ui/react'
import React from 'react'

export default function Feature({ children, icon, iconBg, ...props }) {
    return (

        <Stack direction={'row'} align={'center'} {...props}>
            <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{children}</Text>
        </Stack>
    )


}
