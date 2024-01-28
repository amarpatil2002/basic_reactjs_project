import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  const data = useLoaderData()

  return (
    <div className="bg-gray-300 p-4 flex items-center flex-col">
      <h2 className="text-gray-700 p-4 text-3xl">Github Id : {data.login} </h2>
      <img src={data.avatar_url} width={250} alt="" />
    </div>
  );
};

export default Github;

export const apiDataLoader = async () => {
try {
        let apiData = await fetch("https://api.github.com/users/amarpatil2002")
        let res = await apiData.json();
        console.log(res);
        return res;
} catch (error) {
        console.log(error);
}

}
