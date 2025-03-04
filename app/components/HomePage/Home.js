"use client"
import React, { useRef } from 'react'
import Container from '@/app/components/Layout/Container/Container'
import Instructions from './Instructions/Instructions'
import Rate from './Rate/Rate'
import HeroSection from './HeroSection/HeroSection'
import AboveFold from './AboveFold/AboveFold'
import FadeInSection from '../FadeInSection/FadeInSection'
import Panel from '../Panel/Panel'
const Home = () => {
    const otherSectionRef = useRef(null);

    // 2. Function to handle button click
    const handleScrollToOtherSection = () => {
        if (otherSectionRef.current) {
            otherSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <div>
            <AboveFold />
            <FadeInSection>
                <Container>
                    <Instructions onClick={handleScrollToOtherSection} />
                </Container>
            </FadeInSection>
            <div ref={otherSectionRef}></div>
            <FadeInSection>
                <Rate />
            </FadeInSection>
            <FadeInSection>
                <Container>
                    <Panel />
                    </Container>
                </FadeInSection>
            
            <FadeInSection>
                <HeroSection />
            </FadeInSection>
        </div>
    )
}

export default Home