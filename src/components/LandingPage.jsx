'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import FormComponent from './DetailedForm'
import Map from './Map'
// import { GoogleMapsEmbed } from '@next/third-parties/google'
import {
    Card,
    CardHeader,
    CardBody,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button, useDisclosure
} from "@nextui-org/react";

const LandingPage = () => {
    const [showForm, setshowForm] = useState(false)
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const handleFrom = () => {
        setshowForm(true)
        console.log('clecked')
    }
    const handleHideFrom = () => {
        setshowForm(false)
        console.log('clecked')
    }
    const center = {
        lat: 32.33557301648227,
        lng: 74.36152118336334,
    };
    return (
                <main className=" mx-auto sm:h-[90.8vh] ">
                    <Map center={center} />
                    <div className='py-4'>
                        {!showForm ? <section className="px-3 grid grid-cols-1 md:grid-cols-3 gap-4">



                            <div onClick={handleFrom} className=''>
                                <Card className="py-6 cursor-pointer shadow-none hover:bg-[#e8ebdd] bg-[#e7e8e2] rounded-none border-none" >

                                    <CardBody className="overflow-visible border-[#2a3644] rounded-full py-2 mx-auto">
                                        <Image
                                            alt="Card background"
                                            className="object-cover p-2 border-2 border-[#082636] rounded-full mx-auto"
                                            src="https://cdn.emergencydispatch.org/iaed/img/protocols/disico_emd.svg"
                                            width={150}
                                            height={150}
                                        />
                                    </CardBody>
                                    <h4 className="font-bold text-large text-center">AMBULANCE</h4>

                                </Card>
                            </div>



                            <div onClick={handleFrom}>

                                <Card className="py-4 cursor-pointer shadow-none hover:bg-[#e8ebdd] bg-[#e7e8e2] rounded-none">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            src="https://cdn.emergencydispatch.org/iaed/img/protocols/disico_efd.svg"
                                            className="p-2 border-2 mx-auto mb-4 border-[#082636] rounded-full"
                                            width={150}
                                            height={150}
                                            alt="Fire" />
                                    </CardBody>
                                    <h4 className="font-bold text-large text-center">FIRE</h4>

                                </Card>
                            </div>

                            <div onClick={handleFrom}>

                                <Card className="py-4 cursor-pointer shadow-none hover:bg-[#e8ebdd] bg-[#e7e8e2] rounded-none border-none]">
                                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">

                                    </CardHeader>
                                    <CardBody className="overflow-visible py-2">
                                        <Image
                                            src="https://cdn.emergencydispatch.org/iaed/img/protocols/disico_epd.svg"
                                            width={150}
                                            height={150}
                                            alt="Police" className="p-2 border-2 mx-auto mb-4 border-[#082636] rounded-full" />
                                    </CardBody>
                                    <h4 className="font-bold text-large text-center">POLICE</h4>

                                </Card>
                            </div>
                        </section> : <FormComponent onClick={handleHideFrom} />}
                    </div>
                </main>
    );
};

export default LandingPage;
