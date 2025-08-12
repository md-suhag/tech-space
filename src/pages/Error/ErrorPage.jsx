import { Button } from "@/components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";
import notFounImg from "@/assets/not-found.svg";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center gap-4  py-6 h-screen justify-center">
      <div className="w-1/2 md:w-1/3 lg:w-1/5">
        <img src={notFounImg} alt="not found" />
      </div>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-xl font-bold">Something went wrong.</h1>
        <p className="font-medium">
          Sorry! We can't find the page you looking for.
        </p>
        <Button onClick={() => navigate(-1)} className="mt-4 md:text-base">
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default ErrorPage;
