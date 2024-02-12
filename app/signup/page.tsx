import type { NextPage } from "next";
import Image from "next/image";

const Signup: NextPage = () => {
  return (
    <div className="relative h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-500 via-black to-black">
      <div className="h-[80%] min-w-[300px]  w-[30%] bg-transparent shadow-[0px_25px_33px_20px_#000000]">
        <div className="m-auto w-[300px] h-[100px] relative">
          <Image
            src="/logo.png"
            alt="Decenter ai logo"
            className="pt-2"
            fill={true}
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="h-[80%] flex flex-col gap-10 px-20 pt-10">
          <div className="h-[10%]">
            <h2 className="font-bold text-2xl"> Create an account</h2>
            <small className="font-semibold">{"Let's get started"}</small>
          </div>

          <div className="h-12 full border-4 rounded-md relative">
            <div className="absolute bottom-8 left-2 text-xs bg-black p-1 px-2">
              Name
            </div>
            <input
              type="text"
              placeholder="Enter fullname"
              className="w-full h-full outline-none bg-transparent focus:ring-0 focus:border-none px-3"
            />
          </div>
          <div className="h-12 full border-4 rounded-md relative">
            <div className="absolute bottom-8 left-2 text-xs bg-black p-1 px-2">
              Email
            </div>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full h-full outline-none bg-transparent focus:ring-0 focus:border-none px-3"
            />
          </div>

          <div className="h-12 full border-4 rounded-md relative">
            <div className="absolute bottom-8 left-2 text-xs bg-black p-1 px-2">
              Password
            </div>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full h-full outline-none bg-transparent focus:ring-0   focus:border-none px-3"
            />
          </div>

          <button
            disabled
            className="font-semibold text-sm rounded-full bg-gray-700 text-white py-3"
          >
            Sign up
          </button>

          <button className="font-semibold text-sm rounded-full bg-gray-500 text-white py-3">
            Continue with email
          </button>

          <div className="text-xs font-semibold text-center">
            {"Already have an account? "}
            <span className="font-bold underline cursor-pointer"> Login</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
