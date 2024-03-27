

import { useState, useEffect } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import CreateTransaction from "./CreateTransaction"; // Import your CreateTransaction component

const Transaction = () => {
  const [showCreateTransaction, setShowCreateTransaction] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  // const [errors, setErrors] = useState('');

 

  useEffect(() => {
    getWallet();
  }, []);

  const handleClick = () => {
    setShowCreateTransaction(true);
  };
  const handleEdit = () => {
    setShowEditModal(!showEditModal);
  }



  const getWallet = async () => {
      try {
        const requestOptions = {
          method: "get",
          headers: { "Content-Type": "application/json",
          Authorization: ""
         },
          // body: JSON.stringify(formData),
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
          // setErrors('Something Went Wrong');
        }
        return data;
      } catch (error) {
        console.error("Error:", error); // Log any errors
        throw error;
      }
  };




  return (
    <div >
        <Header />
      <Sidebar />
      {showCreateTransaction ? (
        <CreateTransaction />
      ) : (
        <div>
          <div className="transaction-hedaer h-[80px] w-[75%] rounded-xl flex justify-around items-center fixed left-72 top-28 p-5">
            <h1 className="transaction">
              {showCreateTransaction ? "Create Transaction" : "Transaction"}
            </h1>
            <input
              type="text"
              className="rounded-3xl h-9 pl-10"
              placeholder="Search..."
            />
            <CiSearch className="search" />
            <input type="date" className="w-[120px] h-10 p-2 rounded-md" />
            <button
              className="create-transaction"
              onClick={handleClick}
            >
              Create Transaction
            </button>
          </div>

          <div className="container  fixed left-72 top-52 ">
            <table className="table table-striped">
              <thead className="bg-slate-300 theading">
                <tr className="">
                  <th>S.No</th>
                  <th>Description</th>
                  <th>Date</th>
                  <th>Amount</th>
                  <th>Category</th>
                  <th>Source</th>
                  <th>Type</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Expense 1</td>
                  <td>2024-03-21</td>
                  <td>$100</td>
                  <td>Food</td>
                  <td>Credit Card</td>
                  <td className="credit">credit</td>
                  <td>
                    <BsThreeDotsVertical onClick={handleEdit} />
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Expense 2</td>
                  <td>2024-03-22</td>
                  <td>$50</td>
                  <td>Transportation</td>
                  <td>Debit Card</td>
                  <td>credit</td>
                  <td>
                    <BsThreeDotsVertical />
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Income 1</td>
                  <td>2024-03-23</td>
                  <td>$200</td>
                  <td>Salary</td>
                  <td>Direct Deposit</td>
                  <td>Income</td>
                  <td>
                    <BsThreeDotsVertical />
                  </td>
                </tr>
              </tbody>
            </table>
            {showEditModal ?
            <div className="flex-col justify-center items-center editmodal w-32 h-28 p-2 rounded-md absolute  right-20">
              <button className="hover:text-green-500">Edit</button>
              <hr />
              <button className="hover:text-red-500">Delete</button>
            </div>
            :null}
          </div>
        </div>
      )}

      {/* <CreateWallet /> */}
    </div>
  );
};

export default Transaction;
