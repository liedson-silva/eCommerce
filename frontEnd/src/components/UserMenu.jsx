import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Divider from './Divider'
import SummaryApi from "../common/SummaryApi"
import Axios from "../utils/Axios"
import { logout } from "../store/userSlice"
import AxiosToastError from "../utils/AxiosToastError"
import toast from 'react-hot-toast'

const UserMenu = ({close}) => {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleLogout = async () => {
    try{
      const response = await Axios({
        ...SummaryApi.logout
      })
      if(response.data.success){
        if(close){
          close()
        }
        dispatch(logout())
        localStorage.clear()
        toast.success(response.data.message)
      }

    } catch (error) {
      AxiosToastError(error)
    }
  }

  return (
    <div>
      <div className='font-semibold'>Minha conta</div>
      <Divider />
      <div className='text-sm grid gap-2 px-2'>
        <Link to={""} className='px-2 hover:bg-gradient-to-r from-blue-300 via-blue-200 rounded-lg'>Meus Pedidos</Link>
        <Link to={""} className='px-2 hover:bg-gradient-to-r from-blue-300 via-blue-200 rounded-lg'>Endereço</Link>
        <button onClick={handleLogout} className='text-left text-semibold bg-gradient-to-r from-tertiary-100 via-secondary-100 to-primary-100 text-center text-white rounded-lg'>Sair</button>
      </div>
    </div>
  )
}

export default UserMenu