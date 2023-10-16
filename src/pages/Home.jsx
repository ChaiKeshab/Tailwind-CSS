import {
    eBrochure,
    articles,
    counselling,
    exploreBg,
    sliderIMG,
    UK,
    gallery,
    USA,
    gmat,
    gre,
    UniVisti,
    graduation,
    network1,
    network2,
    netw1,
    eduFairs,
    abouImg,
    scholarships,
    internship,
    testimonial,
    // guidemnce,
    // freeCounseling,
    // testimonial3
} from '../assets/index'

import { Navbar, Divider, Slider, SliderSwipe, Form, Button, Card, CardGallery, TestCard, Flag, Footer } from '../components/index'
// import CssTest from '../components/CssTest'
// import { useState } from 'react'

const Home = () => {


    return (
        <div className='mx-auto'>


            {/* <CssTest /> */}


            <Navbar
                items={['Home', 'About GSC', 'Explore GSC', 'Our Services', 'Careers']}
                classNav='bg-[#F1F1F1] text-black lg:justify-around'
                classList='bg-[#F1F1F1] translate-y-16'
                classItems='border-gray-300'
                classHamburger='bg-black'
            >
                <div className='hidden space-x-8 lg:flex'>
                    <div>info@globalstudycentre.org</div>
                    <div>86 06 466 698</div>
                    <div>95 26 647 821</div>
                </div>
            </Navbar>




            <div className='flex mx-auto w-fit md:h-40'>
                <img src={netw1} alt="LOGO" />
            </div>



            <Navbar
                items={['COURSES', 'UNIVERSITY VISIT', 'TIPS', 'INTERNSHIP PROGRAMS', 'SCHOLARSHIPS', 'STUDENT SUPPORT', 'CONTACT US']}
                classNav='bg-primary text-white lg:justify-center'
                classList='bg-primary translate-y-16'
                classItems='border-border'
                classHamburger='bg-white'
            />


            <Slider
                images={[sliderIMG, exploreBg, eduFairs]}
                classSlider='flex flex-col
                md:flex-row md:justify-evenly md:items-center'
            >
                <div className="leftSlider text-white p-8 space-y-1 flex flex-col items-center 
                md:block md:space-y-7">

                    <div className='bg-primary-trans p-3 w-fit rounded'>
                        <h1 className='text-shadow text-2xl md:text-6xl'>STUDY ABROAD</h1>
                    </div>

                    <div className='bg-primary-trans p-1 w-fit rounded'>
                        <h2 className='text-xs md:text-3xl'>WORK WHILE YOU STUDY</h2>
                    </div>

                    <Button
                        className='bg-primary w-fit py-2 px-7 border-2 border-primary hover:bg-transparent hover:text-primary'
                        label='MORE DETAILS' />
                </div>

                <div className="rightForm md:my-5">
                    <Form />
                </div>
            </Slider>





            <Divider
                title='University Updates'
                classDiamond='bg-white'
            />



            <section className='CARD flex flex-col justify-center
            md:flex-row'>

                <div className='md:mx-4 lg:mx-8'>
                    <Card
                        image={UniVisti}
                        title='Free Seminars'
                        date='17 June 2024'
                        time='12:00 PM'
                        location='Tokyo'
                        country='Japan'
                    />
                </div>
                <div className='md:mx-4 lg:mx-8'>

                    <Card
                        image={UniVisti}
                        title='Upcoming Events'
                        date='17 June 2024'
                        time='1:00 PM'
                        location='Shanghai'
                        country='China'
                    />
                </div>
            </section>



            <section
                style={{ backgroundImage: `url(${sliderIMG})` }}
                className='COURSES mt-16 bg-cover bg-no-repeat bg-center pb-6'>

                <div className='w-fit mx-auto relative bottom-14 rounded-full'>
                    <img src={graduation} alt="" />
                </div>

                <h1 className='text-white text-lg -mt-10 text-center text-bold
                md:text-xl lg:text-3xl'>
                    We Bring You The World&apos;s Best Courses From All The Top Universities</h1>


                <div className='mt-12 bg-white-trans m-auto
                md:w-8/12'>

                    <div className='space-x-1 w-full flex justify-center text-sm md:text-lg'>
                        <Button
                            className='text-shadow2 bg-white w-full py-2 text-black text-bold
                            hover:bg-primary hover:text-white focus:bg-transparent focus:text-black'
                            label='Preferred country' />

                        <Button
                            className='text-shadow2 bg-white w-full py-2 text-black text-bold
                            hover:bg-primary hover:text-white focus:bg-transparent focus:text-black'
                            label='Study Abroad' />
                    </div>

                    <div className='CHOICE-1'>
                        <div className='flagGrid grid gap-7 py-12 px-9'>
                            <Flag
                                image={UK}
                                label='UK'
                            />
                            <Flag
                                image={USA}
                                label='US'
                            />
                            <Flag
                                image={UK}
                                label='UK'
                            />
                            <Flag
                                image={USA}
                                label='US'
                                className='hidden sm:block'
                            />
                            <Flag
                                image={UK}
                                label='UK'
                                className='hidden sm:block'
                            />
                            <Flag
                                image={USA}
                                label='US'
                                className='hidden sm:block'
                            />
                        </div>

                        <div className='flex px-9 -mt-5 pb-20'>
                            <Button
                                className='text-white bg-primary w-fit py-2 px-7 border-2 border-primary hover:bg-transparent hover:text-primary'
                                label='More Countries' />
                        </div>
                    </div>

                    <div className='CHOICE-2 hidden'>
                        <div className='flagGrid grid gap-7 py-12 px-9'>

                        </div>
                    </div>

                </div>
            </section>



            <Divider
                title='GSC Recent'
                classDiamond='bg-white'
            />



            <section className='GALLERYCARD flex justify-center'>
                <div className='flex flex-col justify-center
                md:flex-row md:w-10/12'>

                    <CardGallery
                        title='News & Events'
                        news={
                            <div>
                                <div className='bg-[#CCCCCC] font-bold text-white p-1 rounded-sm w-fit'>
                                    04 OCT 2023
                                </div>
                                <h1 className='font-bold mt-2 text-lg'>
                                    IE University in Spain Europe’s most diverse – QS
                                </h1>
                                <p className='mt-4'>
                                    European universities with the continent’s highest diversity of international
                                    students have been identified in the inaugural QS Europe University
                                </p>
                                <div className='text-right'>
                                    &lt; &gt;
                                </div>
                            </div>
                        }
                    />
                    <CardGallery
                        title='GSC Gallery'
                        image={gallery}
                    />
                    <CardGallery
                        title='Media Gallery'
                        iframe={<iframe className='h-min-full h-72 w-full' src="https://www.youtube.com/embed/2BhKx0iQ4K8"
                            title="Reddit told me to buy this - PTM7950 Thermal Pad" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>}
                    />
                </div>
            </section>




            <section className='CAROUSEL bg-primary p-6 flex flex-col mt-14 justify-center items-center'>

                <Divider
                    title='Browse Other Edu Networks'
                    classH1='text-white'
                    classDiamond='bg-primary'
                />

                <SliderSwipe
                    images={[network1, network2]}
                    classSlider='flex h-24 w-1/2 justify-around items-center bg-cover bg-no-repeat bg-center'
                >

                </SliderSwipe>
                {/* <div className='flex w-full justify-around items-center'>

                    <div className=' w-2/12 flex justify-start md:justify-center'>
                        <img src={networkPrev} alt={networkPrev} />
                    </div>

                    <div className='w-8/12 flex flex-col justify-center md:flex-row'>
                        <img className='m-2 max-w-full w-full h-auto' src={netw1} alt="netw1" />
                        <img className='m-2 max-w-full w-full h-auto' src={netw1} alt="netw1" />
                    </div>

                    <div className=' w-2/12 flex justify-end md:justify-center'>
                        <img src={networkNext} alt={networkNext} />
                    </div>

                </div> */}
            </section>





            <section className='TEST bg-[#F5F5F5] pt-7 pb-8 flex flex-col items-center'>

                <Divider
                    title='Test Preparation'
                    classDiamond='bg-white'
                />

                <div className='flex flex-col justify-center items-center flex-wrap p-4
                md:justify-center md:w-10/12 lg:flex-row lg:px-7'>

                    <div className='py-2 px-4 text-[#333333] order-2 mt-4
                    lg:w-1/2 lg:pr-4 lg:order-1'>

                        <h1 className='font-bold mt-2 text-2xl'>IELTS TEST STRUCTURE</h1>
                        <p className='mt-4 text-lg text-justify leading-relaxed
                        md:leading-loose'>
                            IELTS is the International English Language Testing System, the world’s
                            proven English language test. IELTS was one of the pioneers of four skills
                            English language testing over 21 years ago, and continues to set the standard
                            for English language testing today. IELTS is accepted as evidence of English language
                            proficiency by over 8,000 organizations worldwide.
                        </p>

                        <Button
                            className='text-white bg-primary w-fit py-2 px-7 mt-5 border-2 border-primary hover:bg-transparent hover:text-primary'
                            label='View More' />
                    </div>

                    <div className='grid grid-cols-2 gap-3 p-2 order-1 mt-4
                    md:grid-cols-3 lg:w-1/2 lg:pl-4 lg:order-2'>
                        <TestCard
                            image={gre}
                            classname='bg-[#3B99D7] p-4 border-transparent border-[12px]
                            focus:bg-transparent active:border-primary'
                        />
                        <TestCard
                            image={gmat}
                            classname='bg-[#26CBBD] p-4 border-transparent border-[12px]
                            focus:bg-transparent active:border-primary'
                        />
                        <TestCard
                            image={gre}
                            classname='bg-[#F575A5] p-4 border-transparent border-[12px]
                            focus:bg-transparent active:border-primary'
                        />
                        <TestCard
                            image={gmat}
                            classname='bg-[#FFCC66] p-4 border-transparent border-[12px]
                            focus:bg-transparent active:border-primary'
                        />
                        <TestCard
                            image={gre}
                            classname='bg-[#99CC33] p-4 border-transparent border-[12px]
                            focus:bg-transparent active:border-primary'
                        />
                        <TestCard
                            image={gmat}
                            classname='bg-[#FF6633] p-4 border-transparent border-[12px]
                            focus:bg-transparent active:border-primary'
                        />

                    </div>
                </div>
            </section>





            <section
                style={{ backgroundImage: `url(${exploreBg})` }}
                className='bg-primary  bg-cover bg-no-repeat bg-center p-6 flex flex-col justify-center items-center'>


                <Divider
                    title='Browse Other Edu Networks'
                    classH1='text-white'
                    classDiamond='bg-white'
                />


                <div className='grid grid-cols-2 gap-4 my-4 pb-4 w-full justify-center items-center
                md:grid-cols-3 md:px-12 lg:grid-cols-6 lg:px-24 '>

                    <TestCard
                        image={eBrochure}
                        classname='bg-white p-4 text-black shadow-lg
                        hover:bg-primary hover:text-white
                        lg:px-0 lg:py-8'
                        label='E-brochures'
                    />
                    <TestCard
                        image={articles}
                        classname='bg-white p-4 text-black shadow-lg
                        hover:bg-primary hover:text-white
                        lg:px-0 lg:py-8'
                        label='FAQ'
                    />
                    <TestCard
                        image={counselling}
                        classname='bg-white p-4 text-black shadow-lg
                        hover:bg-primary hover:text-white
                        lg:px-0 lg:py-8'
                        label='Publications'
                    />
                    <TestCard
                        image={eBrochure}
                        classname='bg-white p-4 text-black shadow-lg
                        hover:bg-primary hover:text-white
                        lg:px-0 lg:py-8'
                        label='Media & PR'
                    />
                    <TestCard
                        image={counselling}
                        classname='bg-white p-4 text-black shadow-lg
                        hover:bg-primary hover:text-white
                        lg:px-0 lg:py-8'
                        label='Counselling'
                    />
                    <TestCard
                        image={articles}
                        classname='bg-white p-4 text-black shadow-lg
                        hover:bg-primary hover:text-white
                        lg:px-0 lg:py-8'
                        label='Article'
                    />
                </div>
            </section>




            <section className='ABOUT-ND-AWARD mt-7'>


                <div className='flex flex-col flex-wrap
                    md:flex-row md:justify-center md:px-12 lg:px-28'>

                    <div className='LEFT-MAIN md:w-1/2 px-8'>
                        <Divider
                            title='About Global Study Center'
                            classH1='text-black'
                            classDiamond='bg-white'
                        />

                        <img className='w-full' src={abouImg} alt="about" />

                    </div>


                    <div className='RIGHT-MAIN flex flex-col items-center px-8 md:w-1/2'>
                        <Divider
                            title='Awards and Memberships'
                            classH1='text-black'
                            classDiamond='bg-white'
                        />

                        <SliderSwipe
                            images={[network1, network2]}
                            classSlider='flex h-24 w-1/2 justify-around items-center bg-cover bg-no-repeat bg-center'
                        >
                        </SliderSwipe>
                    </div>

                </div>

                <div className='TEXT pt-4 pb-12 px-8 md:px-20 lg:px-36'>
                    <p className='text-justify leading-9'>GSC Pvt.Ltd. is an AIRC Certified and also trained agents of ICEF and it is a leading Overseas Education Consultancy.
                        Our team of young professionals is lead by experts and benefits from guidance of several internationally reputed
                        Legal advisors and experienced experts. We assist Indian students seeking admissions in globally recognized education
                        programs offered by famous academic institutions all over the world.</p>

                    <Button
                        className='text-white bg-primary w-fit py-2 px-7 mt-5 border-2 border-primary hover:bg-transparent hover:text-primary'
                        label='View More' />
                </div>

            </section>




            <section className='TESTIMONIAL py-8 bg-[#F5F5F5]'>

                <Divider
                    title='What Students Say'
                    classH1='text-black'
                    classDiamond='bg-white'
                />

                <div className='slider p-8 flex flex-col items-center md:flex-row'>

                    <div className='LEFT md:w-1/3 text-center'>
                        <img className='rounded-full inline-block' src={testimonial} alt="testimonial" />
                        <p className='text-center'>-- Stanly Shaji</p>
                    </div>


                    <div className='RIGHT pt-4 md:pt-0 md:w-2/3'>
                        <p className='text-justify md:text-center leading-8'>I am glad to be one among the students to avail the Gold Scholarship for studies abroad and this is mainly
                            because of the support and guidance & Visa Expertise of GSC.I Suggest everyone to select GSC as their
                            consultant while planning for abroad studies.</p>
                    </div>
                </div>

            </section>





            <section className='IMAGES'>

                <Divider
                    title='GSC Features'
                    classH1='text-black'
                    classDiamond='bg-white'
                />


                <div className='IMAGE-MAIN flex flex-col flex-wrap pb-8
                md:px-12 md:flex-row lg:px-28'>

                    <div className='LEFT-IMAGE px-3 md:w-1/2'>
                        <img className='w-full h-full object-center object-cover' src={eduFairs} alt="" />
                    </div>

                    <div className='RIGHT-IMAGE px-3 flex flex-wrap pt-8 md:w-1/2 md:pt-0'>

                        <div className='LEFT w-1/2 pr-4'>
                            <img className='w-full h-full object-center object-cover' src={scholarships} alt="" />
                        </div>

                        <div className='RIGHT w-1/2 pl-4'>
                            <img className='w-full h-full object-center object-cover' src={internship} alt="" />
                        </div>

                    </div>
                </div>


                <div className='IMAGE-MAIN-2 flex flex-col flex-wrap pb-8
                md:px-12 md:flex-row lg:px-28'>

                    <div className='LEFT-IMAGE px-3 md:w-1/2'>
                        <img className='w-full h-full object-center object-cover' src={eduFairs} alt="" />
                    </div>

                    <div className='RIGHT-IMAGE px-3 flex flex-wrap pt-8 md:w-1/2 md:pt-0'>

                        <div className='LEFT w-1/2 pr-4'>
                            <img className='w-full h-full object-center object-cover' src={scholarships} alt="" />
                        </div>

                        <div className='RIGHT w-1/2 pl-4'>
                            <img className='w-full h-full object-center object-cover' src={internship} alt="" />
                        </div>

                    </div>
                </div>

            </section>



            <Footer
                className='hidden md:block'
            />




        </div>
    )
}

export default Home