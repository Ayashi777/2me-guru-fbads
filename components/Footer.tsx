// FIX: This file was populated with a complete React component to resolve compilation errors caused by placeholder content.
import React from 'react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 border-t border-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8">
                    <div>
                        <a href="/" className="text-2xl font-bold text-white mb-4 inline-block">2Me<span className="text-cyan-400">Guru</span></a>
                        <p className="text-gray-400 max-w-xs">
                            Приводимо клієнтів у будівельний бізнес. Результат, а не процес.
                        </p>
                         <div className="flex space-x-6 mt-6">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <InstagramIcon className="h-6 w-6" />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <FacebookIcon className="h-6 w-6" />
                            </a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                <TikTokIcon className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Навігація</h4>
                        <ul className="space-y-2">
                            <li><a href="/#services" className="text-gray-400 hover:text-cyan-400 transition-colors">Послуги</a></li>
                            <li><a href="/#case-studies" className="text-gray-400 hover:text-cyan-400 transition-colors">Кейси</a></li>
                            <li><a href="/#pricing" className="text-gray-400 hover:text-cyan-400 transition-colors">Ціни</a></li>
                            <li><a href="/#faq" className="text-gray-400 hover:text-cyan-400 transition-colors">FAQ</a></li>
                        </ul>
                    </div>
                     <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Контакти</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="tel:+380971234567" className="hover:text-cyan-400 transition-colors">+380 (97) 123-45-67</a></li>
                            <li><a href="mailto:hello@2meguru.com.ua" className="hover:text-cyan-400 transition-colors">hello@2meguru.com.ua</a></li>
                            <li>Київ, Україна</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} 2MeGuru. Всі права захищено.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
