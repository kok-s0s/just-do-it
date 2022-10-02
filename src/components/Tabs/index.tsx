import React, { useState } from 'react'
import TabNavItem from '../TabNavItem'
import TabContent from '../TabContent'
import { Options } from './styles'

interface TabProps {
  id: string
  title: string
  // content: React.ReactNode
}

interface TabsProps {
  tabs: TabProps[]
}

export default function Tabs(props: TabsProps) {
  const { tabs } = props
  const [activeTab, setActiveTab] = useState('tab1')

  return (
    <>
      <Options>
        {tabs.map((item: TabProps) => (
          <TabNavItem
            key={item.id}
            id={item.id}
            title={item.title}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        ))}
      </Options>

      {tabs.map((item: TabProps) => (
        <TabContent key={item.id} id={item.id} activeTab={activeTab}>
          {/* {item.content} */}
        </TabContent>
      ))}
    </>
  )
}
