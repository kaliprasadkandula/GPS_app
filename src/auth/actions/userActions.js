import axios from "axios";
import {sessionService} from 'redux-react-session'
export const signUpUser = async(
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {
  // console.log(`signUpUser is working`)
  // debugger
  // const data_=await axios.post('http://localhost:4000/user/signup',credentials,{ headers: {
  //   "Content-Type": "application/json",
  // }})
  // console.log(data_)
  
  axios.post("http://localhost:4000/user/signup", credentials, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then(response => {
    const {data} = response;
    if(data.status==="FAILED"){
        console.log(`signup was not successful`)

        const {message}=data
        if(message.includes("email")){
            setFieldError("email", message);
        }
        else if(message.includes("password")){
            setFieldError("password", message)
        }
        else{
            setFieldError("email", message);
            setFieldError("password", message)
        }
    }else if(data.status ==="SUCCESS"){
        const userData=data.data[0]
        console.log(`signup was successful`)
        const token=data.id
        sessionService.saveSession(token).then(()=>{
            sessionService.saveUser(userData).then(()=>{
                history.push("/dashboard")
            }).catch(err=>{console.error(err)})
        }).catch(err=>{console.error(err)})
    }
    setSubmitting(false)

  })
  .catch(err => {console.log(err)})
};

export const loginUser = (
  credentials,
  history,
  setFieldError,
  setSubmitting
) => {};

export const logoutUser = () => {};
