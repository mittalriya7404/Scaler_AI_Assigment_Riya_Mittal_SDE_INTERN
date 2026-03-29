export default function BannerItem({ image , onClick}) {
  return (
    <div className="flex-shrink-0 w-[280px] sm:w-[360px] md:w-[450px] h-40 sm:h-48 md:h-60 rounded-xl overflow-hidden" onClick={onClick}>
      <img src={image} alt="banner" className=" rounded-xl object-cover" />
    </div>
  );
}
