import bgImage from "../../assets/images/bg1.png"
import PropTypes from "prop-types";

const DynamicBanner = ({title}) => {
  return (
    <div
      className="h-[40vh] bg-base-200 bg-no-repeat bg-left-bottom flex flex-col items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="font-extrabold text-2xl">
        {title}
      </h1>
    </div>
  );
};

DynamicBanner.proTypes = {
    title: PropTypes.string.isRequired,
}
export default DynamicBanner;
