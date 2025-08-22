import Spline from '@splinetool/react-spline';

const SplineBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Spline
        scene="https://prod.spline.design/T6q4iq-g9r-FGd4z/scene.splinecode" 
      />
    </div>
  );
};

export default SplineBackground;