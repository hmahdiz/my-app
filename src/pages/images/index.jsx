import { SwipingImage, Carousel } from "../../components";
import "../../app/globals.css";

const products = [
  {
    id: 1,
    name: "",
    url: "https://via.placeholder.com/220/3d5db9?text=1",
  },
  {
    id: 2,
    name: "",
    url: "https://via.placeholder.com/220/3d5db9?text=2",
  },
  {
    id: 3,
    name: "",
    url: "https://via.placeholder.com/230/3d5db9?text=3",
  },
  {
    id: 4,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=4",
  },
  {
    id: 5,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=5",
  },
  {
    id: 6,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=6",
  },
  {
    id: 7,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=7",
  },
  {
    id: 8,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=8",
  },
  {
    id: 9,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=9",
  },
  {
    id: 10,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=10",
  },
  {
    id: 11,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=11",
  },
  {
    id: 12,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=12",
  },
  {
    id: 13,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=13",
  },
  {
    id: 14,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=14",
  },
  {
    id: 15,
    name: "",
    url: "https://via.placeholder.com/240/3d5db9?text=15",
  },
];

const Images = () => (
  <div>
    <SwipingImage products={products} />
    <Carousel products={products} />
  </div>
);

export default Images;
