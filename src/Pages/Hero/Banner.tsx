import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";

function Banner() {
  return (
    <>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div className="max-w-3xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Let's build your
              <strong className="block font-extrabold text-gray-900">
                components from scrach{" "}
              </strong>
            </h1>

            <p className="mt-4 max-w-lg sm:text-xl/relaxed">
              Beautifully designed, expertly crafted components. The perfect
              starting point for your next project/interview. This will help you
              to prepare the machine code interview preprations!
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <Button className="flex w-full py-3 text-sm font-medium text-white shadow hover:bg-gray-700 focus:outline-none focus:ring active:bg-gray-700 sm:w-auto">
                Browse components <MoveRight className="ml-2" />
              </Button>

              <Button
                variant="outline"
                className="flex w-full py-3 text-sm font-medium text-gary-700 shadow sm:w-auto"
              >
                Access source code <MoveRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        <img
          alt=""
          src="https://images.unsplash.com/photo-1484959014842-cd1d967a39cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
        />
      </section>
      <span className="relative flex justify-start mt-10">
  <div
    className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-75"
  ></div>

  <span className="relative z-10 bg-white text-blue-500 px-6 font-semibold">Components</span>
</span>
    </>
  );
}

export default Banner;
