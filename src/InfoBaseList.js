import { Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { IoList } from 'react-icons/io5'
import InfoBaseItem from './InfoBaseItem'

export default function InfoBaseList() {
    return (
        <Card color={useColorModeValue('orange.400', 'orange.500')} boxShadow='lg'>
            <CardHeader>
                <Stack direction={'row'} alignItems={'center'}>
                    <Icon as={IoList} boxSize={"2vw"} color={'black.500'} /><Heading >  Рабочие базы </Heading>
                </Stack>
            </CardHeader>
            <CardBody>
                <Card bg={useColorModeValue('gray.200', 'gray.800')}>
                    <CardBody>
                        <Stack spacing={4}
                            divider={
                                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                            }
                            alignItems={'flex-start'} color={useColorModeValue('orange.400', 'orange.500')}>
                            <InfoBaseItem delay={'0'}>
                                1. Розница 3.0 - Srvr="192.168.0.17" Ref="Roznica_1C"
                            </InfoBaseItem>
                            <InfoBaseItem delay={'3.5'}>
                                2. Бухгалтерия - Srvr="192.168.0.10" Ref="BUH_1C"
                            </InfoBaseItem>
                            <InfoBaseItem delay={'7'}>
                                3. УТ - Srvr="192.168.0.19" Ref="UT_WORK"
                            </InfoBaseItem>
                            <InfoBaseItem delay={'10.5'}>
                                4. ЗУП - Srvr="192.168.0.16" Ref="ZUP_1C"
                            </InfoBaseItem>
                        </Stack>
                    </CardBody>
                </Card>
            </CardBody>
        </Card>
    )
}
