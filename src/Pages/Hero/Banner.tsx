import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/section");
  };

  const handleAllAccess = () => {
    navigate("/all-access");
  };

  return (
    <>
      <section className="flex items-center justify-center h-screen w-full">
  <div className="relative mx-auto w-full px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
    <div className="max-w-full text-center">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        <strong className="block font-extrabold">
          Your All-in-One Toolkit for{" "}
          <span className="text-[#38bdf8]">Streamlined</span> <span className="text-[#38bdf8]">Success.</span>
          Building Better, Faster, and Smarter with Every Component
        </strong>
      </h1>

      <p className="mt-4 max-w-3xl mx-auto sm:text-xl/relaxed">
        Beautifully designed, expertly crafted components. The perfect starting
        point for your next project/interview. This will help you to prepare for
        the machine code interview preparations!
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4 text-center">
        <Button
          variant="default"
          className="flex w-full py-3 text-sm font-medium shadow sm:w-auto"
          onClick={handleClick}
        >
          Browse all components <MoveRight className="ml-2" />
        </Button>

        <Button
          variant="outline"
          className="flex w-full py-3 text-sm font-medium shadow sm:w-auto"
          onClick={handleAllAccess}
        >
          Get all access <MoveRight className="ml-2" />
        </Button>
      </div>
    </div>
  </div>
</section>


      <span className="relative flex justify-start -mt-20">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-75"></div>
        <span className="relative z-10 text-[#38bdf8] px-6 font-semibold text-start">
          Components
        </span>
      </span>
    </>
  );
}

export default Banner;
