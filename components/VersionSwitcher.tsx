import React from 'react';

interface VersionSwitcherProps {
  activeVersion: 'V1' | 'V2' | 'V3';
  setVersion: (version: 'V1' | 'V2' | 'V3') => void;
}

const VersionSwitcher: React.FC<VersionSwitcherProps> = ({ activeVersion, setVersion }) => {
  const baseButtonClasses = "px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-cyan-500";
  const activeButtonClasses = "bg-cyan-500 text-white shadow-lg";
  const inactiveButtonClasses = "bg-gray-700 text-gray-300 hover:bg-gray-600";

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100]">
      <div className="bg-gray-800/80 backdrop-blur-sm rounded-xl p-2 flex items-center space-x-2 shadow-2xl border border-gray-700">
        <button
          onClick={() => setVersion('V3')}
          className={`${baseButtonClasses} ${activeVersion === 'V3' ? activeButtonClasses : inactiveButtonClasses}`}
          aria-pressed={activeVersion === 'V3'}
        >
          <span className="hidden sm:inline">Версія для</span> Прорабів (V3)
        </button>
        <button
          onClick={() => setVersion('V2')}
          className={`${baseButtonClasses} ${activeVersion === 'V2' ? activeButtonClasses : inactiveButtonClasses}`}
          aria-pressed={activeVersion === 'V2'}
        >
          <span className="hidden sm:inline">Для</span> Власників (V2)
        </button>
        <button
          onClick={() => setVersion('V1')}
          className={`${baseButtonClasses} ${activeVersion === 'V1' ? activeButtonClasses : inactiveButtonClasses}`}
          aria-pressed={activeVersion === 'V1'}
        >
          <span className="hidden sm:inline">Для</span> Маркетологів (V1)
        </button>
      </div>
    </div>
  );
};

export default VersionSwitcher;
