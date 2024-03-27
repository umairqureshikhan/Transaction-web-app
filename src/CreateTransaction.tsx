import { useState } from "react";
import { FormControl,  MenuItem, Select } from "@mui/material";

const CreateTransaction = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event: any) => {
    setSelectedValue(event.target.value);
  };

  return (
    <div>
      {/* <Header /> */}
      <div className="transaction-hedaer  h-[80px] w-[75%]  rounded-xl   fixed left-72 top-28">
        <h1 className="transaction p-4"> CreateTransaction</h1>
        <div className="mt-3 ">
          <div className=" flex justify-evenly">

          
          <FormControl className="w-[40%]  ">
            <label className="  text-gray-500 p-2">Type</label>
            <Select value={selectedValue} onChange={handleChange}>
              <MenuItem value={"option1"}>Credit</MenuItem>
              <MenuItem value={"option2"}>Debit</MenuItem>
            </Select>
          </FormControl>

          <FormControl className="w-[40%] ">
            <label className="  text-gray-500 p-2">Source</label>
            <Select value={selectedValue} onChange={handleChange}>
              <MenuItem value={"option1"}>Amount</MenuItem>
              <MenuItem value={"option2"}>Cash</MenuItem>
              <MenuItem value={"option2"}>savings</MenuItem>

            </Select>
          </FormControl>
          </div>
          <div className=" flex justify-evenly mt-3">

          <FormControl className="w-[40%] ">
            <label className="  text-gray-500 p-2">Category</label>
            <Select value={selectedValue} onChange={handleChange}>
              <MenuItem value={"option1"}>ELectricity bills</MenuItem>
              <MenuItem value={"option2"}>salary income</MenuItem>
              <MenuItem value={"option2"}>others</MenuItem>

            </Select>
          </FormControl>
          <input
      type="number"
      className="border border-gray-300 rounded-md  w-[40%] mt-10"
      placeholder="Enter Amount"
    />
          </div>
          <div className=" ml-16 mt-3">

           <FormControl className="w-[42%] ">
            <label className="  text-gray-500 p-2">Discription</label>
            <Select value={selectedValue} onChange={handleChange}>
              <MenuItem value={"option1"}>Credit</MenuItem>
              <MenuItem value={"option2"}>Debit</MenuItem>
            </Select>
          </FormControl> 

      
          </div>

        </div>
      </div>
      {/* <Sidebar /> */}
    </div>
  );
};

export default CreateTransaction;
