'use client';
import { useState } from 'react';
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

const AdditionalInformationForm = ({ onSubmit, onClose }) => {
    const [age, setAge] = useState('');
    const [address2, setAddress2] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');
    const [witness, setWitness] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [detailInstructions, setDetailInstructions] = useState('');
    // const [emergencyType, setEmergencyType] = useState('');

    const cityArray = ['Medical', 'Fire', 'Crime', 'Other'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!age || !address2 || !description || !witness || !specialInstructions || !detailInstructions) {
            alert('Please fill the empty fields.');
            return;
        }
        const additionalData = {
            age,
            address2,
            phoneNumber,
            description,
            witness,
            specialInstructions,
            detailInstructions,
            // emergencyType,
        };
        onSubmit(additionalData);
    };

    return (
        <form className="max-w-6xl mx-auto p-4 bg-white" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">Additional Information</h2>
            <h4 className="text-2xl font-bold mb-4 text-center">Caller Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* <div>
                    <label className="block text-gray-700 font-bold pb-1">Type of Emergency*</label>
                    <Select
                        label="Specifies the nature of the emergency"
                        classNames={{ mainWrapper: '!bg-white border-2 border-gray-300', trigger: '!bg-white' }}
                        value={emergencyType}
                        onChange={(e) => setEmergencyType(e.target.value)}
                    >
                        {cityArray.map((type, index) => (
                            <SelectItem key={index} value={type}>
                                {type}
                            </SelectItem>
                        ))}
                    </Select>
                </div> */}
                <div>
                    <label className="block text-gray-700 font-bold">Age</label>
                    <Input
                        classNames={{ inputWrapper: '!bg-white' }}
                        type="number"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold">Address 2</label>
                    <Input
                        classNames={{ inputWrapper: '!bg-white' }}
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
                            classNames={{ inputWrapper: '!bg-white' }}
                            type="text"
                            placeholder="Country Code"
                            className="w-1/4 border border-gray-300 p-2 rounded mr-2"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                        />
                        <Input
                            classNames={{ inputWrapper: '!bg-white' }}
                            type="text"
                            placeholder="Area"
                            className="w-1/4 border border-gray-300 p-2 rounded mr-2"
                        />
                        <Input
                            classNames={{ inputWrapper: '!bg-white' }}
                            type="text"
                            placeholder="Phone Number"
                            className="w-1/2 border border-gray-300 p-2 rounded"
                        />
                        <Input
                            classNames={{ inputWrapper: '!bg-white' }}
                            type="text"
                            placeholder="Ext"
                            className="w-1/6 border border-gray-300 p-2 rounded ml-2"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-gray-700 font-bold">Description of Emergency</label>
                    <Textarea
                        classNames={{ inputWrapper: '!bg-white' }}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold">Special Instructions</label>
                    <Textarea
                        classNames={{ inputWrapper: '!bg-white' }}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={specialInstructions}
                        onChange={(e) => setSpecialInstructions(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold">Detailed Incident Information</label>
                    <Textarea
                        classNames={{ inputWrapper: '!bg-white' }}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={detailInstructions}
                        onChange={(e) => setDetailInstructions(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold">Any Witness</label>
                    <Input
                        classNames={{ inputWrapper: '!bg-white' }}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={witness}
                        onChange={(e) => setWitness(e.target.value)}
                    />
                </div>
            </div>
            <div className="my-2">
                <Button color="danger" variant="light" onPress={onClose}>
                    Close
                </Button>
                <Button type="submit" color="primary">
                    Submit Additional Information
                </Button>
            </div>
        </form>
    );
};
export default AdditionalInformationForm