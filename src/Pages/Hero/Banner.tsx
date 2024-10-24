import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { decodeToken } from "../helper/decodedToke";
import { motion } from "framer-motion";

function Banner() {
  const navigate = useNavigate();
  const decodedToken = decodeToken();

  const handlebrowseComponentClick = () => {
    
      navigate("/all-components");
   
  };

  const handleAllAccess = () => {
    if (!decodedToken) {
      navigate("/signin");
    } else {
      navigate("/all-access");
    }
  };

  return (
    <>
      <section
        className="flex items-center justify-center h-screen w-full"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      >
        <div className="relative mx-auto w-full px-4 py-32 sm:px-6 lg:flex lg:h-full lg:items-center lg:px-8">
          <div className="max-w-full text-center">
            <motion.h1
              className="block font-bold pl-8 pr-8 text-3xl sm:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Building Better, Faster,
              <br /> and <span className="text-[#38bdf8]">Smarter</span> with
              Every <span className="text-[#38bdf8]">Components</span> for
              Streamlined Success
            </motion.h1>

            <motion.p
              className="mt-4 max-w-3xl mx-auto sm:text-xl/relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Beautifully designed, expertly crafted components. The perfect
              starting point for your next project/interview. This will help you
              to prepare for the machine code interview preparations!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-4 text-center"
            >
              <Button
                variant="default"
                className="flex w-full py-3 text-sm font-medium shadow sm:w-auto"
                onClick={handlebrowseComponentClick}
              >
                Browse Components <MoveRight className="ml-2" />
              </Button>

              <Button
                variant="link"
                className="flex w-full py-3 text-sm font-medium sm:w-auto text-[#38bdf8]"
                onClick={handleAllAccess}
              >
                Get all access <MoveRight className="ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* <span className="relative flex justify-start -mt-20">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-[#38bdf8] to-transparent opacity-75"></div>
        <span className="relative z-10 text-[#38bdf8] px-6 font-semibold text-start">
          Components
        </span>
      </span> */}
    </>
  );
}

export default Banner;
