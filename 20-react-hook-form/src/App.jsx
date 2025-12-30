import './App.css'
import { useForm } from "react-hook-form"

function App() {

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    })
  }

  const onSubmit = async (data) => {
    // await delay(1);
    let r = await fetch("http://localhost:3000/", {method : "POST", headers : {"Content-Type" : "application/json"}, body : JSON.stringify(data)});
    let res = await r.text();
    console.log(data, res);
    if (data.username === "drashti" || data.username == "Drashti") {
      setError("blocked", {message : "Sorry, This user is blocked."});
    }
  }; 

  return (
    <>
    {isSubmitting && <div>Loading....</div>}
      <div className='container'>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input type="text" placeholder='username' {...register("username", {required : {value : true, message : "Username required."}, minLength : {value : "3", message : "Minimum Length required is 3"}, maxLength : {value : "8", message : "Maximum length required is 8."}})} />
          {errors.username && <div className='red'>{errors.username.message}</div>}
          <br />
          <input type="password" placeholder='password' {...register("password")} />
          <br />
          <button type='submit' disabled={isSubmitting}>Submit</button>
          {errors.blocked && <div className='red'> {errors.blocked.message} </div>}
        </form>
      </div>
    </>
  )
}

export default App
