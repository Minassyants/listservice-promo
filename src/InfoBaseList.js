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

const fly = keyframes`  
  0%   {opacity: 0; transform: translateY(0)       translateX(0) rotate(0deg) scale(1)}   
  10%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(0deg) + cos(0deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(0deg) - sin(0deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  40%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(0deg) + cos(0deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(0deg) - sin(0deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  45%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(0deg) + cos(0deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(0deg) - sin(0deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  50%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(0deg) + cos(0deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(0deg) - sin(0deg) * (-5cqh) ) ) rotate(680deg)   scale(1.5)} 
  55%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(0deg) + cos(0deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(0deg) - sin(0deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  60%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(0deg) + cos(0deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(0deg) - sin(0deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  80%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(0deg) + cos(0deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(0deg) - sin(0deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  90%  {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(0deg)) )       translateX(calc( (100cqw - 100% - 35cqw)*cos(0deg)     ) )    rotate(1440deg)  scale(1)} 
  100% {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(0deg)) )       translateX(calc( (100cqw - 100% - 35cqw)*cos(0deg)     ) )    rotate(1440deg)  scale(1)} 
`;

const fly1 = keyframes`  
  0%   {opacity: 0; transform: translateY(0)       translateX(0) rotate(0deg) scale(1)}   
  10%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(90deg) + cos(90deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(90deg) - sin(90deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  40%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(90deg) + cos(90deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(90deg) - sin(90deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  45%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(90deg) + cos(90deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(90deg) - sin(90deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  50%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(90deg) + cos(90deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(90deg) - sin(90deg) * (-5cqh) ) ) rotate(680deg)   scale(1.5)} 
  55%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(90deg) + cos(90deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(90deg) - sin(90deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  60%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(90deg) + cos(90deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(90deg) - sin(90deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  80%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(90deg) + cos(90deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(90deg) - sin(90deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  90%  {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(90deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(90deg)     ) )    rotate(1440deg)  scale(1)} 
  100% {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(90deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(90deg)     ) )    rotate(1440deg)  scale(1)} 
`;


const fly2 = keyframes`  
  0%   {opacity: 0; transform: translateY(0)       translateX(0) rotate(0deg) scale(1)}   
  10%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(45deg) + cos(45deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(45deg) - sin(45deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  40%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(45deg) + cos(45deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(45deg) - sin(45deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  45%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(45deg) + cos(45deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(45deg) - sin(45deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  50%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(45deg) + cos(45deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(45deg) - sin(45deg) * (-5cqh) ) ) rotate(680deg)   scale(1.5)} 
  55%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(45deg) + cos(45deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(45deg) - sin(45deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  60%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(45deg) + cos(45deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(45deg) - sin(45deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  80%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(45deg) + cos(45deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(45deg) - sin(45deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  90%  {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(45deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(45deg)     ) )    rotate(1440deg)  scale(1)} 
  100% {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(45deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(45deg)     ) )    rotate(1440deg)  scale(1)} 
`;

const fly3 = keyframes`  
  0%   {opacity: 0; transform: translateY(0)       translateX(0) rotate(0deg) scale(1)}   
  10%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(135deg) + cos(135deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(135deg) - sin(135deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  40%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(135deg) + cos(135deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(135deg) - sin(135deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  45%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(135deg) + cos(135deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(135deg) - sin(135deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  50%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(135deg) + cos(135deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(135deg) - sin(135deg) * (-5cqh) ) ) rotate(680deg)   scale(1.5)} 
  55%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(135deg) + cos(135deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(135deg) - sin(135deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  60%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(135deg) + cos(135deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(135deg) - sin(135deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  80%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(135deg) + cos(135deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(135deg) - sin(135deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  90%  {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(135deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(135deg)     ) )    rotate(1440deg)  scale(1)} 
  100% {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(135deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(135deg)     ) )    rotate(1440deg)  scale(1)} 
`;

const fly4 = keyframes`  
  0%   {opacity: 0; transform: translateY(0)       translateX(0) rotate(0deg) scale(1)}   
  10%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(180deg) + cos(180deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(180deg) - sin(180deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  40%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(180deg) + cos(180deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(180deg) - sin(180deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  45%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(180deg) + cos(180deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(180deg) - sin(180deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  50%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(180deg) + cos(180deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(180deg) - sin(180deg) * (-5cqh) ) ) rotate(680deg)   scale(1.5)} 
  55%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(180deg) + cos(180deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(180deg) - sin(180deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  60%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(180deg) + cos(180deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(180deg) - sin(180deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  80%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(180deg) + cos(180deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(180deg) - sin(180deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  90%  {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(180deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(180deg)     ) )    rotate(1440deg)  scale(1)} 
  100% {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(180deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(180deg)     ) )    rotate(1440deg)  scale(1)} 
`;

const fly5 = keyframes`  
  0%   {opacity: 0; transform: translateY(0)       translateX(0) rotate(0deg) scale(1)}   
  10%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(225deg) + cos(225deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(225deg) - sin(225deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  40%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(225deg) + cos(225deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(225deg) - sin(225deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  45%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(225deg) + cos(225deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(225deg) - sin(225deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  50%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(225deg) + cos(225deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(225deg) - sin(225deg) * (-5cqh) ) ) rotate(680deg)   scale(1.5)} 
  55%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(225deg) + cos(225deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(225deg) - sin(225deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  60%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(225deg) + cos(225deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(225deg) - sin(225deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  80%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(225deg) + cos(225deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(225deg) - sin(225deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  90%  {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(225deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(225deg)     ) )    rotate(1440deg)  scale(1)} 
  100% {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(225deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(225deg)     ) )    rotate(1440deg)  scale(1)} 
`;

const fly6 = keyframes`  
  0%   {opacity: 0; transform: translateY(0)       translateX(0) rotate(0deg) scale(1)}   
  10%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(270deg) + cos(270deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(270deg) - sin(270deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  40%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(270deg) + cos(270deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(270deg) - sin(270deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  45%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(270deg) + cos(270deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(270deg) - sin(270deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  50%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(270deg) + cos(270deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(270deg) - sin(270deg) * (-5cqh) ) ) rotate(680deg)   scale(1.5)} 
  55%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(270deg) + cos(270deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(270deg) - sin(270deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  60%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(270deg) + cos(270deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(270deg) - sin(270deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  80%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(270deg) + cos(270deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(270deg) - sin(270deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  90%  {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(270deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(270deg)     ) )    rotate(1440deg)  scale(1)} 
  100% {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(270deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(270deg)     ) )    rotate(1440deg)  scale(1)} 
`;

const fly7 = keyframes`  
  0%   {opacity: 0; transform: translateY(0)       translateX(0) rotate(0deg) scale(1)}   
  10%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(315deg) + cos(315deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(315deg) - sin(315deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  40%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(315deg) + cos(315deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(315deg) - sin(315deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  45%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(315deg) + cos(315deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(315deg) - sin(315deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  50%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(315deg) + cos(315deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(315deg) - sin(315deg) * (-5cqh) ) ) rotate(680deg)   scale(1.5)} 
  55%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(315deg) + cos(315deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(315deg) - sin(315deg) * (-5cqh) ) ) rotate(720deg)   scale(1.5)} 
  60%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(315deg) + cos(315deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(315deg) - sin(315deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  80%  {opacity: 1; transform: translateY(calc( (50cqw - 50% - 17.5cqw)*sin(315deg) + cos(315deg) * (-5cqh) ) )       translateX(calc( (50cqw - 50% - 17.5cqw)*cos(315deg) - sin(315deg) * (-5cqh) ) ) rotate(720deg)   scale(1)} 
  90%  {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(315deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(315deg)     ) )    rotate(1440deg)  scale(1)} 
  100% {opacity: 0; transform: translateY(calc( (100cqw - 100% - 35cqw)*sin(315deg)) )                               translateX(calc( (100cqw - 100% - 35cqw)*cos(315deg)     ) )    rotate(1440deg)  scale(1)} 
`;

const flyAnimation = `${fly} infinite   5s  linear`;
const fly1Animation = `${fly1} infinite 5s 1s linear`;
const fly2Animation = `${fly2} infinite 5s 2s linear`;
const fly3Animation = `${fly3} infinite 5s 3s linear`;
const fly4Animation = `${fly4} infinite 5s 4s linear`;
const fly5Animation = `${fly5} infinite 5s 5s linear`;
const fly6Animation = `${fly6} infinite 5s 6s linear`;
const fly7Animation = `${fly7} infinite 5s 7s linear`;



const orangetogreen = keyframes`
0%   {color: #DD6B20; transform: scale(1)}
90%   {color: #DD6B20; transform: scale(1)}
93% {color: #38A169; transform: scale(1.2)}
97% {color: #38A169; transform: scale(1.2)}
100% {color: #DD6B20; transform: scale(1)}
`



const orangetogreenAnimation = `${orangetogreen} infinite 5s linear`;

export default function InfoBaseList() {
    return (
        <Box sx={{ containerType: "inline-size" }} rounded={'md'}>
            <Icon
                boxSize={"5cqw"}
                as={IoFolderOpenOutline}
                animation={flyAnimation}
                position={'absolute'} top={'-15cqw'} left={'15cqw'}
                color={'orange.400'} _hover={{ color: 'green.500' }}
            />
            <Icon
                boxSize={"5cqw"}
                as={IoFolderOpenOutline}
                animation={fly1Animation}
                position={'absolute'} top={'-15cqw'} left={'15cqw'}
                color={'orange.400'} _hover={{ color: 'green.500' }}
            />
            <Icon
                boxSize={"5cqw"}
                as={IoFolderOpenOutline}
                animation={fly2Animation}
                position={'absolute'} top={'-15cqw'} left={'15cqw'}
                color={'orange.400'} _hover={{ color: 'green.500' }}
            />
            <Icon
                boxSize={"5cqw"}
                as={IoFolderOpenOutline}
                animation={fly3Animation}
                position={'absolute'} top={'-15cqw'} left={'15cqw'}
                color={'orange.400'} _hover={{ color: 'green.500' }}
            />
            <Icon
                boxSize={"5cqw"}
                as={IoFolderOpenOutline}
                animation={fly4Animation}
                position={'absolute'} top={'-15cqw'} left={'15cqw'}
                color={'orange.400'} _hover={{ color: 'green.500' }}
            />
            <Icon
                boxSize={"5cqw"}
                as={IoFolderOpenOutline}
                animation={fly5Animation}
                position={'absolute'} top={'-15cqw'} left={'15cqw'}
                color={'orange.400'} _hover={{ color: 'green.500' }}
            />
            <Icon
                boxSize={"5cqw"}
                as={IoFolderOpenOutline}
                animation={fly6Animation}
                position={'absolute'} top={'-15cqw'} left={'15cqw'}
                color={'orange.400'} _hover={{ color: 'green.500' }}
            />
            <Icon
                boxSize={"5cqw"}
                as={IoFolderOpenOutline}
                animation={fly7Animation}
                position={'absolute'} top={'-15cqw'} left={'15cqw'}
                color={'orange.400'} _hover={{ color: 'green.500' }}
            />
            {/* <Icon boxSize={"25cqw"} as={IoServerOutline} transition="all .25s ease" transform={"rotate(0deg)"} color={'orange.500'} />
            <Icon boxSize={"25cqw"} as={IoLaptopOutline} animation={orangetogreenAnimation}  position={'relative'} left={'calc(100cqw - 100% + 35cqw)'}  /> */}
        </Box >
    )
}
