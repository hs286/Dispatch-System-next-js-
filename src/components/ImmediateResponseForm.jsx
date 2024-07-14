'use client';
import { useState } from 'react';
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import AdditionalInformationForm from './AdditionalInformationForm'
// Immediate Response Form Component
const ImmediateResponseForm = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [pinDropNumber, setPinDropNumber] = useState('');
    const [address, setAddress] = useState('');
    const [emergencyType, setEmergencyType] = useState('');

    const cityArray = ['Medical', 'Fire', 'Crime', 'Other'];

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!pinDropNumber && !address) {
            alert('Please provide either a Pin Drop Number or an Address.');
            return;
        }
        const identifierData = { firstName, pinDropNumber, address, emergencyType };
        onSubmit(identifierData);
    };

    return (
        <form className="max-w-6xl mx-auto p-4 bg-white" onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4">1B BILLING INFORMATION</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 font-bold">Name</label>
                    <Input
                        // label='Name'
                        classNames={{ inputWrapper: '!bg-white' }}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={firstName}
                        required
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold">Address</label>
                    <Input

                        classNames={{ inputWrapper: '!bg-white' }}
                        type="text"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-bold">Pin Drop Number</label>
                    <Input
                        classNames={{ inputWrapper: '!bg-white' }}
                        type="number"
                        className="w-full border border-gray-300 p-2 rounded mt-1"
                        value={pinDropNumber}
                        onChange={(e) => setPinDropNumber(e.target.value)}
                    />
                </div>
                <div>
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
                </div>
            </div>
            <Button className='my-5' type="submit" color="primary">
                Immediate Response
            </Button>
        </form>
    );
};

export default ImmediateResponseForm