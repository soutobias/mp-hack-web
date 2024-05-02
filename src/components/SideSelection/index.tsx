import { SideSelectionContainer, SideSelectionLink } from './styles'
import styles from './SideSelection.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBuildingColumns,
} from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { fetchApi } from '../../lib/api'
interface SideSelectionProps {
  selectedSidebarOption: any
  setSelectedSidebarOption: any
  loading: boolean
  mpData: any
  setShowUniInfo: any
}

export function SideSelection({
  selectedSidebarOption,
  setSelectedSidebarOption,
  loading,
  mpData,
  setShowUniInfo
}: SideSelectionProps) {
  const navigate = useNavigate()

  async function handleShowSelection(e: any) {
    const oldSelectedSidebarOption = selectedSidebarOption
    if (oldSelectedSidebarOption === e.currentTarget.id) {
      setSelectedSidebarOption('')
    } else {
      setSelectedSidebarOption(e.currentTarget.id)
    }
  }

  async function handleShowSelectionUni(e: any) {
    fetchApi('most_popular', setShowUniInfo)
  }

  async function handleGoToDashboard(e: any) {
    navigate('/dashboard')
    // fetchApi('most_popular', setShowUniInfo)
  }

  return (
    <div>
      <SideSelectionContainer className={loading ? 'pointer-events-none' : ''}>
        <div className="">
          <SideSelectionLink
            title={'Dashboard'}
            onClick={handleGoToDashboard}
            id={'Dashboard'}
            className={
              selectedSidebarOption === 'Suitability' ? styles.active : ''
            }
          >
          <FontAwesomeIcon icon={faBuildingColumns} />
        </SideSelectionLink>
        </div>
      </SideSelectionContainer>
    </div>
  )
}
