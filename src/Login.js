import React, {useState} from 'react'
import './Login.css'
import {login} from "./features/userSlice"
import {auth} from './firebase'
import {useDispatch} from "react-redux"

function Login (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch();


    const loginToApp = (e) => {
        e.preventDefault()

        auth.signInWithEmailAndPassword(email, password).then((userAuth)=>{
            dispatch(login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName:userAuth.user.displayName,
                profileUrl : userAuth.user.photoURL
            }))
            .catch((error) => alert(error));
        })

    }

    const register = () => {
        if (!name) {
            return alert("hey! dear idiot, please enter full name")
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) =>
        {
            userAuth.user.updateProfile({
                
            displayName:name,
            photoURL: profilePic, 

             })
            .then(() => {
                dispatch(login({
                    email : userAuth.user.email,
                    uid:userAuth.user.uid,
                    displayName: name,
                    photoUrl: profilePic,

                }));
            })
            .catch(error => alert(error));
        })
    }

    
    return (
        <div className="login">
            <img src="https://assets.website-files.com/5e3937011a476970ab7a1eff/5e6e1725a2ae976a2b2b900a_FFI%20Logo%20B.svg"
           alt=''/>
           <form>
               <input value={name} onChange={e=> setName(e.target.value)} placeholder="fullname (required if registering)" type="text"/>
               <input value={profilePic} onChange={e=> setProfilePic(e.target.value)} placeholder="profile pics url(optional)" type="text" />
               <input value={email} onChange={e=> setEmail(e.target.value)} placeholder="Email" type="email"/>
               <input value={password} onChange={e=> setPassword(e.target.value)} placeholder="password" type="password"/>
               <button onClick={loginToApp}>Sign in</button>

               </form> 
               <p>not a staff? {""}
               <span className="login__register" onClick={register} >register now</span>
               </p>
            
        </div>
    )
}

export default Login
