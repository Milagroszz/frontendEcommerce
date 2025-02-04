import Navbar from '@/components/navbar';
import Image from 'next/image';
import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import Product from '@/components/Product';

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center" style={{ marginLeft: "200px", marginRight: "200px" }}>
                <div className="">
                    <div className="flex justify-center">
                        <Carousel>
                            <div>
                                <Image src="/images/logitech.png" width={800} height={400} alt="logo_dashboard" />
                            </div>
                            <div>
                                <Image src="/images/logitech2.jpeg" width={800} height={400} alt="logo_dashboard2" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className='' style={{ marginLeft: "200px", marginRight: "200px", marginTop: "20px", }}>
                <div className="grid grid-cols-2 gap-4 p-4">
                    <div style={{ fontSize: "30px", fontFamily: "bold" }}>
                        <h1>CALIDAD UNICOS /</h1>
                        <h1>MEJORES SIMPLE.</h1>
                    </div>
                    <div className="col-span-2 md:col-span-1 flex justify-center">
                        <span>3legant is a gift & decorations store based in HCMC, Vietnam. Est since 2019.</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-center" style={{ marginLeft: "200px", marginRight: "200px", marginTop: "20px", }}>
                <div className="bg-gray-200 p-8" style={{ width: "50%", marginRight: "10px" }}>
                    <div className="flex flex-col justify-between h-full">
                        <div style={{ fontFamily: "bold", fontSize: "20px" }}>
                            <span>Audifonos Gamer</span>
                        </div>
                        <div className="mt-auto">
                            <span>Comprar Ahora</span>
                        </div>
                        <Image src="/images/audifonos.png" width={500} height={300} alt="logo_dashboard2" />
                    </div>
                </div>

                <div className="bg-gray-200 p-8" style={{ width: "50%", marginRight: "10px" }}>
                    <div className="flex flex-col justify-between h-full">
                        <div className="justify-between h-full">
                            <Image src="/images/microfono.png" width={400} height={200} alt="logo_dashboard2" />
                        </div>
                        <div style={{ fontFamily: "bold", fontSize: "20px" }}>
                            <span>Microfono Gamer</span>
                        </div>
                        <div className="mt-auto">
                            <span>Comprar Ahora</span>
                        </div>
                    </div>
                </div>


            </div>

            <Product />

            <div className="rounded" style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'gray', width: '900px', padding: '20px', marginLeft: "200px" }}>
                <div className='p-4 ml-4' style={{ display: 'flex', flexDirection: 'column', }}>
                    <div className='pt-4'>
                        <FontAwesomeIcon icon={faTruckFast} size='2xl' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className='font-bold pt-4 text-xl'>Envío Gratis</span>
                        <span className='pt-4 text-sm'>A partir de $200</span>
                    </div>
                </div>
                <div className='p-4 ml-4' style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}>
                    <div className='pt-4'>
                        <FontAwesomeIcon icon={faTruckFast} size='2xl' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className='font-bold pt-4 text-xl'>Envío Gratis</span>
                        <span className='pt-4 text-sm'>A partir de $200</span>
                    </div>
                </div>
                <div className='p-4 ml-4' style={{ display: 'flex', flexDirection: 'column', margin: '0 20px' }}>
                    <div className='pt-4'>
                        <FontAwesomeIcon icon={faTruckFast} size='2xl' />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        <span className='font-bold pt-4 text-xl'>Envío Gratis</span>
                        <span className='pt-4 text-sm'>A partir de $200</span>
                    </div>
                </div>
            </div>




        </>
    );
};

export default Dashboard;
