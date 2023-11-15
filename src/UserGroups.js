import { Card, CardBody, CardHeader, Heading, Icon, Stack, StackDivider, keyframes, useColorModeValue } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { IoFolderOpenOutline, IoPerson } from 'react-icons/io5'
import { useInView } from 'react-intersection-observer'
import Feature from './Feature'







export default function UserGroups() {

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
            <CardHeader >
                <Stack direction={'row'} alignItems={'center'}>
                    <Icon as={IoFolderOpenOutline} boxSize={"2vw"} color={'black.500'} />
                    <Heading >Отдел бухгалтерии</Heading>
                </Stack>
            </CardHeader>
            <CardBody>
                <Card bg={useColorModeValue('gray.200', 'gray.800')}>
                    <CardBody>
                        <Stack
                            spacing={4}
                            divider={
                                <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                            }
                            ref={ref} color={useColorModeValue('orange.400', 'orange.500')}>
                            <Feature
                                opacity={0}
                                icon={<Icon as={IoPerson} color={'black.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('gray.100', 'gray.700')}

                                animation={animate + ' 1s forwards'}
                            >
                                Иванова А. С.
                            </Feature>
                            <Feature
                                opacity={0}
                                icon={<Icon as={IoPerson} color={'black.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('gray.100', 'gray.700')}
                                animation={animate + '  2s forwards'}
                            >
                                Петрова И. А.
                            </Feature>
                            <Feature
                                opacity={0}
                                icon={<Icon as={IoPerson} color={'black.500'} w={5} h={5} />}
                                iconBg={useColorModeValue('gray.100', 'gray.700')}
                                animation={animate + ' 3s forwards'}
                            >
                                Сидорова К. С.
                            </Feature>
                        </Stack>
                    </CardBody>
                </Card>
            </CardBody>
        </Card>
    )
}
