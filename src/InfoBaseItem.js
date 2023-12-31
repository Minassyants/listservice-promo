import { Box, Text } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'


const blink = keyframes`
0% { border-color: transparent }
50% { border-color: orange; }
100% { border-color: transparent }
`

const typing = keyframes`
from { width: 0; opacity:100; }
to { width: 100%; opacity:100;}
`


export default function InfoBaseItem({ children, delay, ...props }) {

    const [animate, setAnimate] = useState('')
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            setAnimate(`
            ${typing} 3.5s ${delay}s steps(40, end) forwards,
            ${blink} .75s ${delay}s step-end 5 forwards
            `)
        }

    }, [delay, inView])

    return (<Box>
        <Text
            fontWeight={600}
            fontSize={'[null,sm,sm,sm,lg]'}
            
            ref={ref}
            width={0}
            opacity={0}
            overflow={'hidden'}
            borderRight={'.15em solid orange'}
            whiteSpace={'nowrap'}
            
            animation={animate}>
            {children}
        </Text>
    </Box>

    )
}
