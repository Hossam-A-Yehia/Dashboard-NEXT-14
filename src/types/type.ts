export type users = {
  _id: string;
  username: string;
  email: string;
  password: string;
  img: string;
  isAdmin: boolean;
  isActive: boolean;
  phone: number;
  address: string;
};

export type ProductsType = {
  createdAt: string;
  _id: string;
  title: string;
  desc: string;
  price: number;
  stock: number;
  img: string;
  color: string;
  size: string;
};
