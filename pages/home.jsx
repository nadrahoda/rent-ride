import {useEffect, useState} from "react";
import "../app/globals.css";
import Home from "@/components/Console/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from '../firebase'
import { useRouter } from "next/router";
const home = () => {
const router = useRouter()
const [checkUserAuthentication,setCheckUserAuthentication]=useState(null)
useEffect(()=>{if(checkUserAuthentication==false)router.push('/login')},[checkUserAuthentication])
onAuthStateChanged(auth, (user) => {
  if (user) {
   setCheckUserAuthentication(true)
    const uid = user.uid;
    const userName = auth.currentUser;
    console.log(uid,userName?.email);
    
  } else {
   console.log('not loged');
   setCheckUserAuthentication(false)
  }
});

if(checkUserAuthentication==null)
return (<div>Loading...</div>);
else{
  return (
    <>
     <Home/>
    </>
  );
}
};

export default home;
