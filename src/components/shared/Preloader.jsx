const Preloader = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-white z-50 fixed top-0 left-0">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-60"></div>
      <p className="mt-4 text-lg font-semibold text-blue-600 tracking-wide">Lifeline IT</p>
    </div>
  );
};

export default Preloader;