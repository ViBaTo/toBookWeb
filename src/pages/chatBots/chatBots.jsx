import React from 'react'
import HeroChat from './heroChat'
import ComparisonChatSection from './comparisonChat'
import ForWhoChatSection from './forWhoChat'
import PercentagesChat from './percentagesChat'
import RestaurantPackages from '../pricing/packages'

const ChatBots = () => {
  return (
    <div className='page-fade'>
      <HeroChat />
      <hr className='section-divider' />
      <PercentagesChat />
      <hr className='section-divider' />
      <ForWhoChatSection />
      <hr className='section-divider' />
      <ComparisonChatSection />
      <hr className='section-divider' />
      <RestaurantPackages />
    </div>
  )
}

export default ChatBots
