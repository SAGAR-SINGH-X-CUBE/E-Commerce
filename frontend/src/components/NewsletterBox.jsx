const NewsletterBox = () => {
  const onSubmitHandler =(event)=>{
    event.preventDefault();

  }




  return (
    <div className="bg-gray-100 py-10 px-6 sm:px-10 rounded-lg shadow-md w-full max-w-lg mx-auto text-center">
      <p className="text-2xl font-semibold text-gray-800">Subscribe Now and Get 20% Off</p>
      <p className="text-gray-500 mt-3 text-sm sm:text-base">
        Stay updated with our latest offers and exclusive discounts. Join our newsletter today!
      </p>
      <form onSubmit={onSubmitHandler} className="mt-6 flex flex-col sm:flex-row items-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
          required
        />
       <button
  type="submit"
  className="px-6 py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition duration-300"
>
  SUBSCRIBE
</button>

      </form>
    </div>
  );
};

export default NewsletterBox;
