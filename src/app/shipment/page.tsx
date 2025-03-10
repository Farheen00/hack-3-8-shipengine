// // "use client";
// // import React, { useState } from "react";
// // import axios from "axios";
// // import Link from "next/link";
// // import { Address, Rate, trackingObjType } from "../../../type";
// // import { cartProductsWhichCanBeShipped } from "../../../data";




// // const ShippingRatesPage = () => {
// //   // to ship address
// //   // i added defualt address which help you understand structure of address
// //   const [shipeToAddress, setshipeToAddress] = useState<Address>({
// //     name: "John Doe",
// //     phone: "+1 555-678-1234",
// //     addressLine1: "1600 Pennsylvania Avenue NW",
// //     addressLine2: "", // Optional
// //     cityLocality: "Washington",
// //     stateProvince: "DC",
// //     postalCode: "20500",
// //     countryCode: "US",
// //     addressResidentialIndicator: "no", // 'no' means a commercial address
// //   });

// //   const [rates, setRates] = useState<Rate[]>([]);
// //   const [rateId, setrateId] = useState<string | null>(null);
// //   const [labelPdf, setLabelPdf] = useState<string | null>(null);
// //   const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
// //   const [loading, setLoading] = useState(false);
// //   const [errors, setErrors] = useState<string[]>([]);

// //   // Function to handle form submission of shipping rates
// //   const handleSubmit = async (e: React.FormEvent) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setErrors([]);
// //     setRates([]);

// //     try {
// //       const response = await axios.post("/api/shipengine/get-rates", {
// //         shipeToAddress,
// //         // map the cart products which can be shipped and use only weight and dimensions
// //         packages: cartProductsWhichCanBeShipped.map((product) => ({
// //           weight: product.weight,
// //           dimensions: product.dimensions,
// //         })),
// //       });
// //       // see the response in browser
// //       console.log(response.data);
// //       // Update the state with the fetched rates
// //       setRates(response.data.shipmentDetails.rateResponse.rates);
// //     } catch (error) {
// //       console.log(error);
// //       setErrors(["An error occurred while fetching rates."]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Function to create label from selected rate
// //   const handleCreateLabel = async () => {
// //     if (!rateId) {
// //       alert("Please select a rate to create a label.");
// //     }

// //     setLoading(true);
// //     setErrors([]);

// //     try {
// //       // get rateId which user selected
// //       const response = await axios.post("/api/shipengine/label", {
// //         rateId: rateId,
// //       });
// //       const labelData = response.data;
// //       // see the response of label in browser
// //       console.log(labelData);
// //       // set pdf url
// //       setLabelPdf(labelData.labelDownload.href);
// //       // set tracking obj
// //       setTrackingObj({
// //         trackingNumber: labelData.trackingNumber,
// //         labelId: labelData.labelId,
// //         carrierCode: labelData.carrierCode,
// //       });
// //     } catch (error) {
// //       console.log(error);
// //       setErrors(["An error occurred while creating the label."]);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen text-black bg-gray-100 mt-6 py-14 px-28 sm:px-6 lg:px-8 w-[850px] sm:w-full mx-auto max-w-7xl ">
// //       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
// //         <h1 className="text-3xl font-bold text-gray-900 mb-6">
// //           Shipping Rates Calculator
// //         </h1>

// //         {/* Form Section */}
// //         <form onSubmit={handleSubmit} className="space-y-6">
// //           {/* To Address Section */}
// //           <div>
// //             <h2 className="text-xl font-semibold text-gray-800 mb-4">
// //               Ship To Address
// //             </h2>
// //             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //               <input
// //                 type="text"
// //                 placeholder="Name"
// //                 value={shipeToAddress.name}
// //                 onChange={(e) =>
// //                   setshipeToAddress({ ...shipeToAddress, name: e.target.value })
// //                 }
// //                 className="p-2 border border-gray-300 rounded-md"
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="Phone"
// //                 value={shipeToAddress.phone}
// //                 onChange={(e) =>
// //                   setshipeToAddress({
// //                     ...shipeToAddress,
// //                     phone: e.target.value,
// //                   })
// //                 }
// //                 className="p-2 border border-gray-300 rounded-md"
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="Address Line 1"
// //                 value={shipeToAddress.addressLine1}
// //                 onChange={(e) =>
// //                   setshipeToAddress({
// //                     ...shipeToAddress,
// //                     addressLine1: e.target.value,
// //                   })
// //                 }
// //                 className="p-2 border border-gray-300 rounded-md"
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="Address Line 2"
// //                 value={shipeToAddress.addressLine2}
// //                 onChange={(e) =>
// //                   setshipeToAddress({
// //                     ...shipeToAddress,
// //                     addressLine2: e.target.value,
// //                   })
// //                 }
// //                 className="p-2 border border-gray-300 rounded-md"
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="City"
// //                 value={shipeToAddress.cityLocality}
// //                 onChange={(e) =>
// //                   setshipeToAddress({
// //                     ...shipeToAddress,
// //                     cityLocality: e.target.value,
// //                   })
// //                 }
// //                 className="p-2 border border-gray-300 rounded-md"
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="State/Province"
// //                 value={shipeToAddress.stateProvince}
// //                 onChange={(e) =>
// //                   setshipeToAddress({
// //                     ...shipeToAddress,
// //                     stateProvince: e.target.value,
// //                   })
// //                 }
// //                 className="p-2 border border-gray-300 rounded-md"
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="Postal Code"
// //                 value={shipeToAddress.postalCode}
// //                 onChange={(e) =>
// //                   setshipeToAddress({
// //                     ...shipeToAddress,
// //                     postalCode: e.target.value,
// //                   })
// //                 }
// //                 className="p-2 border border-gray-300 rounded-md"
// //                 required
// //               />
// //               <input
// //                 type="text"
// //                 placeholder="Country Code (e.g., PK)"
// //                 value={shipeToAddress.countryCode}
// //                 onChange={(e) =>
// //                   setshipeToAddress({
// //                     ...shipeToAddress,
// //                     countryCode: e.target.value,
// //                   })
// //                 }
// //                 className="p-2 border border-gray-300 rounded-md"
// //                 required
// //               />
// //             </div>
// //           </div>

// //           {/* Submit Button */}
// //           <button
// //             type="submit"
// //             disabled={loading}
// //             className="px-4 py-2 rounded-md disabled:bg-gray-400 w-full bg-[#029FAE] text-[#ffffff] font-medium hover:bg-[#02abaee6]"
// //           >
// //             {loading ? "Calculating..." : "Get Shipping Rates"}
// //           </button>
// //         </form>

// //         {/* Display Available Rates */}
// //         {rates.length > 0 && (
// //           <div className="mt-8">
// //             <h2 className="text-xl font-semibold text-gray-800 mb-4">
// //               Available Shipping Rates
// //             </h2>
// //             <div className="gap-4 flex items-center flex-wrap">
// //               {rates.map((rate) => (
// //                 <div
// //                   key={rate.rateId}
// //                   className={`p-4 border rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer ${
// //                     rateId === rate.rateId
// //                       ? "border-[#029FAE] bg-blue-100"
// //                       : "border-gray-200 bg-gray-50"
// //                   }`}
// //                   onClick={() => setrateId(rate.rateId)}
// //                 >
// //                   <div className="flex items-center gap-2">
// //                     <input
// //                       type="radio"
// //                       name="shippingRate"
// //                       checked={rateId === rate.rateId}
// //                       onChange={() => setrateId(rate.rateId)}
// //                       className="form-radio h-4 w-4 text-[#029FAE]"
// //                     />
// //                     <div>
// //                       <p className="text-lg font-medium text-gray-700">
// //                         <strong>Carrier:</strong> {rate.carrierFriendlyName}
// //                       </p>
// //                       <p className="text-gray-600">
// //                         <strong>Service:</strong> {rate.serviceType}
// //                       </p>
// //                       <p className="text-gray-800 font-semibold">
// //                         <strong>Cost:</strong > {rate.shippingAmount.amount}{" "}
// //                         {rate.shippingAmount.currency}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Create Label Button */}
// //         {rateId && (
// //           <div className="mt-8">
// //             <button
// //               onClick={handleCreateLabel}
// //               disabled={loading}
// //               className="w-full px-4 py-2  rounded-md bg-[#029FAE] text-[#ffffff] font-medium hover:bg-[#02abaee6] disabled:bg-gray-400"
// //             >
// //               {loading ? "Creating Label..." : "Create Label"}
// //             </button>
// //           </div>
// //         )}
// //         {labelPdf && (
// //          <Link target="_blank" href={labelPdf}> <button className="w-full mt-4 px-4 py-2 bg-[#F5813F] text-[#ffffff] font-medium rounded-md hover:bg-[#f5823fe8]">Download Label</button></Link>
// //         )}
// //         {trackingObj && (
// //           <div className="mt-8">
// //             <h2 className="text-xl font-semibold text-gray-800 mb-4">
// //               Tracking thinks (We are using ShipEngine test api key so order will not trace)
// //             </h2>
// //             <p>tracking number: {trackingObj.trackingNumber}</p>
// //             <p> labelId: {trackingObj.labelId}</p>
// //             <p> carrierCode: {trackingObj.carrierCode}</p>
// //             <Link href={`/tracking/?labelId=${trackingObj.labelId}`}>
// //               <button className="px-4 py-2 rounded-md my-3 bg-[#029FAE] text-[#ffffff] font-medium hover:bg-[#02abaee6] ">Track Order</button>
// //             </Link>
// //           </div>
// //         )}
// //         {errors.length > 0 && (
// //           <div className="mt-8">
// //             <h2 className="text-xl font-semibold text-gray-800 mb-4">Errors</h2>
// //             <div className="space-y-2">
// //               {errors.map((error, index) => (
// //                 <p key={index} className="text-red-500">
// //                   {error}
// //                 </p>
// //               ))}
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ShippingRatesPage;


// "use client";
// import React, { useState } from "react";
// import axios from "axios";
// import Link from "next/link";
// import { Address, Rate, trackingObjType } from "../../../type";
// import { cartProductsWhichCanBeShipped } from "../../../data";

// const ShippingRatesPage = () => {
//   const [shipeToAddress, setshipeToAddress] = useState<Address>({
//     name: "John Doe",
//     phone: "+1 555-678-1234",
//     addressLine1: "1600 Pennsylvania Avenue NW",
//     addressLine2: "",
//     cityLocality: "Washington",
//     stateProvince: "DC",
//     postalCode: "20500",
//     countryCode: "US",
//     addressResidentialIndicator: "no",
//   });

//   const [rates, setRates] = useState<Rate[]>([]);
//   const [rateId, setrateId] = useState<string | null>(null);
//   const [labelPdf, setLabelPdf] = useState<string | null>(null);
//   const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
//   const [loading, setLoading] = useState(false);
//   const [errors, setErrors] = useState<string[]>([]);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setErrors([]);
//     setRates([]);

//     try {
//       const response = await axios.post("/api/shipengine/get-rates", {
//         shipeToAddress,
//         packages: cartProductsWhichCanBeShipped.map((product) => ({
//           weight: product.weight,
//           dimensions: product.dimensions,
//         })),
//       });
//       console.log(response.data);
//       setRates(response.data.shipmentDetails.rateResponse.rates);
//     } catch (error) {
//       console.log(error);
//       setErrors(["An error occurred while fetching rates."]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCreateLabel = async () => {
//     if (!rateId) {
//       alert("Please select a rate to create a label.");
//     }

//     setLoading(true);
//     setErrors([]);

//     try {
//       const response = await axios.post("/api/shipengine/label", { rateId });
//       const labelData = response.data;
//       console.log(labelData);
//       setLabelPdf(labelData.labelDownload.href);
//       setTrackingObj({
//         trackingNumber: labelData.trackingNumber,
//         labelId: labelData.labelId,
//         carrierCode: labelData.carrierCode,
//       });
//     } catch (error) {
//       console.log(error);
//       setErrors(["An error occurred while creating the label."]);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen text-black bg-gray-100 mt-6 py-14 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
//       <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center sm:text-left">
//           Shipping Rates Calculator
//         </h1>

//         {/* Form Section */}
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Ship To Address</h2>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//               {[
//                 { placeholder: "Name", key: "name" },
//                 { placeholder: "Phone", key: "phone" },
//                 { placeholder: "Address Line 1", key: "addressLine1" },
//                 { placeholder: "Address Line 2", key: "addressLine2" },
//                 { placeholder: "City", key: "cityLocality" },
//                 { placeholder: "State/Province", key: "stateProvince" },
//                 { placeholder: "Postal Code", key: "postalCode" },
//                 { placeholder: "Country Code (e.g., US)", key: "countryCode" },
//               ].map(({ placeholder, key }) => (
//                 <input
//                   key={key}
//                   type="text"
//                   placeholder={placeholder}
//                   value={(shipeToAddress as any)[key]}
//                   onChange={(e) =>
//                     setshipeToAddress({ ...shipeToAddress, [key]: e.target.value })
//                   }
//                   className="p-2 border border-gray-300 rounded-md w-full"
//                   required={key !== "addressLine2"}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full px-4 py-2 rounded-md disabled:bg-gray-400 bg-[#029FAE] text-white font-medium hover:bg-[#02abaee6] transition"
//           >
//             {loading ? "Calculating..." : "Get Shipping Rates"}
//           </button>
//         </form>

//         {/* Display Available Rates */}
//         {rates.length > 0 && (
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Shipping Rates</h2>
//             <div className="flex flex-wrap gap-4">
//               {rates.map((rate) => (
//                 <div
//                   key={rate.rateId}
//                   className={`p-4 border rounded-lg shadow-md transition transform hover:scale-105 cursor-pointer w-full sm:w-[48%] ${
//                     rateId === rate.rateId ? "border-[#029FAE] bg-blue-100" : "border-gray-200 bg-gray-50"
//                   }`}
//                   onClick={() => setrateId(rate.rateId)}
//                 >
//                   <input
//                     type="radio"
//                     name="shippingRate"
//                     checked={rateId === rate.rateId}
//                     onChange={() => setrateId(rate.rateId)}
//                     className="form-radio h-4 w-4 text-[#029FAE] mb-2"
//                   />
//                   <p className="text-lg font-medium text-gray-700"><strong>Carrier:</strong> {rate.carrierFriendlyName}</p>
//                   <p className="text-gray-600"><strong>Service:</strong> {rate.serviceType}</p>
//                   <p className="text-gray-800 font-semibold"><strong>Cost:</strong> {rate.shippingAmount.amount} {rate.shippingAmount.currency}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Create Label Button */}
//         {rateId && (
//           <div className="mt-8">
//             <button
//               onClick={handleCreateLabel}
//               disabled={loading}
//               className="w-full px-4 py-2 rounded-md bg-[#029FAE] text-white font-medium hover:bg-[#02abaee6] transition disabled:bg-gray-400"
//             >
//               {loading ? "Creating Label..." : "Create Label"}
//             </button>
//           </div>
//         )}

//         {labelPdf && (
//           <Link target="_blank" href={labelPdf}>
//             <button className="w-full mt-4 px-4 py-2 bg-[#F5813F] text-white font-medium rounded-md hover:bg-[#f5823fe8]">
//               Download Label
//             </button>
//           </Link>
//         )}

//         {trackingObj && (
//           <div className="mt-8">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">
//               Tracking Information
//             </h2>
//             <p>Tracking Number: {trackingObj.trackingNumber}</p>
//             <p>Label ID: {trackingObj.labelId}</p>
//             <p>Carrier Code: {trackingObj.carrierCode}</p>
//             <Link href={`/tracking/?labelId=${trackingObj.labelId}`}>
//               <button className="w-full mt-4 px-4 py-2 rounded-md bg-[#029FAE] text-white font-medium hover:bg-[#02abaee6]">
//                 Track Order
//               </button>
//             </Link>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ShippingRatesPage;

"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { Address, Rate, trackingObjType } from "../../../type";
import { cartProductsWhichCanBeShipped } from "../../../data";

const ShippingRatesPage = () => {
  const [shipeToAddress, setshipeToAddress] = useState<Address>({
    name: "John Doe",
    phone: "+1 555-678-1234",
    addressLine1: "1600 Pennsylvania Avenue NW",
    addressLine2: "",
    cityLocality: "Washington",
    stateProvince: "DC",
    postalCode: "20500",
    countryCode: "US",
    addressResidentialIndicator: "no",
  });

  const [rates, setRates] = useState<Rate[]>([]);
  const [rateId, setrateId] = useState<string | null>(null);
  const [labelPdf, setLabelPdf] = useState<string | null>(null);
  const [trackingObj, setTrackingObj] = useState<trackingObjType | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setRates([]);

    try {
      const response = await axios.post("/api/shipengine/get-rates", {
        shipeToAddress,
        packages: cartProductsWhichCanBeShipped.map((product) => ({
          weight: product.weight,
          dimensions: product.dimensions,
        })),
      });

      setRates(response.data.shipmentDetails.rateResponse.rates);
    } catch (error) {
      console.error("Error fetching rates:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateLabel = async () => {
    if (!rateId) {
      alert("Please select a rate to create a label.");
      return; // ✅ Stops execution
    }

    setLoading(true);

    try {
      const response = await axios.post("/api/shipengine/label", { rateId });
      const labelData = response.data;

      setLabelPdf(labelData.labelDownload.href);
      setTrackingObj({
        trackingNumber: labelData.trackingNumber,
        labelId: labelData.labelId,
        carrierCode: labelData.carrierCode,
      });
    } catch (error) {
      console.error("Error creating label:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen text-black bg-gray-100 mt-6 py-14 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 text-center sm:text-left">
          Shipping Rates Calculator
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Ship To Address</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(
                [
                  ["name", "Name"],
                  ["phone", "Phone"],
                  ["addressLine1", "Address Line 1"],
                  ["addressLine2", "Address Line 2"],
                  ["cityLocality", "City"],
                  ["stateProvince", "State/Province"],
                  ["postalCode", "Postal Code"],
                  ["countryCode", "Country Code (e.g., US)"],
                ] as const
              ).map(([key, placeholder]) => (
                <input
                  key={key}
                  type="text"
                  placeholder={placeholder}
                  value={shipeToAddress[key]}
                  onChange={(e) =>
                    setshipeToAddress({ ...shipeToAddress, [key]: e.target.value })
                  }
                  className="p-2 border border-gray-300 rounded-md w-full"
                  required={key !== "addressLine2"}
                />
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 rounded-md disabled:bg-gray-400 bg-[#029FAE] text-white font-medium hover:bg-[#02abaee6] transition"
          >
            {loading ? "Calculating..." : "Get Shipping Rates"}
          </button>
        </form>

        {rates.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Available Shipping Rates</h2>
            <div className="flex flex-wrap gap-4">
              {rates.map((rate) => (
                <div
                  key={rate.rateId}
                  className={`p-4 border rounded-lg shadow-md transition transform hover:scale-105 cursor-pointer w-full sm:w-[48%] ${
                    rateId === rate.rateId ? "border-[#029FAE] bg-blue-100" : "border-gray-200 bg-gray-50"
                  }`}
                  onClick={() => setrateId(rate.rateId)}
                >
                  <input
                    type="radio"
                    name="shippingRate"
                    checked={rateId === rate.rateId}
                    onChange={() => setrateId(rate.rateId)}
                    className="form-radio h-4 w-4 text-[#029FAE] mb-2"
                  />
                  <p className="text-lg font-medium text-gray-700"><strong>Carrier:</strong> {rate.carrierFriendlyName}</p>
                  <p className="text-gray-600"><strong>Service:</strong> {rate.serviceType}</p>
                  <p className="text-gray-800 font-semibold"><strong>Cost:</strong> {rate.shippingAmount.amount} {rate.shippingAmount.currency}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {rateId && (
          <div className="mt-8">
            <button
              onClick={handleCreateLabel}
              disabled={loading}
              className="w-full px-4 py-2 rounded-md bg-[#029FAE] text-white font-medium hover:bg-[#02abaee6] transition disabled:bg-gray-400"
            >
              {loading ? "Creating Label..." : "Create Label"}
            </button>
          </div>
        )}

        {labelPdf && (
          <Link target="_blank" href={labelPdf}>
            <button className="w-full mt-4 px-4 py-2 bg-[#F5813F] text-white font-medium rounded-md hover:bg-[#f5823fe8]">
              Download Label
            </button>
          </Link>
        )}

        {trackingObj && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Tracking Information</h2>
            <p>Tracking Number: {trackingObj.trackingNumber}</p>
            <p>Label ID: {trackingObj.labelId}</p>
            <p>Carrier Code: {trackingObj.carrierCode}</p>
            <Link href={`/tracking/?labelId=${trackingObj.labelId}`}>
              <button className="w-full mt-4 px-4 py-2 rounded-md bg-[#029FAE] text-white font-medium hover:bg-[#02abaee6]">
                Track Order
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShippingRatesPage;
