import { Item } from './styles'

interface TabNavItemProps {
  id: string
  title: string
  activeTab: string
  setActiveTab: Function
}

export default function TabNavItem(props: TabNavItemProps) {
  const { id, title, activeTab, setActiveTab } = props

  const handleClick = () => {
    setActiveTab(id)
  }

  return (
    <Item
      onClick={handleClick}
      className={
        activeTab === id ? "active" : ""
      }
      role="presentation"
    >
      {title}
    </Item>
  )
}

