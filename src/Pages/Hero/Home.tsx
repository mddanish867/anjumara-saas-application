import Banner from "./Banner";
import Client from "./Client";
import Components from "../Components/ComponentSection";
import Interviews from "../Services/InterviewPrep/Interviews";
import Template from "../Templates/Template";
import TechNetworkDiagram from "../Footer/TechNetworkDiagram";
function Home() {
  return (
    <>
      <Banner />
      <Template />
      <Components />
      <Interviews />
      <Client />
      <TechNetworkDiagram/>
    </>
  );
}

export default Home;
