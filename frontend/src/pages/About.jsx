import Title from '../components/Title';
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1="ABOUT" text2="US" />
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className="w-full md:max-w-[450px]" src={assets.about_img} alt="About Us" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Ocean was created with a vision to transform the way people shop online. Like the vastness of the sea, 
            we aim to offer a wide array of products that cater to every need and preference, all from the comfort of your home.
          </p>
          <p>
            From the outset, our mission has been to provide an expansive collection of high-quality items sourced 
            from trusted brands and suppliers. Whether it’s fashion, beauty, electronics, or home essentials, Ocean 
            is your destination for discovering the best products in one place.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            At Ocean, our mission is to empower shoppers with limitless options, unparalleled convenience, 
            and a seamless online experience. We strive to make every step of your journey—from browsing to 
            delivery—a memorable and satisfying one.
          </p>
        </div>
      </div>

      <div className="text-xl py-4">
        <Title text1="WHY" text2="CHOOSE US" />
      </div>

      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Unmatched Quality:</b>
          <p className="text-gray-600">
            Every product is carefully selected and tested to ensure it meets Ocean’s high standards of quality and reliability.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Seamless Convenience:</b>
          <p className="text-gray-600">
            With our user-friendly platform and streamlined process, shopping is easy and stress-free.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Support:</b>
          <p className="text-gray-600">
            Our dedicated team is here to assist you every step of the way, ensuring your satisfaction remains our top priority.
          </p>
        </div>
      </div>

      <NewsletterBox />
    </div>
  );
};

export default About;
