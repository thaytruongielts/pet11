
import React, { useState } from 'react';
import { MultipleChoiceTestType } from '../types';

interface MultipleChoiceTestProps {
  test: MultipleChoiceTestType;
  onSubmit: (answers: Record<number, string>) => void;
  onBack: () => void;
}

const MultipleChoiceTest: React.FC<MultipleChoiceTestProps> = ({ test, onSubmit, onBack }) => {
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleOptionChange = (questionId: number, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
  };

  const isSubmitDisabled = Object.keys(answers).length !== test.questions.length;

  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-2 text-slate-800">{test.title}</h2>
      <p className="text-slate-600 mb-6">{test.instructions}</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Passage Column */}
        <div className="prose prose-slate max-w-none bg-slate-50 p-6 rounded-md border">
          <h3 className="text-lg font-semibold mb-2">Reading Passage</h3>
          {test.passage.split('\\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>

        {/* Questions Column */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b pb-2">Questions</h3>
          <div className="space-y-6">
            {test.questions.map(q => (
              <div key={q.id}>
                <p className="font-semibold text-slate-800 mb-2">{q.id}. {q.text}</p>
                <div className="space-y-2">
                  {q.options.map(option => (
                    <label key={option.id} className="flex items-center p-3 rounded-md hover:bg-sky-50 cursor-pointer transition-colors duration-200">
                      <input
                        type="radio"
                        name={`question-${q.id}`}
                        value={option.id}
                        checked={answers[q.id] === option.id}
                        onChange={() => handleOptionChange(q.id, option.id)}
                        className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-slate-300"
                      />
                      <span className="ml-3 text-slate-700">{option.id}. {option.text}</span>
                    </label>
                  ))}
                </div>
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

export default MultipleChoiceTest;
