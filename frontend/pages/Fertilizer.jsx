import React from "react";
import Layout from "../components/Layout";
import { useState } from "react";
import axios from "axios";

const Fertilizer = () => {
    const [formData, setFormData] = useState({
        Temp: 0,
        Hum: 0,
        Moist: 0,
        Soil: 0,
        Crop: 0,
        N: 0,
        K: 0,
        P: 0,
    });
    const [output, setOutput] = useState(null);
    const handleChange = (event) => {
        setFormData((prevState) => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            };
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        let data = null;

        axios
            .post("http://127.0.0.1:5000/fertilizer-predict", {
                Temp: Number(formData.Temp),
                Hum: Number(formData.Hum),
                Moist: Number(formData.Moist),
                Soil: Number(formData.Soil),
                Crop: Number(formData.Crop),
                N: Number(formData.N),
                K: Number(formData.K),
                P: Number(formData.P),
            })
            .then(function (response) {
                data = response.data;
                console.log(data);
                setOutput(data);
                console.log(output);
            })
            .catch(function (error) {
                console.log(error);
            });
        setFormData({
            Temp: 0,
            Hum: 0,
            Moist: 0,
            Soil: 0,
            Crop: 0,
            N: 0,
            K: 0,
            P: 0,
        });
    };
    return (
        <div>
            <Layout
                title="Fertilizer"
                content="Find fertilizer suitable for a particular condition"
            >
                <h1 className="text-2xl font-semibold text-center mt-3">
                    Know which fertilizer to use
                </h1>

                <div className="flex items-center justify-center mt-5 mb-30">
                    <form onSubmit={handleSubmit} className="w-full max-w-lg">
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name"
                                >
                                    Temperature
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-none-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="Temp"
                                    type="number"
                                    placeholder="temperature"
                                    name="Temp"
                                    required
                                    min="-10"
                                    max="50"
                                    onChange={handleChange}
                                    value={formData.Temp}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-last-name"
                                >
                                    Humidity
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="Hum"
                                    placeholder="Humidity"
                                    required
                                    min="0"
                                    max="100"
                                    onChange={handleChange}
                                    value={formData.Hum}
                                    name="Hum"
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name"
                                >
                                    Moisture
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-none-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="Moist"
                                    type="number"
                                    placeholder="Moisture"
                                    name="Moist"
                                    required
                                    min="0"
                                    max="100"
                                    onChange={handleChange}
                                    value={formData.Moist}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-last-name"
                                >
                                    Nitrogen
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="N"
                                    type="number"
                                    placeholder="Nitrogen"
                                    name="N"
                                    required
                                    min="0"
                                    max="100"
                                    onChange={handleChange}
                                    value={formData.N}
                                />
                            </div>
                        </div>
                        <div className="flex flex-wrap -mx-3 mb-6">
                            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-first-name"
                                >
                                    Potassium
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-none-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                    id="K"
                                    type="number"
                                    placeholder="Potassium"
                                    name="K"
                                    required
                                    min="0"
                                    max="100"
                                    onChange={handleChange}
                                    value={formData.K}
                                />
                            </div>
                            <div className="w-full md:w-1/2 px-3">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-last-name"
                                >
                                    Phosphorus
                                </label>
                                <input
                                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="P"
                                    type="number"
                                    placeholder="Phosphorous"
                                    name="P"
                                    required
                                    min="0"
                                    max="100"
                                    onChange={handleChange}
                                    value={formData.P}
                                />
                            </div>
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-state"
                                >
                                    Crop Type
                                </label>
                                <div className="relative">
                                    <select
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="Crop"
                                        name="Crop"
                                        required
                                        onChange={handleChange}
                                        value={formData.Crop}
                                    >
                                        <option value="0">Barley</option>
                                        <option value="1" selected>
                                            Cotton
                                        </option>
                                        <option value="2">Ground Nuts</option>
                                        <option value="3">Maize</option>
                                        <option value="4">Millets</option>
                                        <option value="5">Oil seeds</option>
                                        <option value="6">Paddy</option>
                                        <option value="7">Pulses</option>
                                        <option value="8">Sugarcane</option>
                                        <option value="9">Tobacco</option>
                                        <option value="10">Wheat</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label
                                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-state"
                                >
                                    Soil Type
                                </label>
                                <div className="relative">
                                    <select
                                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        id="Soil"
                                        name="Soil"
                                        required
                                        onChange={handleChange}
                                        value={formData.Soil}
                                    >
                                        <option value="0">Black</option>
                                        <option value="1" selected>
                                            Clayey
                                        </option>
                                        <option value="2">Loamy</option>
                                        <option value="3">Red</option>
                                        <option value="4">Sandy</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg
                                            className="fill-current h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded h-10 mt-6 ml-10">
                                Submit
                            </button>
                            {output && (
                                <div
                                    class="mt-5 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                                    role="alert"
                                >
                                    <span class="font-medium">
                                        Recommended Fertilizer:
                                    </span>
                                    {output}
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </Layout>
        </div>
    );
};

export default Fertilizer;
