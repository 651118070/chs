"use client"
import { useI18n } from '@/src/locales/client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, Star } from 'lucide-react';
import amor from '@/public/assets/armor.png'
import star from '@/public/assets/star-h.png'
import price from '@/public/assets/price-h.png'
import fast from '@/public/assets/fast.png'
import Image from 'next/image';
import lobby from '@/public/assets/lobby.png'
import warning from '@/public/assets/warning-h.png'
import whatsapp from '@/public/assets/whatsapp.png'
import Link from 'next/link';
export default function Section() {
    useEffect(() => {
          AOS.init({
              duration: 800,
              once: true
          });
      }, []);
      const t = useI18n();
  return (
    <main>
      <section className='bg-blue20 min-h-screen'>
        <div className='max-w-6xl mx-auto gap-5 grid lg:grid-cols-2 p-6 max-lg:place-items-center max-lg:text-center'>
          <div className='flex flex-col gap-5'>
            <h1 className='md:text-6xl text-2xl text-blue font-extrabold tracking-wide font-header'>{t('home.header')} <span className='md:text-6xl text-2xl text-violet font-extrabold font-header'>{t('home.span')}</span> {t('home.all')}</h1>
            <p className='font-base text-lg leading-7 text-gray max-lg:text-center'>Les toilettes insalubres sont responsables de nombreuses maladies
              infectieuses. CHS S.A déploie des protocoles de nettoyage
              professionnel pour protéger la santé de vos collaborateurs, clients
              et visiteurs.</p>
              <div className='flex gap-3 max-md:flex-col items-center max-lg:justify-center'>
                <button className='btn-devis bg-blue flex items-center '>{t('navbar.devis')}
                  <ArrowRight/>
                </button>
                <button className='btn-devis bg-transparent border border-blue text-blue'>{t('home.service')}</button>
               
              </div>
              <div className='flex flex-wrap gap-5 justify-center'>
                <div>
                  <Image src={amor} alt='icon' className='w-5' />
                  <span className='font-header font-extrabold text-blue text-[20px] leading-7'>9+</span>
                  <p className='font-base font-normal text-[12px] leading-4'>{t('home.domaine')}</p>
                </div>
                  <div>
                  <Image src={price} alt='icon' className='w-5' />
                  <span className='font-header flex gap-0.5 items-center font-extrabold text-blue text-[20px] leading-7'>5<Star className='text-blue'/></span>
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
          <div className=' relative flex items-center'>
            <Image src={lobby} alt='lobby' className='rounded-2xl'/>
            <div className='flex flex-col gap-2 absolute top-1/2 left-5 bg-white/80 rounded-2xl p-3'>
              <div className='flex gap-2 '>
                <Image src={warning} alt='warning' className='w-5' />
                <span className='font-base text-[12px] font-semibold leading-4 text-blue'>{t('home.maladie')}</span>
              </div>
              <div className='flex flex-wrap gap-3 text-center'>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.gastro')}</span>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.hepatie')}</span>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.salmonellose')}</span>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.infection')}</span>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.Dermatites')}</span>
                <span className='text-red-500 border border-red-500 rounded-2xl px-3 py-1'>{t('home.dore')}</span>
              </div>
            </div>
            <Link href={''}><Image src={whatsapp} alt='whatsapp' className='fixed w-20  bottom-0 right-5'/></Link>
          </div>
        </div>
      </section>
    </main>
  )
}

