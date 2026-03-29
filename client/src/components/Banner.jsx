import BannerItem from "./BannerItem";

export default function Banner({ setCategory }) {
  const banners = [
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/2d45541f8ccce9e6.png?q=60",
      category: "Appliances",
    },
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/acdf34b03c394077.png?q=60",
      category: "Beauty",
    },
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/75982b5a69e35140.png?q=60",
      category: "Electronics",
    },
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/3160/1540/image/00e93d725fea6750.png?q=60",
      category: "Mobiles",
    },
    {
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/896/438/image/b75744d4c8d94579.jpg?q=60",
      category: "Toys",
    },
  ];

  return (
    <div className=" flex gap-6 overflow-x-auto no-scrollbar scroll-smooth">
      {banners.map((banner, index) => (
        <BannerItem
          key={index}
          image={banner.image}
          onClick={() => setCategory(banner.category)}
        />
      ))}
    </div>
  );
}
