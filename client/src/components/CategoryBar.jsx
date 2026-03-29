import CategoryItem from "./CategoryItem";

export default function CategoryBar({ category, setCategory }) {
  const categories = [
    {
      name: "For You",
      icon: "https://img.icons8.com/?size=100&id=5ueBhwT0NbKz&format=png&color=000000",
    },

    {
      name: "Fashion",
      icon: "https://img.icons8.com/?size=100&id=81863&format=png&color=000000",
    },
    {
      name: "Mobile",
      icon: "https://img.icons8.com/?size=100&id=gfuiz9qvfD0W&format=png&color=000000",
    },
    {
      name: "Beauty",
      icon: "https://img.icons8.com/?size=100&id=8242&format=png&color=000000",
    },
    {
      name: "Electronics",
      icon: "https://img.icons8.com/ios-filled/50/laptop.png",
    },

    {
      name: "Home",
      icon: "https://img.icons8.com/?size=100&id=9rWlvh2rz07g&format=png&color=000000",
    },
    {
      name: "Appliances",
      icon: "https://img.icons8.com/?size=100&id=86625&format=png&color=000000",
    },

    {
      name: "Toys",
      icon: "https://img.icons8.com/?size=100&id=s8hRZOgizG0b&format=png&color=000000",
    },
    {
      name: "Food",
      icon: "https://img.icons8.com/?size=100&id=d1F7BVHShn7N&format=png&color=000000",
    },
    {
      name: "Auto Acc...",
      icon: "https://img.icons8.com/?size=100&id=21814&format=png&color=000000",
    },
    {
      name: "2Wheelers",
      icon: "https://img.icons8.com/?size=100&id=259&format=png&color=000000",
    },
    {
      name: "Sports",
      icon: "https://img.icons8.com/?size=100&id=wVZrFeRov1GH&format=png&color=000000",
    },
    {
      name: "Books",
      icon: "https://img.icons8.com/?size=100&id=42763&format=png&color=000000",
    },
    {
      name: "Furniture",
      icon: "https://img.icons8.com/?size=100&id=547&format=png&color=000000",
    },
  ];

  return (
    <div className="flex gap-8 overflow-x-auto justify-between py-2 px-2 mb-4 bg-white border-t border-b border-gray-300  no-scrollbar">
      {categories.map((c, i) => (
        <CategoryItem
          key={i}
          icon={c.icon}
          label={c.name}
          active={category === c.name}
          onClick={() => setCategory(c.name === "For You" ? "" : c.name)}
        />
      ))}
    </div>
  );
}
