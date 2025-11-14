
import React, { useState, useCallback } from 'react';
import { TESTS_DATA } from './constants';
import { TestType, MatchingTestType, MultipleChoiceTestType } from './types';
import TestSelectionScreen from './components/TestSelectionScreen';
import MatchingTest from './components/MatchingTest';
import MultipleChoiceTest from './components/MultipleChoiceTest';

type Results = Record<number, { score: number; total: number } | null>;

const App: React.FC = () => {
  const [currentTestId, setCurrentTestId] = useState<number | null>(null);
  const [results, setResults] = useState<Results>({});

  const handleStartTest = useCallback((testId: number) => {
    setCurrentTestId(testId);
  }, []);

  const handleFinishTest = useCallback((testId: number, userAnswers: Record<number, string>) => {
    const test = TESTS_DATA.find(t => t.id === testId);
    if (!test) return;

    let score = 0;
    test.questions.forEach((question, index) => {
      if (userAnswers[question.id] === test.answers[index]) {
        score++;
      }
    });

    setResults(prevResults => ({
      ...prevResults,
      [testId]: { score, total: test.questions.length }
    }));
    setCurrentTestId(null);
  }, []);

  const handleBackToMenu = useCallback(() => {
    setCurrentTestId(null);
  }, []);


  const renderActiveTest = () => {
    if (currentTestId === null) return null;

    const test = TESTS_DATA.find(t => t.id === currentTestId);
    if (!test) return <p>Test not found.</p>;

    switch (test.type) {
      case TestType.MATCHING:
        return (
          <MatchingTest
            test={test as MatchingTestType}
            onSubmit={(answers) => handleFinishTest(test.id, answers)}
            onBack={handleBackToMenu}
          />
        );
      case TestType.MULTIPLE_CHOICE:
        return (
          <MultipleChoiceTest
            test={test as MultipleChoiceTestType}
            onSubmit={(answers) => handleFinishTest(test.id, answers)}
            onBack={handleBackToMenu}
          />
        );
      default:
        return <p>Unknown test type.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 font-sans p-4 sm:p-6 md:p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">PET Reading Practice</h1>
        <p className="text-slate-600 mt-2">Hone your skills for the B1 Preliminary English Test</p>
      </header>
      <main className="max-w-7xl mx-auto">
        {currentTestId === null ? (
          <TestSelectionScreen 
            tests={TESTS_DATA} 
            results={results} 
            onStartTest={handleStartTest} 
          />
        ) : (
          renderActiveTest()
        )}
      </main>
      <footer className="text-center mt-12 text-sm text-slate-500">
        <p>Created for educational purposes.</p>
      </footer>
    </div>
  );
};

export default App;
