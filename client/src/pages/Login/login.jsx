import { Image } from "@radix-ui/react-avatar"

const Login = () => {
  return (
    <>
      <div className=" flex bg-[url(')] lg:h-screen sm:h-fit w-auto justify-center lg:pt-20 lg:pb- ">
        <div className=" flex h-[500px] w-[80%] lg:w-full lg:h-[90%] gap-1 lg:ml-20 lg:mb- border-2 rounded-2xl lg:mr-20 mt- ">
          <div className="max-h-fit md:max-w-fit w-[40%] lg:min-w-fit lg:max-h-full overflow-hidden object-cover  "> 
          <img className="h-[400px] md:w-[50%] w-auto lg:min-h-full lg:w-auto  object-fill rounded-l-xl" src="https://imgs.search.brave.com/tN6wno47SQgjxHPhOQ4A4J3OL0hjyrKdov5q7s4L9FA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAyMi8x/Mi8wMS8wNC80Mi9t/YW4tNzYyODMwNV82/NDAuanBn" alt="" />
          
        </div>
        <div className="w-[50%] flex flex-col pl-5 lg:pr-5 pt-3 lg:pt-8 lg:ml-10 ">

         <div className="flex lg:w-[100%] w-[200px] justify- gap-   gap-1 ">
          <div className="lg:h-[40px] lg:w-[40%] w-[60px] h-[30px] flex bg-amber-400  items-center justify-center cursor-pointer  rounded-3xl">
           <button className=" cursor-pointer ">Login</button>
          </div>
          <div className="lg:h-[40px] lg:w-[40%] w-[70px] h-[30px] flex bg-gray-300 items-center cursor-pointer  justify-center  rounded-3xl">
           <button className="cursor-pointer">Register</button>
          </div>
           
         </div>
         <div>
          <div className=" mt-10 lg:mt-5   ">
            <p className=" lg:text-4xl font-semibold text-2xl ">Welcome</p>
          </div>
          <div>
            <p>Please login to your account</p>
          </div>
         </div>
         <div className="flex flex-col pt-2 lg:pt-2 lg:gap-4 gap-2">
          <div className="h-[20px] lg:h-[40px] flex items-center justify-center  "><input className=" w-full h-full" type="search" name="" id="" placeholder="email or username"/> 
            </div><hr />
         <div className="h-[20px] lg:h-[40px] flex items-center justify-center  "> <input className="  w-full h-full" type="search" name="" id="" placeholder="password" />
          </div><hr />
         </div>
         <div className=" w-full flex justify-between pr-2 mt-4 pt-5 ">
          <div className=" flex justify-center bg-amber-50 items-center  " >
            <p className="lg:text-xl text-sm  ">Forgot Password</p>
          </div>
          <div className="bg-amber-400 lg:rounded-3xl rounded-xl h-[40px] w-[70px] lg:h-[40px]  lg:w-[20%] flex justify-center items-center ">
           <button>Ok</button>
          </div>
         </div>
         <div className=" flex justify-center pt-10 ">
          <p>Register Your School in Our Apps</p>
         </div>
         <div className=" flex justify-center pt-10 lg ">
          <p>Terms and Conditions & Privacy Policy</p>
         </div>
         

        </div>
        </div>
      </div>
    </>
  )
}


export default Login