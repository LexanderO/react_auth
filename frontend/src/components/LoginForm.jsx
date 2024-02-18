const LoginForm = () => {
    return (
        <div className="flex justify-center items-center ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input type="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className='block text-gray-700 text-sm font-bold mb-2'>Password</label>
            <input type="password" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="password" />
          </div>
          <div className='flex items-center justify-between'>
          <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
          </div>
        </form>
      </div>
  );
};
export default LoginForm;