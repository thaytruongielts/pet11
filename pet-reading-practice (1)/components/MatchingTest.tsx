
import React, { useState } from 'react';
import { MatchingTestType } from '../types';

interface MatchingTestProps {
  test: MatchingTestType;
  onSubmit: (answers: Record<number, string>) => void;
  onBack: () => void;
}

const MatchingTest: React.FC<MatchingTestProps> = ({ test, onSubmit, onBack }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleSelectChange = (questionId: number, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const isSubmitDisabled = Object.keys(answers).length !== test.questions.length;

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-slate-800">{test.title}</h2>
      <p className="text-slate-600 mb-6">{test.instructions}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Questions Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">People</h3>
          <div className="space-y-6">
            {test.questions.map((q, index) => (
              <div key={q.id} className="flex items-start space-x-4">
                <span className="font-bold text-slate-700">{q.id}.</span>
                <p className="flex-1 text-slate-700">{q.text}</p>
                <select
                  value={answers[q.id] || ''}
                  onChange={(e) => handleSelectChange(q.id, e.target.value)}
                  className="border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                >
                  <option value="" disabled>Select</option>
                  {test.passages.map(p => (
                    <option key={p.id} value={p.id}>{p.id}</option>
                  ))}
                </select>
              </div>
            ))}
          </div>
        </div>

        {/* Passages Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Descriptions</h3>
          <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
            {test.passages.map(p => (
              <div key={p.id} className="bg-slate-50 p-4 rounded-md">
                <p className="font-bold text-slate-800">{p.id}. {p.title}</p>
                <p className="text-slate-600 mt-1">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t flex items-center justify-between">
         <button
          onClick={onBack}
          className="bg-slate-200 text-slate-800 font-bold py-2 px-6 rounded-md hover:bg-slate-300 transition-colors duration-300"
        >
          Back to Tests
        </button>
        <button
          onClick={() => onSubmit(answers)}
          disabled={isSubmitDisabled}
          className="bg-sky-600 text-white font-bold py-2 px-6 rounded-md hover:bg-sky-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors duration-300"
        >
          Submit Answers
        </button>
      </div>
    </div>
  );
};

export default MatchingTest;
