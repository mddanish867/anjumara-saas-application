import Banner from "./Banner";
import Client from "./Client";
import Components from "../Components/ComponentSection";
import Interviews from "../Services/InterviewPrep/Interviews";
import Template from "../Templates/Template";
import TechNetworkDiagram from "../Footer/TechNetworkDiagram";
import TestimonialSlider from "../Common/TestimonialSlider";
import GlowingCard3D from "../Common/GlowingCard3D";
import AutoCompleteTextCard from "../Common/AutoCompleteTextCard";
import ApiCategoryCard from "../Common/ApiCategoryCard";
import AnimatedStatistics from "../Common/AnimatedStatistics";
import RealTimeCharts from "../Common/RealTimeCharts";
import FeedbackCard from "../Common/FeedbackCard";
import ReviewsCard from "../Common/ReviewsCard";
function Home() {
  return (
    <>
      <Banner />
      <Template />
      <Components />
      <Interviews />
      <Client />
      <TechNetworkDiagram/>
      <GlowingCard3D/>
      <AutoCompleteTextCard/>
      <AnimatedStatistics/>
      <RealTimeCharts/>
      <ApiCategoryCard/>
      <FeedbackCard/>
      <ReviewsCard/>
      <TestimonialSlider/>
    </>
  );
}

export default Home;
