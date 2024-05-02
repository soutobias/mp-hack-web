import {
  faCircleXmark,
  faCode,
  faVideo,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FullPagePopupContainer } from './styles'
import { GithubLogo } from 'phosphor-react'

interface FullPagePopupProps {
  setShowPopup: any
}

export function FullPagePopup({ setShowPopup }: FullPagePopupProps) {
  function handleClose() {
    setShowPopup(false)
  }

  return (
    <FullPagePopupContainer>
      <FontAwesomeIcon icon={faCircleXmark} onClick={handleClose} />
      <iframe
          src="https://swdg.io/mp-hack/dashboard/dashboard.html"
          width="90%"
          height="90%"
          style={{ border: 'none' }}
          title="GitHub Pages"
      />
    </FullPagePopupContainer>
  )
}
