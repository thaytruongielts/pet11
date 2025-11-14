
import React from 'react';
import { Test } from '../types';

interface TestSelectionScreenProps {
  tests: Test[];
  results: Record<number, { score: number; total: number } | null>;
  onStartTest: (testId: number) => void;
}

const TestSelectionScreen: React.FC<TestSelectionScreenProps> = ({ tests, results, onStartTest }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-6">Choose a Test</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map(test => {
          const result = results[test.id];
          return (
            <div key={test.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-sky-700 mb-2">{test.title}</h3>
                <p className="text-slate-600 text-sm mb-4">{test.instructions.substring(0, 100)}...</p>
              </div>
              <div className="mt-4">
                {result && (
                  <div className="mb-4 p-3 bg-sky-100 text-sky-800 rounded-md text-center">
                    <p className="font-semibold">Your last score:</p>
                    <p className="text-lg">{result.score} / {result.total} correct</p>
                  </div>
                )}
                <button
                  onClick={() => onStartTest(test.id)}
                  className="w-full bg-sky-600 text-white font-bold py-2 px-4 rounded-md hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-colors duration-300"
                >
                  {result ? 'Try Again' : 'Start Test'}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TestSelectionScreen;
