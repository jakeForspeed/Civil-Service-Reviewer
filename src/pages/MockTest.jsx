import { useNavigate } from "react-router-dom";


import MockHeader from "../components/mock/MockHeader";
import MockTimer from "../components/mock/MockTimer";

import useMockTest from '../hooks/useMockTest';

const MockTest = () => {

  const navigate = useNavigate();

  const { timeRemaining } = useMockTest();

  return (
    <div className=" flex flex-1 items-center justify-center">
      <div className=" w-full max-w-5xl">

        <MockHeader />

        <MockTimer timeRemaining={timeRemaining} />

      </div>
    </div>
  )
}

export default MockTest