// @ts-nocheck
import React, { useRef } from 'react'
import Nav from './Nav'
import SectionRight from './SectionRight'
import { S1H1, S1T1, S2H1, S2T1, S3H1, S3T1 } from './Content'
import SectionLeft from './SectionLeft'
import Hero from './Hero'
import { Box } from '@chakra-ui/react'

import UserGroups from './UserGroups'
import InfoBaseList from './InfoBaseList'
import InfoBaseGroup from './InfoBaseGroup'




export default function App() {
    const aboutRef = useRef(null);

    const handleClick = () => {
        // @ts-ignore
        aboutRef.current?.scrollIntoView({ behavior: 'auto' });
    };

    return (
        <>
            <Box h={"100vh"}>
                <Nav />
                <Hero moreOnClick={handleClick} />
            </Box>
            <SectionRight h={S1H1} t={S1T1} ref={aboutRef}>
                <InfoBaseList />
            </SectionRight>

            <SectionLeft h={S2H1} t={S2T1}>
                <UserGroups />
            </SectionLeft>

            <SectionRight h={S3H1} t={S3T1}>
                <InfoBaseGroup />
            </SectionRight>
        </>
    )
}