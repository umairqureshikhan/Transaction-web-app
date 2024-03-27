import { useState } from "react";


const CreateWallet = () => {


  const [errors, setErrors] = useState('');
  const [formData, setFormData] = useState({
    "accountBalance": 0,
    "savingsAmount": 0,
    "cashInHand": 0
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // setErrors({ ...errors, [e.target.name]: "" });
  };


  const submitCreateWallet = async () => {
    console.log('formData', formData);

      try {
        const requestOptions = {
          method: "post",
          headers: { "Content-Type": "application/json",
          Authorization: "" },
          body: JSON.stringify(formData),
        };
        const res = await fetch(
          "https://expense-tracker-task-production.up.railway.app/user/wallet",
          requestOptions
        );
        const data = await res.json();
        console.log("response == ", res);
        if(res.status === 200){
          // navigate('/');
        }else{
          // let obj = {
          //   password: 'Something Went Wrong'
          // }
          setErrors('Something Went Wrong');
        }
        return data;
      } catch (error) {
        console.error("Error:", error); // Log any errors
        throw error;
      }
  };






  const { accountBalance, savingsAmount, cashInHand } = formData;

  return (
<>
<div className="modal-overlay">
        <div className='w-[40%] walletmodal rounded-3xl bg-white  px-20 h-[95vh] ml-auto mr-auto  flex justify-center items-center '>
            <div className='wallet-modal'>
                <h2>Create wallet</h2>
                <h5>Please review your wallet details</h5>
                <label className='mt-3  text-gray-500 p-2'>cash</label>
                <input type="text" name="cashInHand" placeholder="20,000" className='w-[400px] rounded-xl input-form'
                value={cashInHand}
                onChange={handleChange} />
                <label className='  text-gray-500 p-2'>Amount</label>
                <input type="text" name="savingsAmount" placeholder="20,000" className='w-[400px] rounded-xl input-form'
                value={savingsAmount}
                onChange={handleChange} />
                <label className='  text-gray-500 p-2'>Saving</label>
                <input type="text" name="accountBalance" placeholder="20,000" className='w-[400px] rounded-xl input-form'
                value={accountBalance}
                onChange={handleChange} />


                <p className="text-red-500 text-center mt-2">{errors}</p>


                <div className='flex justify-center items-center m-5'>
                    <button onClick={submitCreateWallet} className="rounded-md p-2 w-60">Create</button>
                </div>
                <p className='text-gray-500 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem sint quas? Beatae , dolor debitis! Incidunt, consectetur nisi, vel natus .</p>
            </div>
        </div>
    </div>



  
  </>

)
}

export default CreateWallet