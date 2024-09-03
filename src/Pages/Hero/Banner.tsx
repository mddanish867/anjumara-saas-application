import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/section");
  };
  return (
    <>
      <section className="overflow-hidden sm:grid sm:grid-cols-2 sm:items-center md:mt-14">
        <div className="absolute inset-0 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-3xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let's build your
              <strong className="block font-extrabold">
                components from scrach
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Beautifully designed, expertly crafted components. The perfect
              starting point for your next project/interview. This will help you
              to prepare the machine code interview preprations!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Button
              variant="default"
                className="flex w-full py-3 text-sm font-medium shadow sm:w-auto"
                onClick={handleClick}
              >
                Browse all questions <MoveRight className="ml-2" />
              </Button>

              <Button
                variant="outline"
                className="flex w-full py-3 text-sm font-medium shadow sm:w-auto"
              >
                Access all codes <MoveRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        <img
          alt=""
          src="/bannerimg.png"
          className="h-84 w-84  sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
      <span className="relative flex justify-start mt-10">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-75"></div>
        <span className="relative z-10 text-[#38bdf8] px-6 font-semibold text-start">
          Components
        </span>
      </span>
    </>
  );
}

export default Banner;
