import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0 px-4">
        <div className="text-[#414141] text-center sm:text-left">
          {/* Bestseller Section */}
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base">OUR BESTSELLERS</p>
          </div>

          {/* Hero Title */}
          <h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
            Latest Arrivals
          </h1>

          {/* Shop Now Section */}
          <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
            <p className="font-semibold text-sm md:text-base cursor-pointer hover:underline">
              SHOP NOW
            </p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
          </div>
        </div>
      </div>

      {/* Hero Right */}
      <div className="w-full sm:w-1/2">
        <img
          className="w-full h-auto object-cover"
          src={assets.hero_img}
          alt="Hero"
        />
      </div>
    </div>
  );
};

export default Hero;
