export default function Popup({ show, onClose, title, message, buttonText }) {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] text-center animate-scaleIn">
        
        <h2 className="text-xl font-semibold mb-2">
          {title}
        </h2>
        
        <p className="text-gray-600 mb-4">
          {message}
        </p>

        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {buttonText || "OK"}
        </button>

      </div>
    </div>
  );
}