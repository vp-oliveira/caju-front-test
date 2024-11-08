import { useNavigate } from 'react-router-dom'

export const useNavigateUrl = () => {
  const navigate = useNavigate()

  return {
    navigate
  }
}
