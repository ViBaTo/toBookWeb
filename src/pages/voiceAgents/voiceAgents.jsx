import React from 'react'
import HeroVoice from './heroVoice'
import ComparisonVoiceSection from './comparisonVoice'
import ForWhoVoiceSection from './forWhoVoice'
import PercentagesVoice from './percentagesVoice'
import RestaurantPackages from '../pricing/packages'

const VoiceAgents = () => {
  return (
    <div className='page-fade'>
      <HeroVoice />
      <hr className='section-divider' />
      <PercentagesVoice />
      <hr className='section-divider' />
      <ForWhoVoiceSection />
      <hr className='section-divider' />
      <ComparisonVoiceSection />
      <hr className='section-divider' />
      <RestaurantPackages />
    </div>
  )
}

export default VoiceAgents
