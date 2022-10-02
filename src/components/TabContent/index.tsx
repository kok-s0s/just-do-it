import React from 'react'
import { Container } from './styles'

interface TabContentProps {
  id: string
  activeTab: string
  children: React.ReactNode
}

export default function TabContent(props: TabContentProps) {
  const { id, activeTab, children } = props

  return activeTab === id ? (
    <Container>{children}</Container>
  ) : null
}

