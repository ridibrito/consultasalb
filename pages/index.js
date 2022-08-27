import Navbar from "../components/navbar";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import CadastrarConsulta from "../components/CadastrarConsulta";
import Task from "../components/task";
import Card from "../components/card";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
  
      <Navbar show={showMenu} setShow={setShowMenu} />
      <div className="sm:bg-white sm:rounded sm:shadow-md sm:mt-5 sm:pb-5 sm:py-auto  items-center sm:flex sm:max-w-7xl sm:justify-center sm:mx-auto">
        <Card className="w-1/2" />
        <CadastrarConsulta className="w-1/2" />
      </div>
      <div className="sm:max-w-7xl sm:justify-center sm:mx-auto">
        <Task />
        <Task />
        <Task />
        <Task />
      </div>
    </>
  );
}
