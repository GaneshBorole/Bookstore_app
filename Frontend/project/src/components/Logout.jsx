import React, { use } from 'react'
import { useAuth } from '../context/AuthProvider';
// import { set } from 'mongoose';
import toast from 'react-hot-toast';
//import { set } from 'mongoose';


function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout = () => {
      try {
        setAuthUser({
          ...authUser,
          user: null,
        });
        localStorage.removeItem("Users");
        toast.success("Logout successfully");
        // document.getElementById("my_modal_3").close();
        window.location.reload();
        setTimeout(() => {
         
          localStorage.setItem("Users", JSON.stringify(res.data.user));
        }, 3000);
            
        } catch (error) {
            toast.error("Error " + error);
            setTimeout(()=>{},2000);
        }
    }
    return (
        <div>
          <button
            className="px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      );
    }


export default Logout
