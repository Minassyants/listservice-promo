import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import React from 'react'


const blink = keyframes`
0% { border-color: transparent }
50% { border-color: orange; }
100% { border-color: transparent }
`

const typing = keyframes`
from { width: 0; opacity:100}
to { width: 100%; opacity:100}
`


export default function InfoBaseList({children, delay, ...props}) {

    return (<Box>
        <Text
        width={0}
        opacity={0}
        overflow={'hidden'}
        borderRight={'.15em solid orange'}
        whiteSpace={'nowrap'}
        m={'0 auto'}
        animation={`
        ${typing} 3.5s ${delay}s steps(40, end) forwards,
        ${blink} .75s ${delay}s step-end infinite
        `}>
            {children}
        </Text>
    </Box>

    )
}
