import React from 'react';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './icons/SocialIcons';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
          <div className="lg:col-span-2">
            <a href="#" className="text-2xl font-bold text-white inline-block">
              2Me<span className="text-cyan-400">Guru</span>
            </a>
            <p className="mt-4 text-gray-400 text-sm max-w-md mx-auto md:mx-0">
              Ваш надійний партнер у залученні клієнтів для будівельного бізнесу.
            </p>
            <div className="mt-6 flex justify-center md:justify-start space-x-6">
                <InstagramIcon className="h-6 w-6 text-gray-400" />
                <FacebookIcon className="h-6 w-6 text-gray-400" />
                <TikTokIcon className="h-6 w-6 text-gray-400" />
            </div>
          </div>
          <div>
             <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Навігація</h3>
             <ul className="mt-4 space-y-2">
                <li><a href="#why-us" className="text-gray-400 hover:text-cyan-400">Чому ми</a></li>
                <li><a href="#case-studies" className="text-gray-400 hover:text-cyan-400">Кейси</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-cyan-400">Тарифи</a></li>
             </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Контакти</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="tel:+380971234567" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    +380 (97) 123-45-67
                </a>
              </li>
              <li>
                <a href="mailto:hello@2meguru.com.ua" className="text-gray-400 hover:text-cyan-400 transition-colors">
                    hello@2meguru.com.ua
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-6 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} 2Me Guru. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;