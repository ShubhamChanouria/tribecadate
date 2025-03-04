import React from 'react'
import Container from '@/app/components/Layout/Container/Container'
import Instructions from './Instructions/Instructions'
import Rate from './Rate/Rate'
import HeroSection from './HeroSection/HeroSection'
import AboveFold from './AboveFold/AboveFold'
import FadeInSection from '../FadeInSection/FadeInSection'
import Panel from '../Panel/Panel'
const Home = () => {
    return (
        <div>

            <AboveFold />
            <FadeInSection>
                <Container>
                    <Instructions />
                </Container>
            </FadeInSection>
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