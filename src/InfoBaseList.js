import { Box, Heading, Icon, List, ListIcon, ListItem, Stack, StackDivider, Text, keyframes } from '@chakra-ui/react'
import React from 'react'
import { IoSquareOutline, IoFolderOpenOutline, IoLaptopOutline, IoServerOutline } from 'react-icons/io5'


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

// const fly = keyframes`  
//   0%   {opacity: 0; transform: translateY(0)             translateX(0) rotate(0deg) scale(1)}   
//   10%  {opacity: 1; transform: translateY(calc(-5cqh*cos(90)+(50cqw - 50% - 17.5cqw) * sin(90) )) translateX(calc((50cqw - 50% - 17.5cqw)*cos(90) - sin(90)*(-5cqh) )) rotate(720deg) scale(1)} 
//   40%  {opacity: 1; transform: translateY(calc(-5cqh*cos(90)+(50cqw - 50% - 17.5cqw) * sin(90) )) translateX(calc((50cqw - 50% - 17.5cqw)*cos(90) - sin(90)*(-5cqh) )) rotate(720deg) scale(1)} 
//   45%  {opacity: 1; transform: translateY(calc(-5cqh*cos(90)+(50cqw - 50% - 17.5cqw) * sin(90) )) translateX(calc((50cqw - 50% - 17.5cqw)*cos(90) - sin(90)*(-5cqh) )) rotate(720deg) scale(1.5)} 
//   50%  {opacity: 1; transform: translateY(calc(-5cqh*cos(90)+(50cqw - 50% - 17.5cqw) * sin(90) )) translateX(calc((50cqw - 50% - 17.5cqw)*cos(90) - sin(90)*(-5cqh) )) rotate(680deg) scale(1.5)} 
//   55%  {opacity: 1; transform: translateY(calc(-5cqh*cos(90)+(50cqw - 50% - 17.5cqw) * sin(90) )) translateX(calc((50cqw - 50% - 17.5cqw)*cos(90) - sin(90)*(-5cqh) )) rotate(720deg) scale(1.5)} 
//   60%  {opacity: 1; transform: translateY(calc(-5cqh*cos(90)+(50cqw - 50% - 17.5cqw) * sin(90) )) translateX(calc((50cqw - 50% - 17.5cqw)*cos(90) - sin(90)*(-5cqh) )) rotate(720deg) scale(1)} 
//   80%  {opacity: 1; transform: translateY(calc(-5cqh*cos(90)+(50cqw - 50% - 17.5cqw) * sin(90) )) translateX(calc((50cqw - 50% - 17.5cqw)*cos(90) - sin(90)*(-5cqh) )) rotate(720deg) scale(1)} 
//   90% {opacity: 0; transform:  translateY(0)              translateX(calc(100cqw - 100% - 35cqw)) rotate(1440deg) scale(1)} 
//   100% {opacity: 0; transform: translateY(0)             translateX(calc(100cqw - 100% - 35cqw)) rotate(1440deg) scale(1)} 
// `;

const fly = keyframes`  
  0%   {opacity: 1; transform: translateY(0px) translateX(0px)}   
  100% {opacity: 1; transform: translateY( calc( sin(45deg) * 100px + cos(45deg) * 10px ) )             translateX( calc( cos(45deg) * 100px - sin(45deg) * 100px ) )} 
`;



const orangetogreen = keyframes`
0%   {color: #DD6B20; transform: scale(1)}
90%   {color: #DD6B20; transform: scale(1)}
93% {color: #38A169; transform: scale(1.2)}
97% {color: #38A169; transform: scale(1.2)}
100% {color: #DD6B20; transform: scale(1)}
`


const flyAnimation = `${fly} infinite 5s linear`;
const orangetogreenAnimation = `${orangetogreen} infinite 5s linear`;

export default function InfoBaseList() {
    return (
        <Box sx={{ containerType: "inline-size" }} rounded={'md'}>
            <Icon
                boxSize={"5cqw"}
                as={IoFolderOpenOutline}
                animation={flyAnimation}
                position={'relative'} top={'-15cqw'} left={'15cqw'}
                color={'orange.400'} _hover={{ color: 'green.500' }}
            />
            {/* <Icon boxSize={"25cqw"} as={IoServerOutline} transition="all .25s ease" transform={"rotate(0deg)"} color={'orange.500'} />
            <Icon boxSize={"25cqw"} as={IoLaptopOutline} animation={orangetogreenAnimation}  position={'relative'} left={'calc(100cqw - 100% + 35cqw)'}  /> */}
        </Box >
    )
}
