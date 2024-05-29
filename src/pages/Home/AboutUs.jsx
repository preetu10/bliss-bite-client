/* eslint-disable react/no-unescaped-entities */
const AboutUs = () => {
  return (
    <div className=" p-5 rounded-2xl my-5 ">
      <h1 className="text-center text-3xl font-bold mt-3 mb-5 text-[#F5A834]">
        About Us
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-12 max-w-3xl mx-auto ">
      Our platform connects those with surplus food to those in need, aiming to reduce food waste and fight hunger. Join us in building a sustainable community where every meal counts.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 md:flex-row gap-5 items-center justify-center">
        {/* 1st */}
        <div className="card p-4 h-[250px] lg:h-[200px] bg-red-50 shadow-2xl shadow-red-100">
          <div className="card-body">
            <h2 className="card-title">Our Mission</h2>
            <p>
              We aim to reduce food waste and fight hunger by connecting surplus
              food with those in need. Join us in creating a sustainable,
              compassionate community.
            </p>
          </div>
        </div>
        {/* 2nd */}
        <div className="card p-4 h-[250px] lg:h-[200px] bg-amber-100 shadow-2xl shadow-amber-100">
          <div className="card-body">
            <h2 className="card-title">How It Works</h2>
            <p>
              Easily share or find surplus food through our platform. List
              excess items or browse available donations to help reduce waste
              and support others.
            </p>
          </div>
        </div>

        <div className="card p-4 h-[250px] lg:h-[200px] bg-sky-100 shadow-2xl shadow-sky-100">
          <div className="card-body">
            <h2 className="card-title">Our Impact</h2>
            <p>
              We've redirected thousands of pounds of food from landfills to
              people in need. Our community-driven approach is making a
              significant difference in reducing waste.{" "}
            </p>
          </div>
        </div>
        <div className="card p-4 h-[250px] lg:h-[200px] bg-green-100 shadow-2xl shadow-green-100">
          <div className="card-body">
            <h2 className="card-title">Join Our Community</h2>
            <p>
              Become part of our mission by sharing surplus food or finding
              resources to support your family. Together, we can ensure no food
              goes to waste
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
