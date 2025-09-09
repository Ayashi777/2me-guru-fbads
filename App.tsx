// FIX: Corrected imports for page components to use './pages/...' syntax, resolving module not found errors.
import React, { useState, useEffect } from 'react';

// Import all page components
import HomePage from './pages/HomePage';
import MarketingProPage from './pages/MarketingProPage';
import BusinessGrowthPage from './pages/BusinessGrowthPage';
import QuickStartPage from './pages/QuickStartPage';
import B2BPartnersPage from './pages/B2BPartnersPage';
import OurPromisePage from './pages/OurPromisePage';
import PremiumClientsPage from './pages/PremiumClientsPage';
import InvestmentROIPage from './pages/InvestmentROIPage';

const validPaths = [
    '/',
    '/marketing-pro',
    '/business-growth',
    '/quick-start',
    '/b2b-partners',
    '/our-promise',
    '/premium-clients',
    '/investment-roi'
];

const App: React.FC = () => {
    const [path, setPath] = useState(window.location.pathname);

    useEffect(() => {
        const onLocationChange = () => {
            setPath(window.location.pathname);
        };

        const handleLinkClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');

            if (!anchor || anchor.target === '_blank') {
                return;
            }
            
            const url = new URL(anchor.href);

            if (url.origin !== window.location.origin) {
                return; // External link
            }

            // If it's a page navigation, prevent default and handle with router
            if (url.pathname !== window.location.pathname && validPaths.includes(url.pathname)) {
                e.preventDefault();
                window.history.pushState({}, '', anchor.href);
                onLocationChange();
            }
            // For same-page anchor links, do nothing and let the browser handle it.
        };

        window.addEventListener('popstate', onLocationChange);
        document.addEventListener('click', handleLinkClick);

        return () => {
            window.removeEventListener('popstate', onLocationChange);
            document.removeEventListener('click', handleLinkClick);
        };
    }, []);

    // Scroll handling on path change
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const element = document.querySelector(hash);
            if (element) {
                // Timeout ensures the element is rendered before scrolling
                setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [path]);

    // Redirect for invalid paths
    useEffect(() => {
        if (!validPaths.includes(path)) {
            window.history.replaceState({}, '', '/');
            setPath('/');
        }
    }, [path]);

    switch (path) {
        case '/':
            return <HomePage />;
        case '/marketing-pro':
            return <MarketingProPage />;
        case '/business-growth':
            return <BusinessGrowthPage />;
        case '/quick-start':
            return <QuickStartPage />;
        case '/b2b-partners':
            return <B2BPartnersPage />;
        case '/our-promise':
            return <OurPromisePage />;
        case '/premium-clients':
            return <PremiumClientsPage />;
        case '/investment-roi':
            return <InvestmentROIPage />;
        default:
            return <HomePage />;
    }
};

export default App;