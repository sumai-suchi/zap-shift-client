import logoImg from "../../../src/assets/allImages/logo.png";

const Logo = () => {
  return (
    <div className="flex justify-center items-center ">
      <img src={logoImg} alt="" />
      <h1 className="text-2xl font-bold -ml-5 text-secondary mt-2.5">
        ZapShift
      </h1>
    </div>
  );
};

export default Logo;
