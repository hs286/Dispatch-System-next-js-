'use client'
import { useState } from 'react';
import { Input, Select, SelectItem } from "@nextui-org/react";
const BillingForm = () => {
    const [firstName, setFirstName] = useState('');
    const [age, setAge] = useState('');
    const [address2, setAddress2] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [pinDropNUmber, setPinDropNUmber] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const cityArray = ['Medical', 'Fire', 'Crime', 'Other']
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            firstName,
            attention,
            address2,
            phoneNumber,
            age,
            address,

        };
        console.log(formData);
    };

    return (
        <form className="max-w-4xl mx-auto p-4" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">1B BILLING INFORMATION</h2>
            <div className="mb-4 flex justify-between items-end">
                <label className="block text-gray-700 font-bold">
                    Is the Billing Name and Address same as the Requestor&apos;s Name and Address?
                </label>
                {/* <div className="mt-2 flex items-center">
                    <Input
                        type="radio"
                        name="sameAsRequestor"
                        id="yes"
                        value="yes"
                        className="mr-2"
                        checked={sameAsRequestor === 'yes'}
                        onChange={(e) => setSameAsRequestor(e.target.value)}
                    />
                    <label htmlFor="yes" className="mr-4">Yes</label>
                    <Input
                        type="radio"
                        name="sameAsRequestor"
                        id="no"
                        value="no"
                        className="mr-2"
                        checked={sameAsRequestor === 'no'}
                        onChange={(e) => setSameAsRequestor(e.target.value)}
                    />
                    <label htmlFor="no">No</label>
                </div> */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 font-bold"> Name</label>
                    <Input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={firstName}
                        Required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold">Age</label>
                    <Input
                        type="number"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>

                {/* <div>
                    <label className="block text-gray-700 font-bold">Last Name</label>
                    <Input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div> */}
                <div>
                    <label className="block text-gray-700 font-bold">Pin Drop Number</label>
                    <Input
                        type="number"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={pinDropNUmber}
                        onChange={(e) => setPinDropNUmber(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-bold">Type of Emergency*</label>
                    <Select
                        label="Specifies the nature of the emergency"
                    >
                        {cityArray.map((type) => (
                            <SelectItem key={type.key}>
                                {type}
                            </SelectItem>
                        ))}
                    </Select>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold">Adress </label>
                    <Input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>

                <div>
                    <label className="block text-gray-700 font-bold">Adress 2</label>
                    <Input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={address2}
                        onChange={(e) => setAddress2(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold">Phone Number</label>
                    <div className="flex mt-1">
                        <Input
                            type="text"
                            placeholder="Country Code"
                            className="w-1/4 border border-gray-300 p-2 rounded mr-2"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <Input
                            type="text"
                            placeholder="Area"
                            className="w-1/4 border border-gray-300 p-2 rounded mr-2"
                        />
                        <Input
                            type="text"
                            placeholder="Phone Number"
                            className="w-1/2 border border-gray-300 p-2 rounded"
                        />
                        <Input
                            type="text"
                            placeholder="Ext"
                            className="w-1/6 border border-gray-300 p-2 rounded ml-2"
                        />
                    </div>
                </div>
                {/* <div>
                    <label className="block text-gray-700 font-bold">Zip Code (Postal Code)</label>
                    <Input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                    />
                </div> */}


                <div>
                    <label className="block text-gray-700 font-bold">Description of Emergency</label>
                    <Input
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>



            </div>
            <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
                Submit
            </button>
        </form>
    );
};

export default BillingForm;
