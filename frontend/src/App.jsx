import React, { useContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import logo from "./assets/vite.svg";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import HomeScreen from "./screens/HomeScreen";
import { Store } from "./providers/Store";
import { useEffect } from "react";

const NavBarItem = ({ title, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>
);

// [] {}

const App = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);

  const { state, dispatch: ctxDispatch } = useContext(Store);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await Axios.get(`/api/products/categories`);

        setCategories(data);
      } catch (error) {}
    };
  }, [ctxDispatch]);

  console.log(data);

  return (
    <BrowserRouter>
      <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <Helmet>
            <title>Vite</title>
          </Helmet>
          <header>
            <nav className='w-full flex md:justify-center justify-between items-center p-4'>
              <div className='md:flex-[0.5] flex-initial justify-center items-center'>
                <img src={logo} alt='logo' className='w-32 cursor-pointer' />
              </div>
              <ul className='text-white md:flex hidden list-none flex-row justify-between items-center flex-initial'>
                {["item 1", "item 2", "item 3", "item 4"].map((item, index) => (
                  <NavBarItem key={item + index} title={item} />
                ))}
                <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                  Login
                </li>
              </ul>
              <div className='flex relative'>
                {!toggleMenu && (
                  <HiMenuAlt4
                    fontSize={28}
                    className='text-white md:hidden cursor-pointer'
                    onClick={() => setToggleMenu(true)}
                  />
                )}
                {toggleMenu && (
                  <AiOutlineClose
                    fontSize={28}
                    className='text-white md:hidden cursor-pointer'
                    onClick={() => setToggleMenu(false)}
                  />
                )}
                {toggleMenu && (
                  <ul
                    className='z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in'
                  >
                    <li className='text-xl w-full my-2'>
                      <AiOutlineClose onClick={() => setToggleMenu(false)} />
                    </li>
                    {["item 1", "item 2", "item 3", "item 4"].map(
                      (item, index) => (
                        <NavBarItem
                          key={item + index}
                          title={item}
                          classprops='my-2 text-lg'
                        />
                      )
                    )}
                    <li className='bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
                      Login
                    </li>
                  </ul>
                )}
              </div>
            </nav>
          </header>
          <main>
            <Routes>
              <Route path='/' element={<HomeScreen />}></Route>
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
