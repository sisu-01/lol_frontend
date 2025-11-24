interface AdModalProps {
  modalChoice: (choice: boolean) => void;
}

const Admodal = ({ modalChoice }: AdModalProps ) => {

  const showAd = () => {
    alert("대충 광고");
    modalChoice(true);
  }
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50">
      <div className="bg-white shadow-2xl p-6 w-80 text-center">
        <div className="text-lg font-semibold mb-4">
          광고 보고 목숨 연장하기?
        </div>
        <div className="flex justify-around">
          <button className=" bg-blue-500 text-white hover:bg-blue-600 transition" onClick={() => showAd()}>
            예
          </button>
          <button className=" bg-gray-200 text-gray-700 hover:bg-gray-300 transition" onClick={() => modalChoice(false)}>
            아니오
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admodal;