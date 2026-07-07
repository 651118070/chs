"use client"
import { useI18n } from '@/src/locales/client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, MessageCircle, Plus, Quote, Star, StarIcon } from 'lucide-react';
import Marquee from "react-fast-marquee";
import amor from '@/public/assets/armor.png'
import star from '@/public/assets/star-h.png'
import price from '@/public/assets/price-h.png'
import fast from '@/public/assets/fast.png'
import Image from 'next/image';
import lobby from '@/public/assets/lobby.png'
import warning from '@/public/assets/warning-h.png'
import whatsapp from '@/public/assets/whatsapp.png'
import gmc from '@/public/assets/gmc.png'
import sonara from '@/public/assets/sonara.png'
import chococam from '@/public/assets/chococam.png'
import camairco from '@/public/assets/camairco.png'
import utrac from '@/public/assets/utrac.png'
import net from '@/public/assets/net.png'
import net1 from '@/public/assets/net2.png'
import net2 from '@/public/assets/net3.png'
import net3 from '@/public/assets/net4.png'
import net4 from '@/public/assets/net5.png'
import net5 from '@/public/assets/net6.png'
import net6 from '@/public/assets/net7.png'
import net7 from '@/public/assets/net8.png'
import s1 from '@/public/assets/s1.png'
import s2 from '@/public/assets/s2.png'
import s3 from '@/public/assets/s3.png'
import s4 from '@/public/assets/s4.png'
import s5 from '@/public/assets/s5.png'
import s6 from '@/public/assets/s6.png'
import s7 from '@/public/assets/s7.png'
import s8 from '@/public/assets/s8.png'
import s9 from '@/public/assets/s9.png'
import s10 from '@/public/assets/s10.png'
import hygiene from '@/public/assets/hygiene-s.png'
import nettoyage from '@/public/assets/nettoyage-s.png'
import water from '@/public/assets/water.png'
import scarabee from '@/public/assets/scarabee.png'
import tree from '@/public/assets/tree.png'
import box from '@/public/assets/box.png'
import boat from '@/public/assets/boat.png'
import check from '@/public/assets/check.png'
import gap from '@/public/assets/gap.png'
import Link from 'next/link';
import { useParams } from 'next/navigation';
import t1 from '@/public/assets/t1.png'
import t2 from '@/public/assets/t2.png'
import t3 from '@/public/assets/t3.png'
import t4 from '@/public/assets/t4.png'
import t5 from '@/public/assets/t5.png'
import t6 from '@/public/assets/t6.png'
import t7 from '@/public/assets/t7.png'
import t8 from '@/public/assets/t8.png'
import t9 from '@/public/assets/t9.png'
import t10 from '@/public/assets/t10.png'
import t11 from '@/public/assets/t11.png'
import t12 from '@/public/assets/t12.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function Section() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);
  const t = useI18n();

  const params = useParams();

  const locale = params?.locale || "fr";

  return (
    <main>
      <section data-aos='slide-up' className='bg-blue20 min-h-screen mt-20 '>
        <div className='max-w-6xl mx-auto gap-5 grid lg:grid-cols-2 p-6 max-lg:place-items-center max-lg:text-center'>
          <div data-aos='slide-right' className='flex flex-col gap-5 '>
            <h1 className='md:text-6xl text-2xl text-blue font-extrabold tracking-wide font-header'>{t('home.header')} <span className='md:text-6xl text-2xl text-violet font-extrabold font-header'>{t('home.span')}</span> {t('home.all')}</h1>
            <p className='font-base text-lg leading-7 text-gray max-lg:text-center'>{t('home.text')}
            </p>
            <div className='flex gap-3 max-md:flex-col items-center max-lg:justify-center'>
              <Link href={`/${locale}/contact/`}><button className='btn-devis bg-blue flex items-center '>{t('navbar.devis')}
                <ArrowRight />
              </button></Link>
              <Link href={`/${locale}/services/`}><button className='btn-devis bg-transparent border border-blue text-blue'>{t('home.service')}</button>
              </Link>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 place-items-center'>
              <div>
                <Image src={amor} alt='icon' className='w-5' />
                <span className='font-header flex gap-0.5 items-center font-extrabold text-blue text-[20px] leading-7'>9<Plus className='text-blue' /></span>
                <p className='font-base font-normal text-[12px] leading-4'>{t('home.domaine')}</p>
              </div>

              <div>
                <Image src={price} alt='icon' className='w-5' />
                <span className='font-header flex gap-0.5 items-center font-extrabold text-blue text-[20px] leading-7'>5<Star className='text-blue' /></span>
                <p className='font-base font-normal text-[12px] leading-4'>{t('home.qualifie')}</p>
              </div>
              <div>
                <Image src={star} alt='icon' className='w-5' />
                <span className='font-header font-extrabold text-blue text-[20px] leading-7'>100%</span>
                <p className='font-base font-normal text-[12px] leading-4'>{t('home.professionel')}</p>
              </div>
              <div>
                <Image src={fast} alt='icon' className='w-5' />
                <span className='font-header font-extrabold text-blue text-[20px] leading-7'>24h</span>
                <p className='font-base font-normal text-[12px] leading-4'>{t('home.rapide')}</p>
              </div>
            </div>
          </div>
          <div data-aos='slide-left' className=' relative flex items-center'>
            <Image src={lobby} alt='lobby' className='rounded-2xl' />
            <div className='flex flex-col gap-2 absolute top-1/2 max-md:top-5 left-5 bg-white/80 rounded-2xl p-3'>
              <div className='flex gap-2 '>
                <Image src={warning} alt='warning' className='w-5' />
                <span className='font-base text-[12px] font-semibold leading-4 text-blue'>{t('home.maladie')}</span>
              </div>
              <div className='flex flex-wrap gap-3 text-center'>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.gastro')}</span>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.hepatie')}</span>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.salmonellose')}</span>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.Dermatites')}</span>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.infection')}</span>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.dore')}</span>
              </div>
            </div>

          </div>
        </div>

      </section>
      <Link className='fixed w-20  z-50 bottom-0 right-5' href={'https://wa.me/+237699949450'}><Image src={whatsapp} alt='whatsapp' /></Link>
      <section data-aos='slide-up'>
        <div className='grid max-w-6xl mx-auto gap-5 p-6'>
          <div className='flex flex-col gap-2 items-center text-center'>
            <h2 className='text-blue font-header text-2xl font-extrabold md:text-5xl'>{t('home.netoyage')}</h2>
            <p className='text-gray text-lg '>{t('home.ntext')}</p>
          </div>
          <div className="grid grid-cols-1  md:grid-cols-3  gap-5">

            {/* Card 1 */}
            <div data-aos='zoom-in' className="bg-blue20 w-full min-w-0 flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue overflow-hidden">
              <Image
                src={net}
                alt="icon"
                className="w-10 object-contain bg-red-200 rounded-xl p-2"
              />
              <h3 className="text-blue text-[14px] ">
                {t('home.deinfection')}
              </h3>
              <p className="text-[12px] text-gray ">
                {t('home.dtext')}
              </p>
            </div>

            {/* Card 2 */}
            <div data-aos='zoom-in' className="bg-blue20 w-full min-w-0 flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue overflow-hidden">
              <Image src={net1} alt="icon" className="w-10 object-contain bg-red-200 rounded-xl p-2" />
              <h3 className="text-blue text-[14px] ">
                {t('home.detartage')}
              </h3>
              <p className="text-[12px] text-gray ">
                {t('home.detext')}
              </p>
            </div>

            {/* Card 3 */}
            <div data-aos='zoom-in' className="bg-blue20 w-full min-w-0 flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue overflow-hidden">
              <Image src={net2} alt="icon" className="w-10 object-contain bg-red-200 rounded-xl p-2" />
              <h3 className="text-blue text-[14px] ">
                {t('home.performance')}
              </h3>
              <p className="text-[12px] text-gray b">
                {t('home.ptext')}
              </p>
            </div>

            {/* Card 4 */}
            <div data-aos='zoom-in' className="bg-blue20 w-full min-w-0 flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue overflow-hidden">
              <Image src={net3} alt="icon" className="w-10 object-contain bg-red-200 rounded-xl p-2" />
              <h3 className="text-blue text-[14px] ">
                {t('home.gestion')}
              </h3>
              <p className="text-[12px] text-gray ">
                {t('home.gtext')}
              </p>
            </div>

            {/* Card 5 */}
            <div data-aos='zoom-in' className="bg-blue20 w-full min-w-0 flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue overflow-hidden">
              <Image src={net4} alt="icon" className="w-10 object-contain bg-red-200 rounded-xl p-2" />
              <h3 className="text-blue text-[14px] ">
                {t('home.air')}
              </h3>
              <p className="text-[12px] text-gray ">
                {t('home.atext')}
              </p>
            </div>

            {/* Card 6 */}
            <div data-aos='zoom-in' className="bg-blue20 w-full min-w-0 flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue overflow-hidden">
              <Image src={net5} alt="icon" className="w-10 object-contain bg-red-200 rounded-xl p-2" />
              <h3 className="text-blue text-[14px] ">
                {t('home.specialise')}
              </h3>
              <p className="text-[12px] text-gray ">
                {t('home.stext')}
              </p>
            </div>

            {/* Card 7 */}
            <div data-aos='zoom-in' className="bg-blue20 w-full min-w-0 flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue overflow-hidden">
              <Image src={net6} alt="icon" className="w-10 object-contain bg-red-200 rounded-xl p-2" />
              <h3 className="text-blue text-[14px] ">
                {t('home.personel')}
              </h3>
              <p className="text-[12px] text-gray ">
                {t('home.petext')}
              </p>
            </div>

            {/* Card 8 */}
            <div data-aos='zoom-in' className="bg-blue20 w-full min-w-0 flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue overflow-hidden">
              <Image src={net7} alt="icon" className="w-10 object-contain bg-red-200 rounded-xl p-2" />
              <h3 className="text-blue text-[14px] s">
                {t('home.consomables')}
              </h3>
              <p className="text-[12px] text-gray ">
                {t('home.ctext')}
              </p>
            </div>

          </div>
          <div className='grid gap-5 '>
            <h2 className='font-header text-[20px] text-center text-blue'>{t('home.formule')}</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5'>
              <div data-aos='zoom-in' className="bg-blue20   flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue ">
                <h3 className="text-blue font-header text-lg ">
                  {t('home.quotidien')}
                </h3>
                <p className="text-[12px] text-gray ">
                  {t('home.qtext')}
                </p>
              </div>
              <div data-aos='zoom-in' className='relative  '>
                <div className='bg-violet -top-3 left-1/3 flex gap-2 px-3 py-0.5 z-20 absolute rounded-2xl text-white'>< StarIcon className='w-5' />{t('home.popular')}</div>
                <div className="bg-red-300/20  flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-r ">
                  <h3 className="text-blue font-header text-lg ">
                    {t('home.hebdomadaire')}
                  </h3>
                  <p className="text-[12px] text-gray ">
                    {t('home.htext')}
                  </p>
                </div>
              </div>

              <div data-aos='zoom-in' className="bg-blue20   flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue ">
                <h3 className="text-blue font-header text-lg ">
                  {t('home.mensuel')}
                </h3>
                <p className="text-[12px] text-gray ">
                  {t('home.mtext')}
                </p>
              </div>
              <div data-aos='zoom-in' className="bg-blue20   flex flex-col gap-2 rounded-2xl p-3 hover:scale-105 duration-300 transition-transform border border-blue ">
                <h3 className="text-blue font-header text-lg ">
                  {t('home.ponctuel')}
                </h3>
                <p className="text-[12px] text-gray ">
                  {t('home.potext')}
                </p>
              </div>
            </div>
          </div>
          <div className='grid gap-2 place-items-center'>
            <h2 className='font-header text-lg text-blue text-center'>{t('home.secteur')}</h2>
            <div className='flex flex-wrap gap-3'>
              <div className='rounded-2xl px-3 py-2 bg-blue20 flex gap-2'>
                <Image src={s1} className='w-5 object-cover' alt='icon' />
                <span className='font-base font-medium text-[14px] text-gray animate-pulse'>{t('home.bureau')}</span>
              </div>
              <div className='rounded-2xl px-3 py-2 bg-blue20 flex gap-2'>
                <Image src={s2} className='w-5 object-cover' alt='icon' />
                <span className='font-base font-medium text-[14px] text-gray animate-pulse'>{t('home.resto')}</span>
              </div>
              <div className='rounded-2xl px-3 py-2 bg-blue20 flex gap-2'>
                <Image src={s3} className='w-5 object-cover' alt='icon' />
                <span className='font-base font-medium text-[14px] text-gray animate-pulse'>{t('home.hosto')}</span>
              </div>
              <div className='rounded-2xl px-3 py-2 bg-blue20 flex gap-2'>
                <Image src={s4} className='w-5 object-cover' alt='icon' />
                <span className='font-base font-medium text-[14px] text-gray animate-pulse'>{t('home.school')}</span>
              </div>
              <div className='rounded-2xl px-3 py-2 bg-blue20 flex gap-2'>
                <Image src={s5} className='w-5 object-cover' alt='icon' />
                <span className='font-base font-medium text-[14px] text-gray animate-pulse'>{t('home.station')}</span>
              </div>
              <div className='rounded-2xl px-3 py-2 bg-blue20 flex gap-2'>
                <Image src={s6} className='w-5 object-cover' alt='icon' />
                <span className='font-base font-medium text-[14px] text-gray animate-pulse'>{t('home.commerces')}</span>
              </div>
              <div className='rounded-2xl px-3 py-2 bg-blue20 flex gap-2'>
                <Image src={s7} className='w-5 object-cover' alt='icon' />
                <span className='font-base font-medium text-[14px] text-gray animate-pulse'>{t('service.hotel')}</span>
              </div>
              <div className='rounded-2xl px-3 py-2 bg-blue20 flex gap-2'>
                <Image src={s8} className='w-5 object-cover' alt='icon' />
                <span className='font-base font-medium text-[14px] text-gray animate-pulse'>{t('home.sport')}</span>
              </div>
              <div className='rounded-2xl px-3 py-2 bg-blue20 flex gap-2'>
                <Image src={s9} className='w-5 object-cover' alt='icon' />
                <span className='font-base font-medium text-[14px] text-gray animate-pulse'>{t('home.immeuble')}</span>
              </div>
              <div className='rounded-2xl px-3 py-2 bg-blue20 flex gap-2'>
                <Image src={s10} className='w-5 object-cover' alt='icon' />
                <span className='font-base font-medium text-[14px] text-gray animate-pulse'>{t('home.residence')}</span>
              </div>
            </div>
          </div>
          <Link href={'https://wa.me/+237699949450'}><button className='btn-devis justify-self-center bg-violet md:w-1/2 px-3 py-1 flex gap-2 justify-center items-center'>{t('home.devis')}<ArrowRight /></button></Link>
        </div>
      </section>
      <section data-aos='slide-up' className='bg-blue20'>
        <div className='grid max-w-6xl mx-auto gap-10 p-6'>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='text-blue font-header text-center text-2xl font-extrabold md:text-5xl'>{t('home.sanitaire')}</h2>
            <p className='font-base text-lg leading-7 text-gray max-lg:text-center'>{t('home.satext')}</p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t1} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-red-200' />
              <h3 className='font-header text-lg font-extrabold text-blue'>{t('home.bacterie')}</h3>
              <p className='text-[14px] text-gray'>{t('home.btext')}</p>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t2} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-orange-200' />
              <h3 className='font-header text-lg font-extrabold text-blue'>{t('home.virales')}</h3>
              <p className='text-[14px] text-gray'>{t('home.vtext')}</p>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t3} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-purple-200' />
              <h3 className='font-header text-lg font-extrabold text-blue'>{t('home.impact')}</h3>
              <p className='text-[14px] text-gray'>{t('home.itext')}</p>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t4} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-orange-200' />
              <h3 className='font-header text-lg font-extrabold text-blue'>{t('home.financier')}</h3>
              <p className='text-[14px] text-gray'>{t('home.ftext')}</p>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t5} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-red-200' />
              <h3 className='font-header text-lg font-extrabold text-blue'>{t('home.risques')}</h3>
              <p className='text-[14px] text-gray'>{t('home.rtext')}</p>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t6} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-red-200' />
              <h3 className='font-header text-lg font-extrabold text-blue'>{t('home.solution')}</h3>
              <p className='text-[14px] text-gray'>{t('home.sotext')}</p>
            </div>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <h2 className='text-blue font-header text-2xl font-extrabold md:text-5xl'>{t('home.services')}</h2>
            <p className='font-base text-lg leading-7 text-gray max-lg:text-center'>{t('home.sstext')}</p>
          </div>
          <div className='grid md:grid-cols-3 gap-5'>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex  items-center p-3 gap-2 '>
              <Image src={hygiene} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-blue-100' />
              <h3 className=' text-[16px] font-semibold text-blue'>{t('service.hygiene')}</h3>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex  items-center p-3 gap-2 '>
              <Image src={nettoyage} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-blue-100' />
              <h3 className=' text-[16px] font-semibold text-blue'>{t('service.netoyage')}</h3>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex  items-center p-3 gap-2 '>
              <Image src={water} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-blue-100' />
              <h3 className=' text-[16px] font-semibold text-blue'>{t('service.entretien')}</h3>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex  items-center p-3 gap-2 '>
              <Image src={scarabee} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-blue-100' />
              <h3 className=' text-[16px] font-semibold text-blue'>{t('service.piscine')}</h3>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex  items-center p-3 gap-2 '>
              <Image src={tree} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-blue-100' />
              <h3 className=' text-[16px] font-semibold text-blue'>{t('service.phytosanitaires')}</h3>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex  items-center p-3 gap-2 '>
              <Image src={box} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-blue-100' />
              <h3 className=' text-[16px] font-semibold text-blue'>{t('service.emballage')}</h3>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex  items-center p-3 gap-2 '>
              <Image src={boat} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-blue-100' />
              <h3 className=' text-[16px] font-semibold text-blue'>{t('service.navire')}</h3>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex  items-center p-3 gap-2 '>
              <Image src={check} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-blue-100' />
              <h3 className=' text-[16px] font-semibold text-blue'>{t('service.audit')}</h3>
            </div>
            <div data-aos='zoom-in' className='bg-white rounded-2xl flex  items-center p-3 gap-2 '>
              <Image src={gap} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-blue-100' />
              <h3 className=' text-[16px] font-semibold text-blue'>{t('service.qhse')}</h3>
            </div>

          </div>
          <Link href={`/${locale}/services/`}><button className='btn-devis justify-self-center bg-violet md:w-1/2 px-3 py-1 flex gap-2 justify-center items-center'>{t('home.voirservices')}<ArrowRight /></button></Link>
        </div>
      </section>
      <section className='bg-blue'>
        <div className='grid max-w-6xl mx-auto place-items-center gap-5 p-6'>
          <div className='flex flex-col items-center gap-3 text-white'>
            <span className="bg-white/10 text-white font-semibold text-[12px]  rounded-2xl px-3 py-1">{t('home.atout')}</span>
            <h2 className='md:text-5xl text-center text-2xl font-header font-extrabold '>{t('home.chs')}</h2>
            <p className='font-base text-lg  text-white/70'>{t('home.chtext')}</p>

          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <div data-aos='zoom-in' className='bg-white/10 rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t7} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-white' />
              <h3 className='font-header text-lg font-extrabold text-white'>{t('home.qualifie')}</h3>
              <p className='text-[14px] text-white/70'>{t('home.qutext')}</p>
            </div>
            <div data-aos='zoom-in' className='bg-white/10 rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t8} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-white' />
              <h3 className='font-header text-lg font-extrabold text-white'>{t('home.equipement')}</h3>
              <p className='text-[14px] text-white/70'>{t('home.eqtext')}</p>
            </div>
            <div data-aos='zoom-in' className='bg-white/10 rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t9} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-white' />
              <h3 className='font-header text-lg font-extrabold text-white'>{t('home.respect')}</h3>
              <p className='text-[14px] text-white/70'>{t('home.retext')}</p>
            </div>
            <div data-aos='zoom-in' className='bg-white/10 rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t10} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-white' />
              <h3 className='font-header text-lg font-extrabold text-white'>{t('home.intervention')}</h3>
              <p className='text-[14px] text-white/70'>{t('home.intext')}</p>
            </div>
            <div data-aos='zoom-in' className='bg-white/10 rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t11} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-white' />
              <h3 className='font-header text-lg font-extrabold text-white'>{t('home.adapte')}</h3>
              <p className='text-[14px] text-white/70'>{t('home.adtext')}</p>
            </div>
            <div data-aos='zoom-in' className='bg-white/10 rounded-2xl flex flex-col p-3 gap-2 '>
              <Image src={t12} alt='icon' className='object-cover w-10 p-3 rounded-xl bg-white' />
              <h3 className='font-header text-lg font-extrabold text-white'>{t('home.satisfaction')}</h3>
              <p className='text-[14px] text-white/70'>{t('home.sattext')}</p>
            </div>
          </div>
        </div>
      </section>
      <section data-aos='slide-up' className='bg-blue20 '>
        <div className='max-w-6xl mx-auto gap-5 grid  p-6 '>
          <div className='flex flex-col gap-5 justify-center items-center'>
            <h2 className='text-blue font-header text-center text-2xl font-extrabold md:text-5xl'>{t('home.partners')} </h2>
            <p className='font-base text-lg leading-7 text-gray max-lg:text-center'>{t('home.patext')}</p>
          </div>
          <Marquee
            speed={50}
            gradient={false}
            pauseOnHover
            autoFill
          >
            <div className="mx-8">
              <Image src={gmc} alt="GMC" className="h-28 w-auto object-contain" />
            </div>

            <div className="mx-8">
              <Image src={sonara} alt="SONARA" className="h-20 w-auto object-contain" />
            </div>

            <div className="mx-8">
              <Image src={camairco} alt="Camair-Co" className="h-20 w-auto object-contain" />
            </div>

            <div className="mx-8">
              <Image src={chococam} alt="Chococam" className="h-28 w-auto object-contain" />
            </div>

            <div className="mx-8">
              <Image src={utrac} alt="UTRAC" className="h-20 w-auto object-contain" />
            </div>
          </Marquee>


        </div>
      </section>
      <section data-aos="slide-up" className="overflow-hidden py-12 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col items-center gap-4">

      <span className="bg-[rgba(138,28,90,0.15)] rounded-full px-4 py-2 text-xs font-semibold text-gray">
        {t("home.temoignages")}
      </span>

      <h2 className="font-header font-extrabold text-blue text-center text-3xl sm:text-4xl lg:text-5xl">
        {t("home.confiance")}
      </h2>

      <p className="text-center text-gray max-w-2xl text-sm sm:text-base lg:text-lg">
        {t("home.confiance.text")}
      </p>

      <div className="w-full max-w-4xl mt-8">
         <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                speed={500}
                autoplay
                loop
                className="rounded-2xl"
              >
                {/* Slide 1 */}
                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center bg-blue20 p-10 gap-6 text-center rounded-xl shadow-sm">
                    <Quote className='text-violet' />
                    <p className=" text-lg max-md:text-sm text-blue">
                      {t('testimonials.0.message')}
                    </p>
                    <div className='flex gap-3'>
                      <Star className='fill-violet stroke-transparent'/>
                      <Star className='fill-violet stroke-transparent' />
                      <Star className='fill-violet stroke-transparent'/>
                      <Star className='fill-violet stroke-transparent' />
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <h4 className="font-semibold text-gray-900">{t('testimonials.0.name')}</h4>
                      <h5 className="text-sm text-gray-500">
                        {t('testimonials.0.company')}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center bg-blue20 p-10 gap-6 text-center rounded-xl shadow-sm">
                    <Quote className='text-violet' />
                    <p className=" text-lg max-md:text-sm text-blue">
                      {t('testimonials.1.message')}
                    </p>
                      <div className='flex gap-3'>
                      <Star className='fill-violet stroke-transparent'/>
                      <Star className='fill-violet stroke-transparent' />
                      <Star className='fill-violet stroke-transparent'/>
                      <Star className='fill-violet stroke-transparent' />
                    </div>


                    <div className="flex flex-col items-center gap-1">
                      <h4 className="font-semibold text-gray-900">{t('testimonials.1.name')}</h4>
                      <h5 className="text-sm text-gray-500">
                        {t('testimonials.1.company')}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="flex flex-col items-center justify-center bg-blue20 p-10 gap-6 text-center rounded-xl shadow-sm">
                    <Quote className='text-violet' />
                    <p className=" text-lg max-md:text-sm text-blue">
                      {t('testimonials.2.message')}
                    </p>
                       <div className='flex gap-3'>
                      <Star className='fill-violet stroke-transparent'/>
                      <Star className='fill-violet stroke-transparent' />
                      <Star className='fill-violet stroke-transparent'/>
                      <Star className='fill-violet stroke-transparent' />
                    </div>


                    <div className="flex flex-col items-center gap-1">
                      <h4 className="font-semibold text-gray-900">{t('testimonials.2.name')}</h4>
                      <h5 className="text-sm text-gray-500">
                        {t('testimonials.2.company')}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className="flex flex-col items-center justify-center bg-blue20 p-10 gap-6 text-center rounded-xl shadow-sm">
                    <Quote className='text-violet'/>
                    <p className=" text-lg max-md:text-sm text-blue">
                     {t('testimonials.3.message')}
                    </p>
                         <div className='flex gap-3'>
                      <Star className='fill-violet stroke-transparent'/>
                      <Star className='fill-violet stroke-transparent' />
                      <Star className='fill-violet stroke-transparent'/>
                      <Star className='fill-violet stroke-transparent' />
                    </div>


                    <div className="flex flex-col items-center gap-1">
                      <h4 className="font-semibold text-gray-900">{t('testimonials.3.name')}</h4>
                      <h5 className="text-sm text-gray-500">
                        {t('testimonials.3.company')}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
                 <SwiperSlide>
                  <div className="flex flex-col items-center justify-center bg-blue20 p-10 gap-6 text-center rounded-xl shadow-sm">
                    <Quote className='text-violet'/>
                    <p className=" text-lg max-md:text-sm text-blue">
                     {t('testimonials.4.message')}
                    </p>
                          <div className='flex gap-3'>
                      <Star className='fill-violet stroke-transparent'/>
                      <Star className='fill-violet stroke-transparent' />
                      <Star className='fill-violet stroke-transparent'/>
                      <Star className='fill-violet stroke-transparent' />
                    </div>

                    <div className="flex flex-col items-center gap-1">
                      <h4 className="font-semibold text-gray-900">{t('testimonials.4.name')}</h4>
                      <h5 className="text-sm text-gray-500">
                        {t('testimonials.4.company')}
                      </h5>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
      </div>

    </div>
  </div>
</section>
   

      <section data-aos='slide-up' className='bg-blue'>
        <div className='grid gap-5 max-w-6xl mx-auto text-white place-items-center p-6'>
          <h2 className='text-center text-5xl max-md:text-lg font-header font-extrabold leading-12'>{t('home.equipe')}</h2>
          <p className='text-lg font-normal leading-7 font-base'>{t('home.eqtext')}</p>
          <div className='flex gap-3'>

            <Link href={`/${locale}/contact`}><button className='flex items-center justify-center gap-2 btn-devis bg-violet'>
              {t('netoyage.devisgratuit')}
              <ArrowRight />
            </button></Link>
            <Link href={'https://wa.me/+237699949450'}>
              <button className='flex items-center justify-center btn-devis bg-green'>
                <MessageCircle />
                {t('contact.whatsapp1')}

              </button></Link>
          </div>
        </div>
      </section>
    </main>
  )
}

