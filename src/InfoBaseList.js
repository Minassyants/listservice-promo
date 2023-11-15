import { Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { IoList } from 'react-icons/io5'
import InfoBaseItem from './InfoBaseItem'

export default function InfoBaseList() {
    return (
        <Card color={useColorModeValue('orange.400', 'orange.500')} boxShadow='lg'>
            <CardHeader>
                <Stack direction={'row'} alignItems={'center'}>
                    <Icon as={IoList} boxSize={"2.25rem"} color={'black.500'} /><Heading >  Рабочие базы </Heading>
                </Stack>
            </CardHeader>
            <CardBody>
                <Card bg={useColorModeValue('gray.200', 'gray.800')} pr={4}>
                    <CardBody>
                        <Stack spacing={4}
                            divider={
                                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                            }
                            alignItems={'flex-start'} color={useColorModeValue('orange.400', 'orange.500')}>
                            <InfoBaseItem delay={'0'}>
                                1.Srvr="192.168.0.2" Ref="Roznica_1C"
                            </InfoBaseItem>
                            <InfoBaseItem delay={'3.5'}>
                                2.Srvr="192.168.0.10" Ref="BUH_1C"
                            </InfoBaseItem>
                            <InfoBaseItem delay={'7'}>
                                3.Srvr="192.168.0.19" Ref="UT_1C"
                            </InfoBaseItem>
                            <InfoBaseItem delay={'10.5'}>
                                4.Srvr="192.168.0.16" Ref="ZUP_1C"
                            </InfoBaseItem>
                        </Stack>
                    </CardBody>
                </Card>
            </CardBody>
        </Card>
    )
}
