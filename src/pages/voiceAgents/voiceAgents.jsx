import React from 'react'
import HeroVoice from './heroVoice'
import ComparisonVoiceSection from './comparisonVoice'
import ForWhoVoiceSection from './forWhoVoice'
import PercentagesVoice from './percentagesVoice'

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
    </div>
  )
}

export default VoiceAgents
