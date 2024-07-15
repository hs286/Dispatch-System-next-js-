'use client';
import { useState } from 'react';
import { Button, Input, Textarea } from "@nextui-org/react";

const AdditionalInformationForm = ({ onSubmit, onClose }) => {
    const [age, setAge] = useState('');
    const [address2, setAddress2] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [description, setDescription] = useState('');
    const [witness, setWitness] = useState('');
    const [specialInstructions, setSpecialInstructions] = useState('');
    const [detailInstructions, setDetailInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!age || !address2 || !description || !witness || !specialInstructions || !detailInstructions) {
            alert('Please fill all the required fields.');
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
        };
        onSubmit(additionalData);
    };

    return (
        <form className="max-w-[90%] mx-auto p-4 bg-white" onSubmit={handleSubmit}>
            <p className="text-2xl font-bold mb-4">Additional Information<small>(Caller Information)</small></p>
        <div className='grid gap-4'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <Input
                    label="Age"
                    size="sm"
                    classNames={{ inputWrapper: '!bg-white' }}
                    type="number"
                    className="w-full border border-gray-300  rounded "
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />

                <Input
                    label="Address 2"
                    size="sm"
                    classNames={{ inputWrapper: '!bg-white' }}
                    type="text"
                    className="w-full border border-gray-300  rounded "
                    value={address2}
                    onChange={(e) => setAddress2(e.target.value)}
                />
                <Input
                    label="Any Witness"
                    size="sm"
                    classNames={{ inputWrapper: '!bg-white' }}
                    type="text"
                    className="w-full border border-gray-300  rounded"
                    value={witness}
                    onChange={(e) => setWitness(e.target.value)}
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Input
                    label="Country Code"
                    type="text"
                    size="sm"
                    classNames={{ inputWrapper: '!bg-white' }}
                    className="w-full border border-gray-300  rounded"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />

                <Input
                    label="Area"
                    type="text"
                    size="sm"
                    classNames={{ inputWrapper: '!bg-white' }}
                    className="w-full border border-gray-300  rounded"
                />

                <Input
                    label="Phone Number"
                    type="text"
                    size="sm"
                    classNames={{ inputWrapper: '!bg-white' }}
                    className="w-full border border-gray-300  rounded"
                />

                <Input
                    label="Ext"
                    type="text"
                    size="sm"
                    classNames={{ inputWrapper: '!bg-white' }}
                    className="w-full border border-gray-300  rounded"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <Textarea
                    label="Description of Emergency"
                    size="sm"
                    classNames={{ inputWrapper: '!bg-white' }}
                    className="w-full border border-gray-300  rounded"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />

                <Textarea
                    label="Special Instructions"
                    size="sm"
                    classNames={{ inputWrapper: '!bg-white' }}
                    className="w-full border border-gray-300  rounded"
                    value={specialInstructions}
                    onChange={(e) => setSpecialInstructions(e.target.value)}
                />

                <Textarea
                    label="Detailed Incident Information"
                    size="sm"
                    classNames={{ inputWrapper: '!bg-white' }}
                    className="w-full border border-gray-300  rounded"
                    value={detailInstructions}
                    onChange={(e) => setDetailInstructions(e.target.value)}
                />
            </div>
            </div>
            <div className="mt-4 text-end">
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

export default AdditionalInformationForm;
