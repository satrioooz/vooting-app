import React, { useContext, useEffect, useState } from "react";
import { isTemplateSpan } from "typescript";
import Data from "../Data.json";
import { IDataVote } from "../Types/Auth-type";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../Context/AuthContext";
const CardItems = () => {
  const { auth } = useContext(AuthContext);
  const [data, setData] = useState(Data);

  useEffect(() => {
    // const json = localStorage.setItem("items", JSON.stringify(Data));

    const localData = JSON.parse(localStorage.getItem("data") || "items");
    setData(localData);
  }, []);

  const handleVote = (item: IDataVote) => {
    if (auth.uid) {
      const DataVote = data.map((items: IDataVote) => {
        if (items._id === item._id) {
          items.votes = item.votes + 1;
        }
        return items;
      });
      let dataLocalStorage = localStorage.setItem(
        "data",
        JSON.stringify(DataVote)
      );
      const localData = JSON.parse(localStorage.getItem("data") || "[]");
      //   const Datas = JSON.parse(dataLocal);
      setData(localData);
    } else return toast.error("Please Login");
  };
  return (
    <div className="flex justify-center gap-3 xl:flex-row md:flex-row sm:flex-row lg:flex-row flex-col px-2 flex-wrap">
      <Toaster />
      {data.map((item, idx) => (
        <div
          key={idx}
          className="xl:w-[20%] lg:w-[20%] md:w-[20%] sm:w-[20%] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img className="rounded-t-lg" src={item.logo} alt="" />
          </a>
          <div className="p-5">
            <button
              onClick={() => handleVote(item)}
              className="bg-blue-500 w-full text-white font-semibold"
            >
              Vote
            </button>
            <div className="w-full  mt-4">
              <p className="font-bold tracking-tight text-gray-900 dark:text-white">
                Vote {item.votes}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItems;
