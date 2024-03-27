const AddnewCategory = () => {
  return (
    <div className="modal-overlay">

    <div className='w-[40%] newcategory rounded-3xl  bg-white px-20 h-[300px] mt-10 flex justify-center items-center ml-auto mr-auto '>

    <div className='category-modal pt-3'>
          <h2>Add Newcategory</h2>


        <label className='mt-5  text-gray-500 p-2'>cash</label>
              <input type="text" name="email" placeholder="20,000" className='w-[400px] rounded-xl' />
            <div className='flex justify-center items-center m-5'>
            <button className="   rounded-md p-2 w-60 ">Create</button>


            </div>

              </div>

             


   
   </div>
   </div>


   )
}

export default AddnewCategory