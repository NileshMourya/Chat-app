// import React from "react";

// const GenderCheck = () => {
//   return (
//     <div className="flex mt-2">
//       <div className="form-control">
//         <label htmlFor="" className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Male</span>
//           <input type="checkbox" className="checkbox-sm border-slate-700" />
//         </label>
//       </div>
//       <div className="form-control">
//         <label htmlFor="" className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Female</span>
//           <input type="checkbox" className="checkbox-sm border-slate-700" />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default GenderCheck;

import React from "react";

const GenderCheck = () => {
  return (
    <div className="flex flex-col md:flex-row mt-2">
      <div className="form-control mb-2 md:mb-0 md:mr-2">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="checkbox" className="checkbox border-slate-700" />
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="" className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="checkbox" className="checkbox border-slate-700" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheck;
