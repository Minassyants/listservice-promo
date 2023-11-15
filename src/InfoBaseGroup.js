import { Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, keyframes, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoFolderOpenOutline, IoList } from 'react-icons/io5'
import Feature from './Feature'
import { useInView } from 'react-intersection-observer'

export default function InfoBaseGroup() {
    const pop = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.5, 0.5);
      }
    
      100% {
        opacity: 1;
        transform: scale(1, 1);
      }
      `
    const [animate, setAnimate] = useState('')
    const [ref, inView] = useInView()

    useEffect(() => {
        if (inView) {
            setAnimate(`${pop}  cubic-bezier(.26, .53, .74, 1.48) 0.5s`)
        }

    }, [pop, inView])
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
                            alignItems={'flex-start'} color={useColorModeValue('orange.400', 'orange.500')}
                            ref={ref}>
                            <Feature
                                opacity={0}
                                icon={<Icon as={IoFolderOpenOutline} color={'black.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('gray.100', 'gray.700')}

                                animation={animate + ' 1s forwards'}
                            >
                                Отдел бухгалтерии
                            </Feature>
                            <Feature
                                opacity={0}
                                icon={<Icon as={IoFolderOpenOutline} color={'black.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('gray.100', 'gray.700')}
                                animation={animate + '  2s forwards'}
                            >
                                Отдел продаж
                            </Feature>
                            <Feature
                                opacity={0}
                                icon={<Icon as={IoFolderOpenOutline} color={'black.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('gray.100', 'gray.700')}
                                animation={animate + ' 3s forwards'}
                            >
                                IT-отдел
                            </Feature>
                        </Stack>
                    </CardBody>
                </Card>
            </CardBody>
        </Card>
    )
}
