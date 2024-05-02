import { useEffect, useState } from 'react'
import { MapHome } from '../../components/MapHome'
import { SideSelection } from '../../components/SideSelection'
import { SideBar, HomeContainer, BottomBar, BottomLeft } from './styles'
import { Loading } from '../../components/Loading'

export function Home() {
  const [selectedSidebarOption, setSelectedSidebarOption] = useState<string>('')
  const [listLayers, setListLayers] = useState([])

  const [loading, setLoading] = useState(false)

  // const fetchData = async () => {
  //   const rout = window.location.pathname
  //   const getLayers = new GetLayers(rout)
  //   await getLayers.loadJsonLayers().then(async function () {
  //     setListLayers((listLayers: any) =>
  //       listLayers.lenght > 0 ? listLayers : getLayers.data,
  //     )
  //     setLoading(false)
  //   })
  // }
  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (
    <HomeContainer>
      <SideBar>
        <SideSelection
          selectedSidebarOption={selectedSidebarOption}
          setSelectedSidebarOption={setSelectedSidebarOption}
          loading={loading}
        />
      </SideBar>
      <MapHome/>
      {loading ? <Loading /> : null}
    </HomeContainer>
  )
}
