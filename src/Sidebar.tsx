import { CiLogout } from 'react-icons/ci'
import { FaTransgenderAlt } from 'react-icons/fa'
import { IoCardSharp } from 'react-icons/io5'
import { MdOutlinePayment } from 'react-icons/md'
import win from './../public/win.png'
import { useNavigate } from 'react-router-dom'


const Sidebar = () => {
  const navigate = useNavigate();


  // const [errors, setErrors] = useState('');
  // const [formData, setFormData] = useState({
  //   "accountBalance": 0,
  //   "savingsAmount": 0,
  //   "cashInHand": 0
  // });


  const logout = async () => {
    navigate('/');
    // console.log('formData', formData);

    //   try {
    //     const requestOptions = {
    //       method: "post",
    //       headers: { "Content-Type": "application/json",
    //       Authorization: "" },
    //       body: JSON.stringify(formData),
    //     };
    //     const res = await fetch(
    //       "https://expense-tracker-task-production.up.railway.app/user/wallet",
    //       requestOptions
    //     );
    //     const data = await res.json();
    //     console.log("response == ", res);
    //     if(res.status === 200){
    //       // navigate('/');
    //     }else{
    //       // let obj = {
    //       //   password: 'Something Went Wrong'
    //       // }
    //       setErrors('Something Went Wrong');
    //     }
    //     return data;
    //   } catch (error) {
    //     console.error("Error:", error); // Log any errors
    //     throw error;
    //   }
  };


  
  return (
<div className='transaction-hedaer h-[100vh] w-[250px]'>
            <img src={win} alt="" />

            <div className=' mt-10 '>
            <div className='flex gap-3 text-white items-center justify-center hover:bg-slate-400 cursor-pointer  '>
                <FaTransgenderAlt size={'20px'}/>
                <p className='text-xl mt-3'>Transaction</p>

                </div> 
                <div className='flex gap-3 text-white items-center justify-center hover:bg-slate-400 cursor-pointer '>
                <MdOutlinePayment size={'20px'}/>
                <p className='text-xl mt-3'>Payments</p>

                </div>                
                <div className='flex gap-3 text-white items-center justify-center mr-6 hover:bg-slate-400 cursor-pointer  '>
                <IoCardSharp size={'20px'}/>
                <p className='text-xl mt-3'>Cards</p>

                </div> 
            </div>
            <div onClick={logout} className='flex gap-3 text-white items-center justify-center mr-6 hover:bg-slate-400 cursor-pointer mt-32'>
                <CiLogout size={'20px'}/>
                <p className='text-xl mt-3 '>logout</p>

                </div> 
        
        
        
        </div> 
  )
}

export default Sidebar