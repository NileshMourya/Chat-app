// import React from "react";

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <h1 className="text-3x1 font-semibold text-center text-gray-300">
//           Login
//           <span className="text-blue-500">ChatApp</span>
//         </h1>
//         <form action="">
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               type="text"
//               placeholder="Enter username"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label htmlFor="" className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               type="password"
//               placeholder="Enter password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <a
//               href="#"
//               className="text-sm hover:underline hover:text-blue-500 p-2 "
//             >
//               {"Don't"} have an account?
//             </a>
//           </div>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 login">Login</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from "react";

const Login = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="w-full max-w-md mx-auto bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Login
          <span className="text-blue-500">ChatApp</span>
        </h1>
        <form className="p-4">
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="text-center mb-4">
            <a href="#" className="text-sm hover:underline hover:text-blue-500">
              {"Don't"} have an account?
            </a>
          </div>
          <div>
            <button className="btn btn-primary btn-block">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
