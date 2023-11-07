import React from 'react'
import Nav from './Nav'
import SectionRight from './SectionRight'
import {S1H1,S1T1,S2H1,S2T1,S3H1,S3T1} from './Content'
import SectionLeft from './SectionLeft'
import Hero from './Hero'

export default function App() {
    return (
        <>
            <Nav />
            <Hero/>
            <SectionRight n='№1' h={S1H1} t={S1T1} i='https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
            
            <SectionLeft  n='№2' h={S2H1} t={S2T1} i='https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>

            <SectionRight n='№3' h={S3H1} t={S3T1} i='https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'/>
        </>
    )
}