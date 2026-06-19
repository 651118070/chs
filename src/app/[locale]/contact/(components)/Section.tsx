"use client"
import { useI18n } from '@/src/locales/client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FileText, MessageCircle, Send } from 'lucide-react';
import location from "@/public/assets/location.png";
import phone from "@/public/assets/phone.png";
import mail from "@/public/assets/message.png";
import clock from "@/public/assets/clock.png";

import Image from 'next/image';
export default function Contacts() {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true
        });
    }, []);
    const t = useI18n();

    return (
        <main className='bg-blue20'>
            <div data-aos='slide-up' className='grid max-w-6xl mx-auto gap-5 p-6'>
                <div className='flex items-center gap-5 flex-col'>
                    <h1 className='text-white'>{t('contact.header')}-<span className='text-violet font-header md:text-5xl text-2xl font-extrabold leading-12 '>{t('contact.us')}</span></h1>
                    <p className='md:text-[18px]'>{t('contact.text')}
                        répond sous 24h.</p>
                </div>
                <div className='grid md:grid-cols-2 gap-5'>
                    <form data-aos='slide-right' action="" className='bg-white rounded-xl shadow p-6 flex flex-col gap-5'>
                        <div className='flex gap-2 items-center'>
                            <FileText className='text-violet' />
                            <h2 className='text-blue'>{t('contact.devis')}</h2>
                        </div>
                        <div className='grid md:grid-cols-2 gap-2'>
                            <label htmlFor="" className='flex flex-col gap-2' >
                                {t('contact.name')}
                                <input type="text" className='input1' />
                            </label>
                            <label htmlFor="" className='flex flex-col gap-2' >
                                {t('contact.entreprise')}
                                <input type="text" className='input1' />
                            </label>
                        </div>
                        <div className="grid md:grid-cols-2 gap-2">
                            <label className="flex flex-col gap-2">
                                {t("contact.ville")}
                                <input type="text" className="input1" />
                            </label>

                            <label className="flex flex-col  gap-2">
                                {t("contact.service")}
                                <select defaultValue="" className="input1 p-2">
                                    <option value="" disabled>
                                        {t("contact.service")}
                                    </option>
                                    <option value="nettoyage-sanitaire">
                                        Nettoyage sanitaire
                                    </option>
                                    <option value="assainissement">
                                        Assainissement
                                    </option>
                                    <option value="qhse">
                                        Services QHSE
                                    </option>
                                </select>
                            </label>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="">{t('contact.message')}</label>
                            <textarea name="" className='resize-none w-full input1 h-24 p-5' placeholder={t('contact.describe')}></textarea>
                        </div>
                        <div className='flex gap-2 btn w-1/2 justify-center'>
                            <Send />
                            <button type='submit' className='text-nowrap text-[14px]'>{t('contact.send')}</button>
                        </div>

                    </form>
                    <form data-aos='slide-left' action="" className='bg-white rounded-xl shadow p-6 flex flex-col justify-between gap-5'>
                        <h2 className='text-blue'>{t('contact.cordone')}</h2>
                        <div className='flex gap-5'>
                            <div className="rounded-xl flex items-center justify-center w-12 h-12 bg-red-100">
                                <Image
                                    src={location}
                                    alt="location"
                                    className="w-6 h-6"
                                />
                            </div>
                            <div className='font-base flex flex-col justify-center text-[14px]'>
                                <h4 className='text-blue'>{t('contact.address')}</h4>
                                <span>Douala, Cameroun</span>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                                <Image src={phone} alt="phone" className="w-6 h-6" />
                            </div>
                            <div className='font-base flex flex-col justify-center text-[14px]'>
                                <h4 className="text-blue">{t("contact.phone")}</h4>
                                <span>+237 6 xxx xxx xxx</span>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                                <Image src={mail} alt="mail" className="w-6 h-6" />
                            </div>
                            <div className='font-base flex flex-col justify-center text-[14px]'>
                                <h4 className="text-blue">Email</h4>
                                <span>contact@votreentreprise.com</span>
                            </div>
                        </div>

                        <div className="flex gap-5">
                            <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                                <Image src={clock} alt="clock" className="w-6 h-6" />
                            </div>
                            <div className="className='font-base flex flex-col justify-center text-[14px]">
                                <h4 className="text-blue">{t("contact.hours")}</h4>
                                <span>{t("contact.date")}</span>
                                <span>{t("contact.date1")}</span>
                            </div>
                        </div>
                        <div className='flex gap-2 btn bg-green w-1/2 justify-center'>
                            <MessageCircle />
                            <button type='submit' className='text-nowrap text-[14px]'><a href="">{t('contact.whatsapp1')}</a></button>
                        </div>
                    </form>
                </div>

            </div>
        </main>
    )
}
