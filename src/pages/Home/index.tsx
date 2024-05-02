import { useEffect, useState } from 'react'
import { MapHome } from '../../components/MapHome'
import { SideSelection } from '../../components/SideSelection'
import { SideBar, HomeContainer, BottomBar, BottomLeft } from './styles'
import { Loading } from '../../components/Loading'
import { loadAllCsvData, loadCsvData } from '../../data/api'
import { fetchApi } from '../../lib/api'
import { InfoButtonBox } from '../../components/InfoButtonBox'

export function Home() {
  const [selectedSidebarOption, setSelectedSidebarOption] = useState<string>('')
  const [mpData, setMpData] = useState(null)
  const [relationshipData, setRelationshipData] = useState()

  const [loading, setLoading] = useState(false)

  const [showUniInfo, setShowUniInfo] = useState(false)

  useEffect(() => {
    fetchApi('relationship', setMpData)
  }, [])
  // useEffect(() => {
  //   setLoading(true)
  //   loadAllData()
  // }, [])
  // useEffect(() => {
  //   if (Object.keys(mpData).length > 0) {
  //     const relationship


  //   }
  // }, [mpData])

  return (
    <HomeContainer>
      <SideBar>
        <SideSelection
          selectedSidebarOption={selectedSidebarOption}
          setSelectedSidebarOption={setSelectedSidebarOption}
          loading={loading}
          mpData={mpData}
          setShowUniInfo={setShowUniInfo}
      />
        {Object.keys(showUniInfo).length > 0 && <InfoButtonBox showUniInfo={showUniInfo} setShowUniInfo={setShowUniInfo}/>}
      </SideBar>
      <MapHome mpData={mpData} setLoading={setLoading}/>
      {loading ? <Loading /> : null}
    </HomeContainer>
  )
}
