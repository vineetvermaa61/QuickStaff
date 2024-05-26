"use client";
import React, { useState } from "react";
import GlobalApi from "@/app/_services/GlobalApi";
// import { uploadToCloudinary } from "@/lib/utils";

const AddYourBusiness = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: null,
    address: "",
    service: "",
    aboutYou: "",
    profilePhoto: "",
    aadharFile: "",
    servicePhoto: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const localFilePath = URL.createObjectURL(files[0]); // Get local file path
    setFormData({ ...formData, [name]: localFilePath });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {
      name,
      email,
      phoneNumber,
      address,
      service,
      aboutYou,
      profilePhoto,
      aadharFile,
      servicePhoto,
    } = formData;

    try {
      // Once the files are uploaded to the server, you can then upload them to Cloudinary
      // const profilePhotoUrl = await uploadToCloudinary(formData.profilePhoto).url;
      // const aadharFileUrl = await uploadToCloudinary(formData.aadharFile).url;
      // const servicePhotoUrl = await uploadToCloudinary(formData.servicePhoto).url;

      // console.log("Files uploaded successfully:", profilePhotoUrl);
      // console.log("Files uploaded successfully:", aadharFileUrl);
      // console.log("Files uploaded successfully:", servicePhotoUrl);
      // console.log("Form data :", formData);
      GlobalApi.createServiceProvider(formData);
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   export const config = {
  //     api: {
  //       bodyParser: false,
  //     },
  //   };

  //   export default upload.fields([
  //     { name: 'profilePhoto', maxCount: 1 },
  //     { name: 'aadharFile', maxCount: 1 },
  //     { name: 'servicePhoto', maxCount: 1 },
  //   ]), async (req, res) => {
  //     try {
  //       const profilePhotoResult = await cloudinary.uploader.upload(req.files['profilePhoto'][0].buffer);
  //       const aadharFileResult = await cloudinary.uploader.upload(req.files['aadharFile'][0].buffer);
  //       const servicePhotoResult = await cloudinary.uploader.upload(req.files['servicePhoto'][0].buffer);

  //       const profilePhotoUrl = profilePhotoResult.secure_url;
  //       const aadharFileUrl = aadharFileResult.secure_url;
  //       const servicePhotoUrl = servicePhotoResult.secure_url;

  //       // Now you have the URLs of the uploaded files, you can use them as needed

  //       res.status(200).json({ profilePhotoUrl, aadharFileUrl, servicePhotoUrl });
  //     } catch (error) {
  //       console.error('Error uploading files to Cloudinary:', error);
  //       res.status(500).json({ error: 'Failed to upload files to Cloudinary' });
  //     }
  //   };

  //   const {
  //     name,
  //     email,
  //     phoneNumber,
  //     address,
  //     service,
  //     aboutYou,
  //     profilePhoto,
  //     aadharFile,
  //     servicePhoto,
  //   } = formData;

  //   try {
  //     const result = await GlobalApi.createServiceProvider(
  //       name,
  //       email,
  //       phoneNumber,
  //       address,
  //       service,
  //       aboutYou,
  //       aadharFile,
  //       profilePhoto,
  //       servicePhoto
  //     );
  //     console.log("Service provider created:", result);
  //     // Optionally, you can redirect or show a success message here
  //   } catch (error) {
  //     console.error("Error creating service provider:", error);
  //     // Optionally, you can show an error message here
  //   }
  // };

  return (
    <>
      <h2 className="text-2xl text-center font-extrabold text-gray-600 sm:text-3xl md:text-4xl">
        List As Service Provider
      </h2>
      <div className="flex mt-20 text-black border-red-700">
        <div className="left bg-gray-100 shadow-2xl rounded-lg overflow-hidde w-full ">
          <form className="py-4 px-6" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="shadow  bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow  bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="shadow  bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="tel"
                placeholder="Enter your phone number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                className="shadow  bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Enter your address"
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="service"
              >
                Service
              </label>
              <select
                className="shadow  bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select a service</option>
                <option value="Cleaner">Cleaner</option>
                <option value="Plumber">Plumber</option>
                <option value="Cook">Cook</option>
                <option value="Electrician">Electrician</option>
                <option value="Painter">Painter</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Gardener">Gardener</option>
                <option value="Shifting">Shifting</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-black font-bold mb-2"
                htmlFor="aboutYou"
              >
                About You
              </label>
              <textarea
                className="shadow  bg-gray-100 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
                id="aboutYou"
                rows="4"
                placeholder="Enter about yourself as service provider..."
                name="aboutYou"
                value={formData.aboutYou}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                htmlFor="profilePhoto"
                className="block text-md text-black font-semibold"
              >
                Upload Profile Photo
              </label>
              <input
                id="profilePhoto"
                type="file"
                className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-black hover:file:bg-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                name="profilePhoto"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="aadharFile"
                className="block text-md text-black font-semibold"
              >
                Upload Aadhar File
              </label>
              <input
                id="aadharFile"
                type="file"
                className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-black hover:file:bg-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                name="aadharFile"
                onChange={handleFileChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="servicePhoto"
                className="block text-md text-black font-semibold"
              >
                Upload Service Photo
              </label>
              <input
                id="servicePhoto"
                type="file"
                className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-black hover:file:bg-blue-500 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                name="servicePhoto"
                onChange={handleFileChange}
              />
            </div>

            <button className="mt-20 hover:shadow-form w-1/2 ml-40 rounded-md bg-gray-900 py-3 px-8 text-center font-semibold text-white outline-none">
              Submit
            </button>
          </form>
        </div>
        <div className="right w-[60%] ml-4">
          <img
             alt=""
             className="rounded-md"
             src="https://img.freepik.com/free-photo/portrait-factory-worker-with-arms-crossed-standing-by-industrial-machine-production-plant_342744-161.jpg?t=st=1714605982~exp=1714609582~hmac=3be42bcab8da680410a0055896a15aee01800ee38415065732d53ae4755a9f11&w=996"
          />
          <img
             alt=""
             className="rounded-md mt-10"
             src="https://img.freepik.com/free-photo/chef-working-together-professional-kitchen_23-2149727955.jpg?t=st=1714613471~exp=1714617071~hmac=8a78202ea8a038ce6870d26b89e9d42a45166080c56e15475ad67fdd191cb410&w=996"
          />
          <img
             alt=""
             className="rounded-md mt-10"
             src="https://img.freepik.com/free-photo/plumbing-professional-doing-his-job_23-2150721551.jpg?t=st=1714614189~exp=1714617789~hmac=75c8c2530a273e5e7f209ae1d9f1ff357ae108556afd5ccbe7fec68c790a16de&w=996"
           />
        </div>
      </div>
    </>
  );
};

export default AddYourBusiness;
