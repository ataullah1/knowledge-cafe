import profile from '../assets/img/profile1.svg';

const Header = () => {
  return (
    <div className="flex justify-between items-center pt-5 md:pt-8 mb-4 md:mb-8 pb-3 border-b">
      <h1 className="text-neutral-900 text-2xl sm:text-[40px] font-bold">
        Knowledge Cafe
      </h1>
      <img
        className="w-11 sm:w-[60px] h-11 sm:h-[60px] rounded-full"
        src={profile}
      />
    </div>
  );
};

export default Header;
