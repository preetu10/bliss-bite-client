/* eslint-disable react/no-unescaped-entities */

const OurTeam = () => {
  return (
    <div className="mb-12">
      <h1 className="text-center text-3xl font-bold mt-3 mb-5 text-[#F5A834]">
        At A Glance
      </h1>
      <p className="text-center px-4 text-base text-gray-500 font-medium mb-12 max-w-3xl mx-auto ">
        Let's have a look at the faces behind this wonderful thought and
        initiative.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-center">
        <div className="col-span-3">
          <img src="imtiaz.png" alt="" className="mx-auto" />
          <p className="text-center font-semibold mt-2">Imtiaz Hossain</p>
          <p className="text-center text-neutral-600 font-medium mt-1">
            Founder, BlissBite
          </p>
        </div>
        <div className=" col-span-3 grid grid-cols-1 lg:grid-cols-2 gap-7 mx-auto items-center justify-center mt-2 ">
          <div className="">
            <img src="khan.png" alt="" className="mx-auto" />
            <p className="text-center font-semibold mt-2">Imtiaz Hossain</p>
            <p className="text-center text-neutral-600 font-medium mt-1">
              Co-Founder, BlissBite
            </p>
          </div>
          <div>
              <img src="jubair.png " alt="" />
              <p className="text-center font-semibold mt-2">Monir Ahmed</p>
              <p className="text-center font-medium mt-1 text-neutral-600">
               Co-Founder, BlissBite
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
