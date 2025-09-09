import React from 'react';

interface VersionSwitcherProps {
  activeVersion: 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6' | 'V7';
  setVersion: (version: 'V1' | 'V2' | 'V3' | 'V4' | 'V5' | 'V6' | 'V7') => void;
}

const VersionSwitcher: React.FC<VersionSwitcherProps> = ({ activeVersion, setVersion }) => {
  const baseButtonClasses = "px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500";
  const activeButtonClasses = "bg-cyan-500 text-white shadow-lg";
  const inactiveButtonClasses = "bg-gray-700 text-gray-300 hover:bg-gray-600";

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100]">
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-2 flex items-center space-x-1 sm:space-x-2 shadow-2xl border border-gray-700 flex-wrap justify-center">
        <button
          onClick={() => setVersion('V7')}
          className={`${baseButtonClasses} ${activeVersion === 'V7' ? activeButtonClasses : inactiveButtonClasses}`}
          aria-pressed={activeVersion === 'V7'}
        >
          Інвесторам (V7)
        </button>
         <button
          onClick={() => setVersion('V6')}
          className={`${baseButtonClasses} ${activeVersion === 'V6' ? activeButtonClasses : inactiveButtonClasses}`}
          aria-pressed={activeVersion === 'V6'}
        >
          Luxury (V6)
        </button>
        <button
          onClick={() => setVersion('V5')}
          className={`${baseButtonClasses} ${activeVersion === 'V5' ? activeButtonClasses : inactiveButtonClasses}`}
          aria-pressed={activeVersion === 'V5'}
        >
          Скептикам (V5)
        </button>
        <button
          onClick={() => setVersion('V4')}
          className={`${baseButtonClasses} ${activeVersion === 'V4' ? activeButtonClasses : inactiveButtonClasses}`}
          aria-pressed={activeVersion === 'V4'}
        >
          B2B (V4)
        </button>
        <button
          onClick={() => setVersion('V3')}
          className={`${baseButtonClasses} ${activeVersion === 'V3' ? activeButtonClasses : inactiveButtonClasses}`}
          aria-pressed={activeVersion === 'V3'}
        >
          Прорабам (V3)
        </button>
        <button
          onClick={() => setVersion('V2')}
          className={`${baseButtonClasses} ${activeVersion === 'V2' ? activeButtonClasses : inactiveButtonClasses}`}
          aria-pressed={activeVersion === 'V2'}
        >
          Власникам (V2)
        </button>
        <button
          onClick={() => setVersion('V1')}
          className={`${baseButtonClasses} ${activeVersion === 'V1' ? activeButtonClasses : inactiveButtonClasses}`}
          aria-pressed={activeVersion === 'V1'}
        >
          Маркетологам (V1)
        </button>
      </div>
    </div>
  );
};

export default VersionSwitcher;