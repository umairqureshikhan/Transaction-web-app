import { CiLogout } from 'react-icons/ci'
import { FaTransgenderAlt } from 'react-icons/fa'
import { IoCardSharp } from 'react-icons/io5'
import { MdOutlinePayment } from 'react-icons/md'
import win from './../public/win.png'


const Sidebar = () => {
  
  return (
<div className='transaction-hedaer h-[100vh] w-[250px]'>
            <img src={win} alt="" />

            <div className=' mt-10 '>
            <div className='flex gap-3 text-white items-center justify-center hover:bg-slate-400  '>
                <FaTransgenderAlt size={'20px'}/>
                <p className='text-xl mt-3'>Transaction</p>

                </div> 
                <div className='flex gap-3 text-white items-center justify-center hover:bg-slate-400 '>
                <MdOutlinePayment size={'20px'}/>
                <p className='text-xl mt-3'>Payments</p>

                </div>                
                <div className='flex gap-3 text-white items-center justify-center mr-6 hover:bg-slate-400  '>
                <IoCardSharp size={'20px'}/>
                <p className='text-xl mt-3'>Cards</p>

                </div> 
            </div>
            <div className='flex gap-3 text-white items-center justify-center mr-6 hover:bg-slate-400 mt-32'>
                <CiLogout size={'20px'}/>
                <p className='text-xl mt-3 '>logout</p>

                </div> 
        
        
        
        </div> 
  )
}

export default Sidebar