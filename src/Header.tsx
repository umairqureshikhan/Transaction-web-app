
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import myprfile from '../public/profie.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';






const Header = () => {
  return (
    <>
    <div className="hedaer-color h-[80px] w-[75%]  rounded-xl  fixed left-72">
      <div className="flex justify-end">
        <div className="flex justify-center items-center  w-[20%]">
        <IoMdHelpCircleOutline /> &nbsp;
        Help Center
        <IoIosSettings className="ml-7 " color="light gray" fontSize={'20px'}/>
               </div>
        <div className="profile-bg-color h-[80px] w-[20%] flex justify-center items-center gap-3 ">
            <img src={myprfile} alt="" className="h-12 w-12 rounded-full" />
            <p className="font-medium pt-2 text-lg">umair </p>
            {/* <IoCaretUpOutline className="-mr-10"/> */}
        </div>
      </div>
    </div>


</>






  );
};

export default Header;
