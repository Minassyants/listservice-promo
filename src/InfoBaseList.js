// @ts-nocheck
import { Box, Icon, keyframes } from '@chakra-ui/react'
import React from 'react'
import { IoFolderOpenOutline, IoLaptopOutline, IoServerOutline } from 'react-icons/io5'


// const fly = keyframes`  
//   0%   {opacity: 0; transform: translateY(0)             translateX(0) rotate(0deg) scale(1)}   
//   10%  {opacity: 1; transform: translateY(calc(-5cqh)) translateX(calc(50cqw - 50% - 17.5cqw)) rotate(720deg) scale(1)} 
//   40%  {opacity: 1; transform: translateY(calc(-5cqh)) translateX(calc(50cqw - 50% - 17.5cqw)) rotate(720deg) scale(1)} 
//   45%  {opacity: 1; transform: translateY(calc(-5cqh)) translateX(calc(50cqw - 50% - 17.5cqw)) rotate(720deg) scale(1.5)} 
//   50%  {opacity: 1; transform: translateY(calc(-5cqh)) translateX(calc(50cqw - 50% - 17.5cqw)) rotate(680deg) scale(1.5)} 
//   55%  {opacity: 1; transform: translateY(calc(-5cqh)) translateX(calc(50cqw - 50% - 17.5cqw)) rotate(720deg) scale(1.5)} 
//   60%  {opacity: 1; transform: translateY(calc(-5cqh)) translateX(calc(50cqw - 50% - 17.5cqw)) rotate(720deg) scale(1)} 
//   80%  {opacity: 1; transform: translateY(calc(-5cqh)) translateX(calc(50cqw - 50% - 17.5cqw)) rotate(720deg) scale(1)} 
//   90% {opacity: 0; transform:  translateY(0)              translateX(calc(100cqw - 100% - 35cqw)) rotate(1440deg) scale(1)} 
//   100% {opacity: 0; transform: translateY(0)             translateX(calc(100cqw - 100% - 35cqw)) rotate(1440deg) scale(1)} 
// `;




// const getFlyKeyframes = (x, y, a) => keyframes`  
//   0%   {opacity: 0; transform: translateY(0)                                                      translateX(0)                                                rotate(0deg)     scale(1)}   
//   10%  {opacity: 1; transform: translateY(calc( (${x}/2)*sin(${a}) + cos(${a}) * (${y}) ) )       translateX(calc( (${x}/2)*cos(${a}) - sin(${a}) * (${y}) ) ) rotate(720deg)   scale(1)} 
//   40%  {opacity: 1; transform: translateY(calc( (${x}/2)*sin(${a}) + cos(${a}) * (${y}) ) )       translateX(calc( (${x}/2)*cos(${a}) - sin(${a}) * (${y}) ) ) rotate(720deg)   scale(1)} 
//   45%  {opacity: 1; transform: translateY(calc( (${x}/2)*sin(${a}) + cos(${a}) * (${y}) ) )       translateX(calc( (${x}/2)*cos(${a}) - sin(${a}) * (${y}) ) ) rotate(720deg)   scale(1.5)} 
//   50%  {opacity: 1; transform: translateY(calc( (${x}/2)*sin(${a}) + cos(${a}) * (${y}) ) )       translateX(calc( (${x}/2)*cos(${a}) - sin(${a}) * (${y}) ) ) rotate(680deg)   scale(1.5)} 
//   55%  {opacity: 1; transform: translateY(calc( (${x}/2)*sin(${a}) + cos(${a}) * (${y}) ) )       translateX(calc( (${x}/2)*cos(${a}) - sin(${a}) * (${y}) ) ) rotate(720deg)   scale(1.5)} 
//   60%  {opacity: 1; transform: translateY(calc( (${x}/2)*sin(${a}) + cos(${a}) * (${y}) ) )       translateX(calc( (${x}/2)*cos(${a}) - sin(${a}) * (${y}) ) ) rotate(720deg)   scale(1)} 
//   80%  {opacity: 1; transform: translateY(calc( (${x}/2)*sin(${a}) + cos(${a}) * (${y}) ) )       translateX(calc( (${x}/2)*cos(${a}) - sin(${a}) * (${y}) ) ) rotate(720deg)   scale(1)} 
//   90%  {opacity: 0; transform: translateY(calc( (${x})*sin(${a})) )                               translateX(calc( (${x})*cos(${a})     ) )                    rotate(1440deg)  scale(1)} 
//   100% {opacity: 0; transform: translateY(calc( (${x})*sin(${a})) )                               translateX(calc( (${x})*cos(${a})     ) )                    rotate(1440deg)  scale(1)} 
// `;

const getFlyKeyframes = (x, y, a) => keyframes`  
  0%   {opacity: 0; transform: translateY(0)                                                      translateX(0)                                                rotate(0deg)     scale(1)}   
  15%  {opacity: 1; transform: translateY(calc( (${x}/2)*sin(${a}) + cos(${a}) * (${y}) ) )       translateX(calc( (${x}/2)*cos(${a}) - sin(${a}) * (${y}) ) ) rotate(720deg)   scale(1)} 
 
  30%  {opacity: 0; transform: translateY(calc( (${x})*sin(${a})) )                               translateX(calc( (${x})*cos(${a})     ) )                    rotate(1440deg)  scale(1)} 
  100% {opacity: 0; transform: translateY(calc( (${x})*sin(${a})) )                               translateX(calc( (${x})*cos(${a})     ) )                    rotate(1440deg)  scale(1)} 
`;



const orangetogreen = keyframes`
0%   {color: #DD6B20; transform: scale(1)}
30%   {color: #DD6B20; transform: scale(1)}
33% {color: #38A169; transform: scale(1.2)}
37% {color: #38A169; transform: scale(1.2)}
40%   {color: #DD6B20; transform: scale(1)}
100% {color: #DD6B20; transform: scale(1)}
`


export default function InfoBaseList({ q, ...props }) {

    const flyAnimation = []
    const glowAnimation = []
    const angles = []
    let a = 0;
    for (let i = 1; i <= q; i++) {
        flyAnimation.push(`${getFlyKeyframes('(25cqw)', '-5cqh', a + 'deg')} infinite 8s ${i - 1}s linear`)
        glowAnimation.push(`${orangetogreen} infinite 8s ${i - 1}s linear`)
        angles.push(a)
        a = 360 / q * i;

    }
    console.log(angles)
    const folders = flyAnimation.map(fly =>
        <Icon
            boxSize={"5cqw"}
            as={IoFolderOpenOutline}
            animation={fly}
            opacity={0}
            position={'absolute'} top={'calc(50cqh - 2.5cqw)'} left={'calc(50cqw - 2.5cqw)'}
            color={'orange.400'} _hover={{ color: 'green.500' }}
        />
    )
    angles.reverse()
    const pc = glowAnimation.map(glow => {
        var angle = angles.pop()
        return <Icon boxSize={"10cqw"} as={IoLaptopOutline} animation={glow} position={'absolute'} left={`calc(50cqw - 5cqw + (25cqw * cos(${angle}deg)))`} top={`calc(50cqh - 5cqw + (25cqw * sin(${angle}deg)))`} color={'orange.400'} />
    }
    )

    return (
        <Box>
            <Box  rounded={'md'} >
                {folders}
                <Icon boxSize={"10cqw"} as={IoServerOutline} transition="all 0.25s ease" transform={"rotate(0deg)"} color={'orange.500'}  position={'absolute'} top={'calc(50cqh - 5cqw)'} left={'calc(50cqw - 5cqw)'}  />
                {pc}
            </Box >
        </Box>
    )
}
