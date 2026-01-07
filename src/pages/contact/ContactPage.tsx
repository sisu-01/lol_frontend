const Contact = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto text-gray-800 leading-relaxed overflow-y-auto h-full">
      <h1 className="text-2xl font-bold mb-6 text-white">Contact Us</h1>

      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="mb-6">
          <span className="text-5xl">✉️</span>
        </div>
        <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
        <p className="mb-6 text-gray-600">
          If you have any questions, suggestions, or bug reports regarding our games, 
          please feel free to contact us. We usually respond within 24-48 hours.
        </p>
        
        <div className="inline-block bg-gray-100 p-4 rounded-lg border border-gray-200">
          <p className="text-sm text-gray-500 mb-1">Email Address</p>
          <a 
            href="mailto:your-email@example.com" 
            className="text-xl font-bold text-blue-600 hover:underline"
          >
            tesv010615@gmail.com {/* 여기에 본인 이메일을 적으세요 */}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-100 text-left text-sm text-gray-500">
          <h3 className="font-semibold text-gray-700 mb-2 italic">한국어 안내</h3>
          <p>게임 이용 중 불편한 점이나 제안 사항이 있으시면 위 이메일로 연락 주시기 바랍니다. 확인 후 빠르게 답변 드리겠습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;