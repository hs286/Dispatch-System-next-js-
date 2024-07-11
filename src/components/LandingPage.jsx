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
    return (
        <>
            <div className="bg-[#e7e8e2]">
                {/* <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={'3xl'}>
                    <ModalContent>
                        {(onClose) => (
                            <>
                                <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                                <ModalBody>
                                    <FormComponent />

                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button color="primary" onPress={onClose}>
                                        Action
                                    </Button>
                                </ModalFooter>
                            </>
                        )}
                    </ModalContent>
                </Modal> */}
                <main className="container mx-auto p-4">
                    <section className="text-center mb-8">
                        {/* <h1 className="text-4xl font-bold">Emergency Dispatch System</h1>
                        <p className="text-lg mt-2">Your text here. Your text here. Your text here.</p>
                        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">GOOGLE MAP</button> */}
                        <Map />

                    </section>

                    {!showForm ? <section className="grid grid-cols-1 md:grid-cols-3 gap-4">



                        <div onClick={handleFrom} className=''>
                            <Card className="py-6 cursor-pointer shadow-none hover:bg-[#e8ebdd] bg-[#e7e8e2] rounded-none border-none" >
                                {/* <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                    <h4 className="font-bold text-large">AMBULANCE</h4>
                                    <p className="text-tiny uppercase font-bold">Description of the ambulance services.</p>
                                </CardHeader> */}
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


                        {/* </Button> */}


                        {/* fireeeeeee */}
                        <div onClick={handleFrom}>

                            <Card className="py-4 cursor-pointer shadow-none hover:bg-[#e8ebdd] bg-[#e7e8e2] rounded-none">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                    {/* <h4 className="font-bold text-large">FIRE</h4>
                                    <p className="text-tiny uppercase font-bold">Description of the fire services.</p> */}
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

                        {/* police */}
                        <div onClick={handleFrom}>

                            <Card className="py-4 cursor-pointer shadow-none hover:bg-[#e8ebdd] bg-[#e7e8e2] rounded-none border-none]">
                                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                                    {/* <p className="text-tiny uppercase font-bold">Description of the police services.</p>
                                    <h4 className="font-bold text-large">POLICE</h4> */}
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
                    {/* {showForm && <FormComponent onClick={handleHideFrom} />} */}
                </main>

                {/* <footer className="p-4 bg-pink-300 text-center">
                <p>Footer content here</p>
            </footer> */}
            </div >

{/*             <div className='px-80 text-center bg-blue-200 py-6'>
                <h1 className='text-[50px]'>
                    TRUST THE SYSTEM BUILT ON SCIENCE AND PROVEN OVER TIME
                </h1>
                <h2 className='text-[25px] mb-10'>People choose IAED because our protocols are based on decades of evidence. Our system—the Emergency Priority Dispatch System—is the generally-accepted standard of care and practice and has been validated in the real-life practice of thousands of emergency dispatch centers and on millions of calls. It’s simply the most studied, proven, and up-to-date emergency response system in the world.
                </h2>
                <Button color='primary' size='md'>See the Science</Button>
            </div>
            <section className='px-80 py-20'>
                <h1 className='text-[25px] bg-black text-white'>
                    Emergency Dispatch System—Public Security Solution

                </h1>
                <p className='text-[20px]'>
                    <b>Solution</b>
                </p>
                <p className='text-[20px]'>
                    The Emergency Dispatch System is mainly applied to the on-site dispatching and assignment of emergency and incident events such as the mid- and small-scale local security, stability maintaining, emergency handling and rescuing tasks, which can help our customers build an efficient on-site dispatching and rescuing net.
                    This Emergency Dispatch System is specially for those applications which value dispatching.

                </p>
                <div className='flex justify-center '>
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl text-center"
                        src="/network.jpg"
                        width={1050}
                        height={1050}
                    />
                </div>
            </section> */}
        </>
    );
};

export default LandingPage;
