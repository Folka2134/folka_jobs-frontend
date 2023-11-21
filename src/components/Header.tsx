import Logo from "../assets/Logo.png";

export const Header = () => {
  return (
    <div className="flex h-16 items-center justify-between bg-[#471ca8] py-8">
      <img src={Logo} width={64} height={64} alt="logo" />
      <div className="flex gap-4 pr-24">
        <button>sign-in</button>
        <button>sign-out</button>
      </div>
    </div>
  );
};
