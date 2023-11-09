import React from 'react'
import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  Divider,
} from '@chakra-ui/react'
import InfoBaseList from './InfoBaseList'



export default function Hero() {
  return (
    <Container maxW={'5xl'} h="100%" >
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          List{' '}
          <Text as={'span'} color={'orange.400'}>
            service
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Наш сервис - это ключ к более легкому и умному управлению списками информационных баз 1С для ваших системных администраторов. Просто, быстро и эффективно.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}>
            Начать!
          </Button>
          <Button rounded={'full'} px={6}>
            Узнать больше...
          </Button>
        </Stack>
        
      </Stack>
      <InfoBaseList q={8}/>
      <Divider />
    </Container>
    
    
  )
}