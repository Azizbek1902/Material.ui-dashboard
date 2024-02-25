import { MdDisabledVisible } from "react-icons/md"; 
import { AiOutlineFile } from "react-icons/ai";
import { CgArrowTopRightR } from "react-icons/cg";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import { RiMenu4Fill } from "react-icons/ri";
import { BsFileLock } from "react-icons/bs";
import { BsTvFill } from "react-icons/bs";
import { BiCalendar } from "react-icons/bi";
import { GrChat } from "react-icons/gr";
import { BiMailSend } from "react-icons/bi";
import { GiGolfFlag } from "react-icons/gi";
import { FaShoppingBag } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { CgShoppingCart } from "react-icons/cg";
import { GiClothesline } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { AiFillCodeSandboxSquare } from "react-icons/ai";
import { BsBank } from "react-icons/bs";
import { AiOutlineAreaChart } from "react-icons/ai";
import { RiShoppingBagLine } from "react-icons/ri";
import { AiFillDashboard } from "react-icons/ai";
export default [
  {
    id: 1,
    icon: <AiFillDashboard size={20}/>,
    title: "App",
    href: "/",
  },
  {
    id: 2,
    icon: <RiShoppingBagLine size={20}/>,
    title: "E-Commerce",
    href: "/",
  },
  {
    id: 3,
    icon: <AiOutlineAreaChart size={20}/>,
    title: "Analytics",
    href: "/",
  },
  {
    id: 4,
    icon: <BsBank size={20}/>,
    title: "Banking",
    href: "/",
  },
  {
    id: 5,
    icon: <AiFillCodeSandboxSquare size={20}/>,
    title: "Booking",
    href: "/",
  },
  {
    id: 6,
    icon: <BsFillFileEarmarkTextFill size={20}/>,
    title: "File",
    href: "/",
  },
  {
    id: 7,
    desc: "Management",
    href: "/",
  },
  {
    id: 8,
    icon: <FaUserAlt size={20}/>,
    title: "User",
    data: [
      { id: 1, href: "/", name: "Profile" },
      { id: 2, href: "/", name: "Cards" },
      { id: 3, href: "/", name: "List" },
      { id: 4, href: "/", name: "Create" },
      { id: 5, href: "/", name: "Edit" },
      { id: 6, href: "/", name: "Account" },
    ],
  },
  {
    id: 9,
    icon: <GiClothesline size={20}/>,
    title: "Product",
    data: [
      { id: 1, href: "/", name: "List" },
      { id: 2, href: "/", name: "Details" },
      { id: 4, href: "/", name: "Create" },
      { id: 5, href: "/", name: "Edit" },
    ],
  },
  {
    id: 10,
    icon: <CgShoppingCart size={20}/>,
    title: "Order",
    data: [
      { id: 1, href: "/", name: "List" },
      { id: 2, href: "/", name: "Details" },
    ],
  },
  {
    id: 11,
    icon: <FaFileInvoiceDollar size={20}/>,
    title: "Invoice",
    data: [
      { id: 1, href: "/", name: "List" },
      { id: 2, href: "/", name: "Details" },
      { id: 4, href: "/", name: "Create" },
      { id: 5, href: "/", name: "Edit" },
    ],
  },
  {
    id: 12,
    icon: <FaBlog size={20}/>,
    title: "Blog",
    data: [
      { id: 1, href: "/", name: "List" },
      { id: 2, href: "/", name: "Details" },
      { id: 4, href: "/", name: "Create" },
      { id: 5, href: "/", name: "Edit" },
    ],
  },
  {
    id: 13,
    icon: <FaShoppingBag size={20}/>,
    title: "Job",
    data: [
      { id: 1, href: "/", name: "List" },
      { id: 2, href: "/", name: "Details" },
      { id: 4, href: "/", name: "Create" },
      { id: 5, href: "/", name: "Edit" },
    ],
  },
  {
    id: 14,
    icon: <GiGolfFlag size={20}/>,
    title: "File Manager",
    href: "/",
  },
  {
    id: 15,
    icon: <BiMailSend size={20}/>,
    title: "Mail",
    href: "/",
  },
  {
    id: 16,
    icon: <GrChat size={20}/>,
    title: "Chat",
    href: "/",
  },
  {
    id: 17,
    icon: <BiCalendar size={20}/>,
    title: "Calendar",
    href: "/",
  },
  {
    id: 18,
    icon: <BsTvFill size={20}/>,
    title: "Kanban",
    href: "/",
  },
  {
    id: 19,
    desc: "OTHER CASES",
    href: "/",
  },
  {
    id: 20,
    icon: <BsFileLock size={20}/>,
    title: "Item By Roles",
    title2: "Only admin can see this item",
    href: "/",
  },
  {
    id: 21,
    icon: <RiMenu4Fill size={20}/>,
    title: "Menu Level",
    data: [
      { id: 1, href: "/", name: "Menu level 1a" },
      { id: 5, href: "/", name: "Menu level 1b" },
    ],
  },
  {
    id: 22,
    icon: <MdDisabledVisible size={20} />,
    title: "Item Disabled",
    href: "/",
    disabled: true,
  },
  {
    id: 23,
    icon: <BsFillBookmarkStarFill size={20}/>,
    title: "Item Label",
    href: "/",
    newItem: true,
  },
  {
    id: 24,
    icon: <RiMenu4Fill size={20}/>,
    title: "Item Caption",
    title2: "Quisque malesuada placerant nisbat",
    href: "/",
  },
  {
    id: 25,
    icon: <CgArrowTopRightR size={20}/>,
    title: "Item External Link",
    href: "/",
  },
  {
    id: 26,
    icon: <AiOutlineFile size={20}/>,
    title: "Blank",
    href: "/",
  },
];
