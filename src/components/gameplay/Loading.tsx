const Loading = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center bg-gray-900 text-white px-4">
      {/* 로딩 텍스트 */}
      <h6 className="text-lg sm:text-xl md:text-2xl font-semibold mb-6 text-center">
        잠시만 기다려주세요.
      </h6>

      {/* 로딩 애니메이션 */}
      <div className="flex space-x-2 mb-6">
        <span className="w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-0"></span>
        <span className="w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-150"></span>
        <span className="w-3 h-3 bg-blue-400 rounded-full animate-bounce animation-delay-300"></span>
      </div>
    </div>
  );
};

export default Loading;
