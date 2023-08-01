import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useDarkMode from "../Hooks/useDarkMode";
import taskIcon from "../assets/icon-tasks.svg";
import dayIcon from "../assets/icon-day.svg";
import nightIcon from "../assets/icon-night.svg";
import hideSidebarIcon from "../assets/icon-arrow-left.svg";
import showSidebarIcon from "../assets/icon-arrow-right.svg";
import { Switch } from "@headlessui/react";
import boardsSlice from "../redux/boardsSlice";
import AddEditBoardModal from "../modals/AddEditBoardModal";

function Sidebar({ setIsSideBarOpen, isSideBarOpen }) {
  const dispatch = useDispatch();
  const [boardModalOpen, setBoardModalOpen] = useState(false);
  const [colorTheme, setTheme] = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  const boards = useSelector((state) => state.boards);

  return (
    <div>
      <div
        className={
          isSideBarOpen
            ? `min-w-[261px] bg-white dark:bg-[#2b2c37] fixed top-[72px] h-screen  items-center left-0 z-20`
            : ` bg-[#38ada9] dark:bg-[#2b2c37] dark:hover:bg-[#38ada9] top-auto bottom-10 justify-center items-center hover:opacity-80 cursor-pointer  p-0 transition duration-300 transform fixed felx w-[56px]  h-[48px] rounded-r-full  `
        }
      >
        <div>
          {/* Boards */}

          {isSideBarOpen && (
            <div className=" bg-white  dark:bg-[#2b2c37] w-full py-4 rounded-xl">
              <h3 className=" dark:text-gray-300 text-gray-600 font-semibold mx-4 mb-8 ">
                ALL BOARDS ({boards?.length})
              </h3>

              <div className="flex flex-col h-[70vh]  justify-between ">
                <div>
                  {boards.map((board, index) => (
                    <div
                      className={` flex items-baseline space-x-2 px-5 mr-8 rounded-r-full duration-500 ease-in-out py-4 cursor-pointer hover:bg-[#38ada91a] hover:text-[#38ada9] dark:hover:bg-white dark:hover:text-[#38ada9] dark:text-white  ${
                        board.isActive &&
                        " bg-[#38ada9] rounded-r-full text-white mr-8 "
                      } `}
                      key={index}
                      onClick={() => {
                        dispatch(boardsSlice.actions.setBoardActive({ index }));
                      }}
                    >
                      <img src={taskIcon} className="  filter-white  h-4 " />{" "}
                      <p className=" text-lg font-bold ">{board.name}</p>
                    </div>
                  ))}

                  <div
                    className=" flex  items-baseline space-x-2  mr-8 rounded-r-full duration-500
                     ease-in-out cursor-pointer text-[#38ada9] px-5 py-4 hover:bg-[#38ada91a] 
                     hover:text-[#38ada9] dark:hover:bg-white  "
                    onClick={() => {
                      setBoardModalOpen(true);
                    }}
                  >
                    <img src={taskIcon} className="filter-white  h-4 " />
                    <p className=" text-lg font-bold  ">Create New Board </p>
                  </div>
                </div>

                <div
                  className=" mx-2  p-4 relative space-x-2 bg-slate-100 
                dark:bg-[#20212c] flex justify-center items-center rounded-lg"
                >
                  <img src={dayIcon} className=" w-4" />

                  <Switch
                    checked={darkSide}
                    onChange={toggleDarkMode}
                    className={`${
                      darkSide ? "bg-[#38ada9]" : "bg-gray-200"
                    } relative inline-flex h-6 w-11 items-center rounded-full`}
                  >
                    <span
                      className={`${
                        darkSide ? "translate-x-6" : "translate-x-1"
                      } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                    />
                  </Switch>

                  <img src={nightIcon} />
                </div>
              </div>
            </div>
          )}

          {/* Sidebar hide/show */}
          {isSideBarOpen ? (
            <div
              onClick={() => setIsSideBarOpen((state) => !state)}
              className=" flex  items-center mt-2  absolute bottom-16  text-lg font-bold  
              rounded-r-full hover:text-[#38ada9] cursor-pointer mr-6 mb-8 px-8 py-4 
              hover:bg-[#38ada91a] dark:hover:bg-white  space-x-2 justify-center  my-4 
              text-gray-500 "
            >
              <img
                className=" min-w-[20px]"
                src={hideSidebarIcon}
                alt=" side bar show/hide"
              />
              {isSideBarOpen && <p> Hide Sidebar </p>}
            </div>
          ) : (
            <div
              className=" absolute p-4 ml-1 h-12"
              onClick={() => setIsSideBarOpen((state) => !state)}
            >
              <img
                className=" min-w-[17px]"
                src={showSidebarIcon}
                alt="showSidebarIcon"
              />
            </div>
          )}
        </div>
      </div>

      {boardModalOpen && (
        <AddEditBoardModal type="add" setBoardModalOpen={setBoardModalOpen} />
      )}
    </div>
  );
}

export default Sidebar;
