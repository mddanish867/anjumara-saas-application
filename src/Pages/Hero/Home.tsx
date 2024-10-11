import Banner from "./Banner";
import Client from "./Client";
import Components from "../Components/ComponentSection";
import Interviews from "../Services/InterviewPrep/Interviews";
import Template from "../Templates/Template";
function Home() {
  return (
    <>
      <Banner />
      <Template />
      <Components />
      <Interviews />
      <Client />
    </>
  );
}

export default Home;
