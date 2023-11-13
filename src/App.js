import React from 'react'
import Nav from './Nav'
import SectionRight from './SectionRight'
import { S1H1, S1T1, S2H1, S2T1, S3H1, S3T1 } from './Content'
import SectionLeft from './SectionLeft'
import Hero from './Hero'
import { Box, Stack } from '@chakra-ui/react'
import InfoBaseList from './InfoBaseList'

export default function App() {
    return (
        <>
            <Box h={"100vh"}>
                <Nav />
                <Hero />
            </Box>
            <SectionRight n='№1' h={S1H1} t={S1T1}>
                <Stack spacing={14} alignItems={'flex-start'}>
                <InfoBaseList delay={'0'}>
                1. Бухгалтерия предприятия Srvr="192.168.0.10" Ref="BUH_1C"
                </InfoBaseList>
                <InfoBaseList delay={'3.5'}>
                2. ЗУП Srvr="192.168.0.16" Ref="ZUP_1C"
                </InfoBaseList>
                <InfoBaseList delay={'7'}>
                3. Розница 3.0 Srvr="192.168.0.17" Ref="Roznica_1C"
                </InfoBaseList>
                <InfoBaseList delay={'10.5'}>
                4. Управление торговлей Srvr="192.168.0.19" Ref="UT_WORK"
                </InfoBaseList>
                </Stack>
            </SectionRight>

            <SectionLeft n='№2' h={S2H1} t={S2T1} i='https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />

            <SectionRight n='№3' h={S3H1} t={S3T1} i='https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' />
        </>
    )
}