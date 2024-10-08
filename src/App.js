import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { ToastContainer,Bounce} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SummaryApi from './common/index.js';
import Context from './context/index.js'
import { useDispatch } from 'react-redux';
import { useEffect} from 'react';
import { setUserDetails } from './store/userSlice.js';
function App() {
  const dispatch = useDispatch()
  const fetchUserDetails = async()=>{
    const dataResponse = await fetch(SummaryApi.current_user.url,{
      method : SummaryApi.current_user.method,
      credentials : 'include'
    })
    const dataApi = await dataResponse.json()
       if(dataApi.success){
        dispatch(setUserDetails(dataApi.data))
       }
      console.log("data-user",dataResponse)
  }
    useEffect(()=>{
      /**user Details */
      fetchUserDetails()
      /**user Details cart product */
  // fetchUserAddToCart()    
  
    },[])







  return (
    <>
    <Context.Provider value={{
      fetchUserDetails

    }}>
     <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
transition={Bounce}
/>
     <Header/>
    <main className='min-h-[calc(100vh-200px)]'>
    <Outlet/>
    </main>
    <Footer/>
    </Context.Provider>
    </>
  );
}

export default App;
