import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import MockOverview from "./pages/MockOverview";
import Review from "./pages/Review";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import MockTest from "./pages/MockTest";
import TestResult from "./pages/TestResult";



function App() {


  return (

    <Routes>

      <Route
        path="/"
        element={<MainLayout><Home /></MainLayout>}
      />

      <Route
        path="/mock-overview"
        element={<MainLayout><MockOverview /></MainLayout>}
      />

      <Route
        path="/review"
        element={<MainLayout><Review /></MainLayout>}
      />

      <Route
        path="/quiz"
        element={<MainLayout><Quiz /></MainLayout>}
      />
      
      <Route
        path="/mock-test"
        element={<MainLayout><MockTest /></MainLayout>}
      />

      <Route
        path="/result"
        element={<MainLayout><Result /></MainLayout>}
      />

      <Route
        path="/test-result"
        element={<MainLayout><TestResult /></MainLayout>}
      />


    </Routes>

  );

}

export default App;