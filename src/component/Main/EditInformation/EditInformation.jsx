import TextArea from "antd/es/input/TextArea";
import { IoChevronBack } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { imageBaseUrl } from "../../../config/imageBaseUrl";

const EditInformation = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="w-full">
      {/* Back Button and Title */}
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center my-6">
          <Link to="/addInformation">
            <IoChevronBack className="text-2xl" />
          </Link>
          <h1 className="text-2xl font-semibold">Edit Information</h1>
        </div>
      </div>

      {/* Profile Information */}
      <div className="w-3/4 mx-auto">
        {/* Profile Picture */}
        <div className="flex justify-start items-center  gap-5">
          <div className="flex justify-around items-center gap-10">
            <div className="w-[130px] h-[130px] rounded-full bg-primary">
              <img
                className="size-32 rounded-full mx-auto"
                src={`${imageBaseUrl}${user?.image?.url}`}
                alt=""
              />
            </div>
            <button className="px-8 py-3 bg-primary text-white rounded-lg ">
              Upload Photo
            </button>
            <span className="text-lg font-semibold uppercase">
              {user?.role}
            </span>
          </div>
        </div>

        {/* Personal Details */}
        <form className="full  space-y-6">
          <div className="space-y-3 md:flex w-full justify-between items-center">
            <div className="w-full md:w-[45%]">
              <label className="block text-sm font-semibold">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                defaultValue={user?.firstName}
                className="w-full border border-gray-300 rounded-lg px-5 py-3 bg-primary outline-none"
              />
            </div>
            <div className="w-full md:w-[45%]">
              <label className="block text-sm font-semibold">Last Name</label>
              <input
                type="text"
                defaultValue={user?.lastName}
                placeholder="Last name"
                className="w-full border border-gray-300 rounded-lg px-5 py-3 bg-primary outline-none"
              />
            </div>
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-semibold">Degree</label>
            <input
              type="email"
              defaultValue={user?.degree}
              placeholder="Degree"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 bg-primary outline-none"
            />
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-semibold">Experiences</label>
            <input
              type="text"
              placeholder="Experiences"
              defaultValue={user?.experiences}
              className="w-full border border-gray-300 rounded-lg px-5 py-3 bg-primary outline-none"
            />
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-semibold">
              Awards/Achievements
            </label>
            <input
              type="text"
              defaultValue={user?.awards}
              placeholder="Awards"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 bg-primary outline-none"
            />
          </div>
          <div className="space-y-3">
            <label className="block text-sm font-semibold">About Me</label>
            <TextArea
              type="text"
              defaultValue={user?.bio}
              placeholder="Bio"
              className="w-full border border-gray-300 rounded-lg px-5 py-3 bg-primary outline-none"
            />
          </div>
          <div className="flex justify-end">
              <button className="px-8 py-3 bg-primary text-white rounded-lg ">
                Update Profile
              </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditInformation;
