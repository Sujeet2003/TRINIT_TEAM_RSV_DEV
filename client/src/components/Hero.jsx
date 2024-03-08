import Button from "@mui/material/Button";

const Hero = () => {
  return (
    <div className="h-screen flex heroGradient text-center text-white items-center justify-center">
      <div className="my-1/2">
        <h1 className="text-6xl font-bold mb-4">Welcome to app</h1>
        <p className="text-4xl mb-6 text-white leading-10">
          Your Ultimate Test Generator for Effortless Assessments
        </p>
        <Button variant="contained" className="gradient" sx={{ fontSize: "20px" }}>
          Get Started Now
        </Button>
      </div>
    </div>
  );
};

export default Hero;
