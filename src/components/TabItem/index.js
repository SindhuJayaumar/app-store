// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const activeTabClass = isActive ? 'active-tab-btn' : ''

  const onClickChangeApp = () => {
    setActiveTabId(tabId)
  }

  return (
    <li className="list-container">
      <button
        type="button"
        className={`btn ${activeTabClass}`}
        onClick={onClickChangeApp}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
