"use client";

function LoginForm() {
  return (
    <form className="p-7 flex items-center justify-center flex-col gap-6 w-[400px] h-fit bg-secBg rounded-lg">
      <h1 className=" font-extrabold tracking-wider text-2xl ">Login</h1>
      <input
        type="text"
        className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 w-full placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
        placeholder="username"
      />
      <input
        type="password"
        className=" bg-mainBg p-3 focus:outline-none border-[2px] border-slate-700 w-full placeholder:text-xs placeholder:text-slate-500 placeholder:transition-all placeholder:duration-300 focus:placeholder:px-3 focus:placeholder:text-slate-300"
        placeholder="password"
      />
      <button className="border-none bg-blue-600 transition hover:bg-blue-800 w-full text-xs font-medium tracking-widest p-3">
        Login
      </button>
      <div className="flex justify-center items-center gap-6">
        <button>Github</button>
        <button>Google</button>
      </div>
    </form>
  );
}
export default LoginForm;
