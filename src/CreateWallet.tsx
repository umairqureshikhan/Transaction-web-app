

const CreateWallet = () => {
  return (
<>
<div className="modal-overlay">
        <div className='w-[40%] walletmodal rounded-3xl bg-white  px-20 h-[95vh] ml-auto mr-auto  flex justify-center items-center '>
            <div className='wallet-modal'>
                <h2>Create wallet</h2>
                <h5>Please review your wallet details</h5>
                <label className='mt-3  text-gray-500 p-2'>cash</label>
                <input type="text" name="email" placeholder="20,000" className='w-[400px] rounded-xl' />
                <label className='  text-gray-500 p-2'>Amount</label>
                <input type="text" name="email" placeholder="20,000" className='w-[400px] rounded-xl' />
                <label className='  text-gray-500 p-2'>Saving</label>
                <input type="text" name="email" placeholder="20,000" className='w-[400px] rounded-xl' />
                <div className='flex justify-center items-center m-5'>
                    <button className="rounded-md p-2 w-60">Create</button>
                </div>
                <p className='text-gray-500 w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo dolorem sint quas? Beatae , dolor debitis! Incidunt, consectetur nisi, vel natus .</p>
            </div>
        </div>
    </div>



  
  </>

)
}

export default CreateWallet