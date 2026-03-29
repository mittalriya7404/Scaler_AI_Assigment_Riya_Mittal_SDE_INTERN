export default function CategoryItem({ icon, label, active, onClick }) {





  
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center cursor-pointer group"
    >
      {/* Icon circle */}
      <div
        className={`w-10 h-10 flex items-center justify-center 
        ${active ? "bg-blue-100" : "bg-white"} 
        group-hover:bg-blue-50 transition`}
      >
        <img src={icon} alt={label} className="h-8 object-contain" />
      </div>

      {/* Label */}
      <p
        className={`text-sm mt-1 ${
          active ? "text-blue-600 font-medium" : "text-gray-700"
        }`}
      >
        {label}
      </p>

      {/* Bottom underline (active indicator) */}
      {active && <div className="h-[2px] w-10 bg-blue-600 mt-1 rounded"></div>}
    </div>
  );
}
