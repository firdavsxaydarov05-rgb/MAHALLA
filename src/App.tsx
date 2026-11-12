import React, { useState } from 'react';
import { ActiveTab } from './types/data.ts';
import { NewspaperHeader } from './components/NewspaperHeader.tsx';
import { LegalTicker } from './components/LegalTicker.tsx';
import { SectionHero } from './components/SectionHero.tsx';
import { SectionHokimKengash } from './components/SectionHokimKengash.tsx';
import { SectionMahalla } from './components/SectionMahalla.tsx';
import { SectionComparisonDebate } from './components/SectionComparisonDebate.tsx';
import { SectionNumbersCalculator } from './components/SectionNumbersCalculator.tsx';
import { SectionTrapsAndCases } from './components/SectionTrapsAndCases.tsx';
import { SectionMnemonicsGlossary } from './components/SectionMnemonicsGlossary.tsx';
import { NewspaperFooter } from './components/NewspaperFooter.tsx';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('frontpage');

  const handleTabChange = (tab: ActiveTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCalculator = () => {
    setActiveTab('numbers_calculator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#ECE7DC] text-[#1A1A1A] flex flex-col font-editorial-body selection:bg-[#C8102E] selection:text-white">
      {/* Contained Newspaper Canvas bounded strictly by black borders */}
      <div className="max-w-[1440px] w-full mx-auto border-x-2 border-[#1A1A1A] bg-[#F4F1EA] shadow-xl overflow-hidden flex flex-col flex-1">
        
        {/* Newspaper Broadsheet Masthead with zagalovka background */}
        <NewspaperHeader
          activeTab={activeTab}
          setActiveTab={handleTabChange}
          onOpenCalculator={handleOpenCalculator}
        />

        {/* Persistent Stock/Legal Ticker Ribbon */}
        <LegalTicker />

        {/* Main Content Area with page_4 geometric pattern strictly contained within borders */}
        <main className="flex-1 w-full px-4 sm:px-6 lg:px-8 py-8 newspaper-contained-pattern">
          {activeTab === 'frontpage' && (
            <SectionHero
              onNavigate={handleTabChange}
              onOpenCalculator={handleOpenCalculator}
            />
          )}

          {activeTab === 'hokim_kengash' && (
            <SectionHokimKengash />
          )}

          {activeTab === 'mahalla' && (
            <SectionMahalla />
          )}

          {activeTab === 'comparison_debate' && (
            <SectionComparisonDebate />
          )}

          {activeTab === 'numbers_calculator' && (
            <SectionNumbersCalculator />
          )}

          {activeTab === 'traps_cases' && (
            <SectionTrapsAndCases />
          )}

          {activeTab === 'mnemonics_glossary' && (
            <SectionMnemonicsGlossary />
          )}
        </main>

        {/* Newspaper Colophon & Footer */}
        <NewspaperFooter onNavigate={handleTabChange} />
      </div>
    </div>
  );
}
