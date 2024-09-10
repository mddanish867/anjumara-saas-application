import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


function Template() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/section");
  };


  return (
    <div className="max-w-screen-xl mx-auto px-4 pt-4 md:px-8 mt-10">
        <div className="max-w-lg">
        <h1 className="text-3xl font-bold sm:text-5xl">
          Beautifully crafted UI components, ready for your next project.
        </h1>
        <p className="mt-2">
          Over 500+ professionally designed, fully responsive, expertly crafted
          component examples you can drop into your Tailwind projects and
          customize to your heart’s content.
        </p>
        <Button
          variant="link"
          className="text-start text-[#38bdf8] -ml-4 mt-4"
          onClick={handleClick}
        >
          Browse all questions <MoveRight className="ml-2" />
        </Button>
      </div>
        <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">   
  <div className="absolute top-[-20px] left-0 right-0 h-10 bg-gradient-to-b from-violet-500 to-transparent"></div>

    <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
      <li>
        <a href="#" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />          
        </a>
      </li>

      <li>
        <a href="#" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />         
        </a>
      </li>

      <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
        <a href="#" className="group relative block">
          <img
            src="https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80"
            alt=""
            className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
          />         
        </a>
      </li>
    </ul>
  </div>
</section>
      
      
    </div>
  );
}

export default Template;
