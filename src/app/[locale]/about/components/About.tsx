"use client"
import { useI18n } from '@/src/locales/client';
import { useEffect } from 'react';

import "swiper/css";
import "swiper/css/navigation";
import AOS from 'aos';
import Image from 'next/image';
import 'aos/dist/aos.css'
import founder from '@/public/assets/founder.png'
import { Quote} from 'lucide-react';
import z1 from '@/public/assets/z1.png'
import z2 from '@/public/assets/z2.png'
import z3 from '@/public/assets/z3.png'
import z4 from '@/public/assets/z4.png'
import award1 from '@/public/assets/award1.jpg'
import award2 from '@/public/assets/award2.jpg'
import award3 from '@/public/assets/award3.jpg'
import award4 from '@/public/assets/award4.jpg'
import award5 from '@/public/assets/award5.jpg'
import Marquee from 'react-fast-marquee';
export default function About() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);
    const t = useI18n();


    return (
        <>
            <section data-aos='slide-up' className='bg-blue20 mt-20'>
                <div className='flex items-center justify-center md:gap-5 gap-3 flex-col max-w-6xl mx-auto p-6'>
                    <h1 className='text-blue text-center'>{t('about.header')}-<span className='text-violet font-header md:text-5xl text-2xl font-extrabold leading-12 '>{t('about.chs')}</span></h1>
                    <p className='md:text-[18px] text-center'>{t('about.text')}
                    </p>
                </div>
            </section>
            <section data-aos='slide-up'>
                <div className='grid md:grid-cols-2  gap-5  max-w-6xl mx-auto p-6'>
                    <div data-aos='slide-right' className='rounded-2xl bg-blue p-3'>
                        <h2 className='font-syne md:text-2xl text-xl font-extrabold text-white '>{t('about.mission')}</h2>
                        <p className='text-[16px] text-white'>{t('about.mtext')}</p>
                    </div>
                    <div data-aos='slide-left' className='rounded-2xl max-md:mt-10 bg-red-100/60 p-3'>
                        <h2 className='font-syne md:text-2xl text-xl font-extrabold text-blue'>{t('about.vision')}</h2>
                        <p className='text-[16px] text-gray'>{t('about.vtext')}</p>
                    </div>
                </div>
            </section>

            <section data-aos='slide-up' className='bg-blue20'>
                <div className='grid gap-5 max-w-6xl mx-auto p-6  place-items-center'>
                    <h2 className='md:text-5xl text-3xl text-center font-header font-extrabold text-blue'>{t('about.pdg')}</h2>
                    <div className='grid md:grid-cols-2 gap-5 max-md:gap10'>
                        <div data-aos='slide-right' className='flex flex-col gap-3'>
                            <div className='rounded-2xl'>
                                <Image src={founder} alt='founder' className='object-cover rounded-2xl' />
                            </div>
                            <div className='rounded-xl bg-violet absolute p-3 text-white -bottom-5 left-1/2'>
                                <h3 className='text-[14px]'>{t('about.1988')}</h3>
                                <span className='text-[12px] leading-4'>{t('about.camroun')}</span>
                            </div>
                        </div>
                        <div data-aos='slide-left' className='flex flex-col gap-3 max-md:mt-5'>
                            <div className='flex flex-col gap-3'>
                                <h3 className='font-syne font-extrabold text-xl text-blue md:text-2xl'>{t('about.name')}</h3>
                                <span className='font-semibold text-[14px] text-violet'>{t('about.pdgt')}</span>
                            </div>
                            <p className='md:text-[16px] text-[14px] text-gray'>{t('about.text1')}</p>
                            <p className='md:text-[16px] text-[14px] text-gray'>{t('about.text2')}</p>
                            <div className='bg-blue p-5 rounded-2xl text-white flex flex-col gap-2'>
                                <Quote className='w-10 text-violet' />
                                <p className='italic font-medium text-[16px]'>{t('about.word')}</p>
                                <span className='font-semibold text-[14px] text-violet'>----{t('about.ceo')}</span>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos='slide-up' >
                <div className='grid   md:gap-5 gap-3  max-w-6xl mx-auto p-6 place-items-center'>
                    <h2 className='font-header text-3xl md:text-5xl text-center text-blue'>{t('about.guide')}</h2>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>

                        <div data-aos='zoom-in' className='bg-white rounded-xl border border-blue20 p-5 flex flex-col gap-3'>
                            <Image src={z1} alt='icon' className='w-10 bg-red-100 p-3 rounded-xl' />
                            <h3 className='text-blue font-extrabold text-lg'>{t('about.excellence')}</h3>
                            <p className='text-[14px] text-gray'>{t('about.extext')}</p>
                        </div>
                        <div data-aos='zoom-in' className='bg-white rounded-xl border border-blue20 p-5 flex flex-col gap-3'>
                            <Image src={z1} alt='icon' className='w-10 bg-red-100 p-3 rounded-xl' />
                            <h3 className='text-blue font-extrabold text-lg'>{t('about.integrite')}</h3>
                            <p className='text-[14px] text-gray'>{t('about.intext')}</p>
                        </div>
                        <div data-aos='zoom-in' className='bg-white rounded-xl border border-blue20 p-5 flex flex-col gap-3'>
                            <Image src={z2} alt='icon' className='w-10 bg-red-100 p-3 rounded-xl' />
                            <h3 className='text-blue font-extrabold text-lg'>{t('about.security')}</h3>
                            <p className='text-[14px] text-gray'>{t('about.setext')}</p>
                        </div>
                        <div data-aos='zoom-in' className='bg-white rounded-xl border border-blue20 p-5 flex flex-col gap-3'>
                            <Image src={z3} alt='icon' className='w-10 bg-red-100 p-3 rounded-xl' />
                            <h3 className='text-blue font-extrabold text-lg'>{t('about.innovation')}</h3>
                            <p className='text-[14px] text-gray'>{t('about.inovtext')}</p>
                        </div>
                        <div data-aos='zoom-in' className='bg-white rounded-xl border border-blue20 p-5 flex flex-col gap-3'>
                            <Image src={z4} alt='icon' className='w-10 bg-red-100 p-3 rounded-xl' />
                            <h3 className='text-blue font-extrabold text-lg'>{t('about.environement')}</h3>
                            <p className='text-[14px] text-gray'>{t('about.envtext')}</p>
                        </div>
                    </div>
                </div>
            </section>
            <section data-aos='slide-up' >
                <div className='grid   md:gap-5 gap-3  max-w-6xl mx-auto p-6 place-items-center'>
                    <h2 className='font-header text-3xl md:text-5xl text-center text-blue'>{t('about.profesionel')}</h2>
                    <p className=' text-lg text-center text-gray'>{t('about.protext')}</p>
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>



                        <div data-aos="zoom-in" className="bg-white rounded-xl border border-blue20 p-5 flex flex-col items-center gap-3">
                           
                            <h3 className="text-blue font-extrabold text-lg">{t("about.entretien")}</h3>
                            <span className="font-syne font-extrabold text-violet text-center text-xl md:text-2xl">20+</span>
                            <p className="text-[14px] text-gray">{t("about.entrtext")}</p>
                        </div>

                        <div data-aos="zoom-in" className="bg-white rounded-xl border border-blue20 p-5 flex flex-col items-center gap-3">
                           
                            <h3 className="text-blue font-extrabold text-lg">{t("about.plombier")}</h3>
                            <span className="font-syne font-extrabold text-violet text-center text-xl md:text-2xl">8+</span>
                            <p className="text-[14px] text-gray">{t("about.plomtext")}</p>
                        </div>

                        <div data-aos="zoom-in" className="bg-white rounded-xl border border-blue20 p-5 flex flex-col items-center gap-3">
                            
                            <h3 className="text-blue font-extrabold text-lg">{t("about.electricien")}</h3>
                            <span className="font-syne font-extrabold text-violet text-center text-xl md:text-2xl">5+</span>
                            <p className="text-[14px] text-gray">{t("about.electext")}</p>
                        </div>

                        <div data-aos="zoom-in" className="bg-white rounded-xl border border-blue20 p-5 flex flex-col items-center gap-3">
            
                            <h3 className="text-blue font-extrabold text-lg">{t("about.careleur")}</h3>
                            <span className="font-syne font-extrabold text-violet text-center text-xl md:text-2xl">6+</span>
                            <p className="text-[14px] text-gray">{t("about.cartext")}</p>
                        </div>

                        <div data-aos="zoom-in" className="bg-white rounded-xl border border-blue20 p-5 flex flex-col items-center gap-3">
                           
                            <h3 className="text-blue font-extrabold text-lg text-center">{t("about.application")}</h3>
                            <span className="font-syne font-extrabold text-violet text-center text-xl md:text-2xl">10+</span>
                            <p className="text-[14px] text-gray">{t("about.apptext")}</p>
                        </div>

                        <div data-aos="zoom-in" className="bg-white rounded-xl border border-blue20 p-5 flex flex-col items-center gap-3">
                           
                            <h3 className="text-blue font-extrabold text-lg">{t("about.deco1")}</h3>
                            <span className="font-syne font-extrabold text-violet text-center text-xl md:text-2xl">4+</span>
                            <p className="text-[14px] text-gray">{t("about.deco")}</p>
                        </div>
                    </div>
                </div>
            </section>
               <section data-aos='slide-up' >
                <div className='grid   md:gap-5 gap-3  max-w-6xl mx-auto p-6 place-items-center'>
                    <h2 className='font-header text-3xl md:text-5xl text-center text-blue'>{t('about.award')}</h2>
                      <Marquee
            speed={50}
            gradient={false}
            pauseOnHover
            autoFill
          >
            <div className="mx-8">
              <Image src={award1} alt="Award1" className="w-auto h-50 object-contain" />
            </div>

            <div className="mx-8">
              <Image src={award2} alt="Award2" className="h-50  w-auto object-contain" />
            </div>

            <div className="mx-8">
              <Image src={award3} alt="Award3" className="h-50  w-auto object-contain" />
            </div>

            <div className="mx-8">
              <Image src={award4} alt="Award4" className="h-50  w-auto object-contain" />
            </div>

            <div className="mx-8">
              <Image src={award5} alt="Award5" className="h-50  w-auto object-contain" />
            </div>
          </Marquee>

            
                </div>
            </section>
            <section data-aos='slide-up' className='bg-blue20'>
                <div className='max-w-6xl mx-auto place-items-center p-6 grid gap-5'>
                    <h2 className='font-header text-3xl md:text-5xl text-center text-blue'>{t('engagement.title')}</h2>
                      <div className="relative  max-w-4xl">
          {/* Ligne verticale */}
          <div className="absolute w-px left-2 top-0 bottom-0 bg-blue"></div>

          {/* Item 1 */}
          <div className="relative pl-12 pb-8">
            <div className="absolute left-0 top-1">
              <div className="w-4 h-4 rounded-full bg-violet flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>

            <h3 className="text-blue font-semibold text-sm md:text-base leading-relaxed">
             {t('engagement.item1.title')}
            </h3>

            <p className="text-gray text-xs md:text-sm mt-1">
             {t('engagement.item1.text')}
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative pl-12 pb-8">
            <div className="absolute left-0 top-1">
              <div className="w-4 h-4 rounded-full bg-violet flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>

            <h3 className="text-blue font-semibold text-sm md:text-base leading-relaxed">
              {t('engagement.item2.title')}
            </h3>

            <p className="text-gray text-xs md:text-sm mt-1">
              {t('engagement.item2.text')}
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative pl-12 pb-8">
            <div className="absolute left-0 top-1">
              <div className="w-4 h-4 rounded-full bg-violet flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>

            <h3 className="text-blue font-semibold text-sm md:text-base leading-relaxed">
              {t('engagement.item3.title')}
            </h3>

            <p className="text-gray text-xs md:text-sm mt-1">
              {t('engagement.item3.text')}
            </p>
          </div>

          {/* Item 4 */}
          <div className="relative pl-12 pb-8">
            <div className="absolute left-0 top-1">
              <div className="w-4 h-4 rounded-full bg-violet flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>

            <h3 className="text-blue font-semibold text-sm md:text-base leading-relaxed">
             {t('engagement.item4.title')}
            </h3>

            <p className="text-gray text-xs md:text-sm mt-1">
             {t('engagement.item4.text')}
            </p>
          </div>

          {/* Item 5 */}
          <div className="relative pl-12 pb-8">
            <div className="absolute left-0 top-1">
              <div className="w-4 h-4 rounded-full bg-violet flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>

            <h3 className="text-blue font-semibold text-sm md:text-base leading-relaxed">
             {t('engagement.item5.title')}
            </h3>

            <p className="text-gray text-xs md:text-sm mt-1">
              {t('engagement.item5.text')}
            </p>
          </div>

          {/* Item 6 */}
          <div className="relative pl-12 pb-8">
            <div className="absolute left-0 top-1">
              <div className="w-4 h-4 rounded-full bg-violet flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>

            <h3 className="text-blue font-semibold text-sm md:text-base leading-relaxed">
              {t('engagement.item6.title')}
            </h3>

            <p className="text-gray text-xs md:text-sm mt-1">
              {t('engagement.item6.text')}
            </p>
          </div>

          {/* Item 7 */}
          <div className="relative pl-12 pb-8">
            <div className="absolute left-0 top-1">
              <div className="w-4 h-4 rounded-full bg-violet flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>

            <h3 className="text-blue font-semibold text-sm md:text-base leading-relaxed">
              {t('engagement.item7.title')}
            </h3>
          </div>

          {/* Item 8 */}
          <div className="relative pl-12">
            <div className="absolute left-0 top-1">
              <div className="w-4 h-4 rounded-full bg-violet flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </div>
            </div>

            <h3 className="text-blue font-semibold text-sm md:text-base leading-relaxed">
             {t('engagement.item8.title')}
            </h3>
          </div>
        </div>
                </div>
            </section>

        </>
    )
}
