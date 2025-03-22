import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import axios from "axios";
import MenuList from "./MenuList";

const MenuButtons = () => {
  //popup menu
  const [menuPopup, setMenuPopup] = useState(false);
  const handleMenuPopup = () => {
    setMenuPopup(!menuPopup);
    setSelectedMenu(null);
  };
  const [showedMenu, setShowMenu] = useState(null);
 const handleShowMenu = (menu) => {
   setShowMenu(menu);
 }
  // create a menu
  const [menuData, setMenuData] = useState({
    name: "",
    description: "",
  });
  const handleChange = (e) => {
    setMenuData({
      ...menuData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/menus/`,
        menuData
      );
      console.log("Menu added successfully", response.data);
      fetchMenus();
      setMenuData({
        name: "",
        description: "",
      });
    } catch (error) {
      console.error("Error adding menu", error);
    }
  };
  //fetch all menus
  const [menus, setMenus] = useState([]);
  const fetchMenus = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/menus/`
      );
      console.log("Menus fetched successfully", response.data);
      setMenus(response.data);
    } catch (error) {
      console.error("Error fetching menus", error);
    }
  };
  useEffect(() => {
    fetchMenus();
    setShowMenu(menus[0]);
  }, []);

  // Track selected menu
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [menuItems, setMenuItems] = useState([]);
  // Fetch menu items when a menu is selected
  const handleMenuClick = async (menu) => {
    setSelectedMenu(menu);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/menus/${menu._id}`
      );
      console.log("Menu items fetched successfully", response.data);
      setMenuItems(response.data.items || []);
    } catch (error) {
      console.error("Error fetching menu items", error);
    }
  };

//   Create a new menu item
// State for adding menu items
const [menuItemData, setMenuItemData] = useState({ name: "", price: "", description: "" });

// Handle menu item input change
const handleMenuItemChange = (e) => {
  setMenuItemData({ ...menuItemData, [e.target.name]: e.target.value });
};

// Add new menu item
const addMenuItem = async (e) => {
  e.preventDefault();
//   console.log("Adding menu item", menuItemData);
  if (!selectedMenu) return;
  try {
    const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/menus/${selectedMenu?._id}/items`,
        menuItemData
      );
    console.log("Menu item added successfully", response.data);
    handleMenuClick(selectedMenu); 
    
    setMenuItemData({ name: "", price: "", description: "" });
  } catch (error) {
    console.error("Error adding menu item", error);
  }
};

 
  return (
    <>
      <div className="relative flex justify-center items-center w-full py-8  md:gap-5 gap-3 ">
      
        {menus &&
          menus.map((menu) => (
            <button
              key={menu?._id}
              onClick={() => handleShowMenu(menu)}
              className={`bg-black text-white md:px-14 px-8 text- py-3 md:py-4 border-1 border-blue-600 uppercase font-bold ${showedMenu?._id === menu?._id ? "bg-blue-600" : ""} `}
            >
              {menu?.name}
            </button>
          ))}

        <button
          onClick={handleMenuPopup}
          className="bg-black absolute  -top-16  text-white md:px-14 px-8 text- py-3 md:py-4 border-1 border-white uppercase font-bold flex items-center gap-2 "
        >
          <FaPlus className="text-2xl" />
          Add Menu
        </button>
      </div>
      {menuPopup && (
        <div className="absolute top-0 flex w-full   z-50 md:px-40 md:py-28">
          <div className="relative flex flex-col bg-black bg-opacity-30  py-10 border-1 w-full ">
            <h1 className="md:text-5xl text-4xl font-black uppercase text-center">
              Add Menu
            </h1>
            <IoMdClose
              className="absolute top-6 right-6 text-4xl text-white cursor-pointer"
              onClick={handleMenuPopup}
            />

            <form
              onSubmit={handleSubmit}
              className="flex flex-col border-b  gap-5  items-center w-full my-8"
            >
              <input
                type="text"
                className="bg-black border-1 border-white md:w-1/3 w-2/3 md:h-14 h-12 px-5"
                placeholder="Menu name"
                name="name"
                value={menuData.name}
                onChange={handleChange}
              />
              <input
                type="text"
                className="bg-black border-1 border-white md:w-1/3 w-2/3 md:h-14 h-12 px-5"
                placeholder="Description"
                name="description"
                value={menuData.description}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="bg-white text-black border-1 border-white md:w-1/3 w-2/3 md:h-14 h-12 px-5 uppercase font-bold text-lg"
              >
                Add Menu
              </button>
            </form>
            <div className="flex md:flex-row flex-col w-full overflow-y-auto">
              <div className="flex gap-5 md:flex-col px-5 md:w-1/5 md:border-e ">
                {menus &&
                  menus.map((menu) => (
                    <div className={`flex border-1 cursor-pointer ${
                        selectedMenu?._id === menu?._id ? "bg-gray-700" : ""
                      }`} key={menu?._id} onClick={() => handleMenuClick(menu)}>
                      <p className="uppercase py-3  px-10 font-bold md:text-lg">
                        {menu?.name}
                        
                      </p>
                    </div>
                  ))}
              </div>
              {selectedMenu && (
                <div className="md:w-4/5 w-full bg- p-5">
                  <h1 className="uppercase text-lg font-bold text-center">
                    Add {selectedMenu.name} item
                  </h1>
                  <form onSubmit={addMenuItem} className="px-10 flex flex-col py-5 border-b mb-5">
                    <div className="flex gap-5 ">
                      <input
                        type="text"
                        className="w-1/2 h-10 border-1 border-white px-5"
                        placeholder={`${selectedMenu.name} name`}
                        name="name"
                        value={menuItemData.name}
                        onChange={handleMenuItemChange}
                      />
                      <input
                        type="text"
                        className="w-1/2 h-10 border-1 border-white px-5"
                        placeholder="Price"
                        name="price"
                        value={menuItemData.price}
                        onChange={handleMenuItemChange}
                      />
                    </div>
                    <input
                      type="text"
                      className="w-full h-10 border-1 border-white px-5 my-5"
                      placeholder="Description"
                      name="description"
                      value={menuItemData.description}
                      onChange={handleMenuItemChange}
                    />
                    <button type="submit" className="bg-white text-black w-full h-12 uppercase font-bold">
                      Add {selectedMenu.name}
                    </button>
                  </form>

                  {/* Example food item */}
                  {menuItems && menuItems?.map((item) => (
                    <div className="flex flex-col py-3 border-b" key={item._id}>
                      <div className="flex justify-between py-2 px-5">
                        <p className="uppercase font-bold text-lg">{item.name}</p>
                        <p className="uppercase font-bold text-lg">${item.price}</p>
                      </div>
                      <p className="text-sm px-5">{item.description}</p>
                    </div>
                  ))}
                  {/* <div className="flex flex-col py-3 border-b">
                    <div className="flex justify-between py-2 px-5">
                      <p className="uppercase font-bold text-lg">Cinnamon toast crunch</p>
                      <p className="uppercase font-bold text-lg">$12</p>
                    </div>
                    <p className="text-sm px-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </div> */}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <MenuList selectedMenu={showedMenu || menus[0]} />
    </>
  );
};

export default MenuButtons;
