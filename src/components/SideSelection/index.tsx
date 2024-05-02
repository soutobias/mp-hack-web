import { SideSelectionContainer, SideSelectionLink } from './styles'
import styles from './SideSelection.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleQuestion,
  faCompassDrafting,
  faLayerGroup,
  faTrash,
} from '@fortawesome/free-solid-svg-icons'
import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

interface SideSelectionProps {
  selectedSidebarOption: any
  setSelectedSidebarOption: any
  loading: boolean
}

export function SideSelection({
  selectedSidebarOption,
  setSelectedSidebarOption,
  loading
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

  return (
    <div>
      <SideSelectionContainer className={loading ? 'pointer-events-none' : ''}>
        <div className="">
          <SideSelectionLink
            title={'Suitability'}
            onClick={handleShowSelection}
            id={'Suitability'}
            className={
              selectedSidebarOption === 'Suitability' ? styles.active : ''
            }
          >
            <FontAwesomeIcon icon={faCompassDrafting} />
          </SideSelectionLink>
          <SideSelectionLink
            title={'Data Exploration'}
            onClick={handleShowSelection}
            id={'Data Exploration'}
            className={
              selectedSidebarOption === 'Data Exploration' ? styles.active : ''
            }
          >
            <FontAwesomeIcon icon={faLayerGroup} />
          </SideSelectionLink>
          <SideSelectionLink title={'Clean map'}>
            <FontAwesomeIcon icon={faTrash} />
          </SideSelectionLink>
        </div>
      </SideSelectionContainer>
    </div>
  )
}
