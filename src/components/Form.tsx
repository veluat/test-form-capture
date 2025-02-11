'use client';

import React, { useState } from 'react';

const Form: React.FC = () => {
  const [token, setToken] = useState<string>(localStorage.getItem('token') || '');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [tags, setTags] = useState<string>('');
  const [budgetFrom, setBudgetFrom] = useState<number>(1000);
  const [budgetTo, setBudgetTo] = useState<number>(5000);
  const [deadline, setDeadline] = useState<number>(1);
  const [reminds, setReminds] = useState<number>(3);
  const [allAutoResponses, setAllAutoResponses] = useState<boolean>(false);
  const [rules, setRules] = useState<string>(
    JSON.stringify({ budget_from: 5000, budget_to: 8000, deadline_days: 5, qty_freelancers: 1 })
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask?token=${token}&title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}&tags=${encodeURIComponent(tags)}&budget_from=${budgetFrom}&budget_to=${budgetTo}&deadline=${deadline}&reminds=${reminds}&all_auto_responses=${allAutoResponses}&rules=${rules}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 200) {
        alert('Задача успешно опубликована!');
      } else {
        alert('Ошибка при публикации задачи');
      }
    } catch (error) {
      alert('Произошла ошибка: ' + (error as Error).message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-[600px] p-6 bg-white shadow-lg rounded-lg border border-blue-200">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">Создать новую задачу</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Токен</label>
          <input
            type="text"
            value={token}
            onChange={(e) => {
              setToken(e.target.value);
              localStorage.setItem('token', e.target.value);
            }}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Заголовок</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Описание</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Теги (через запятую)</label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Бюджет от</label>
          <input
            type="number"
            value={budgetFrom}
            onChange={(e) => setBudgetFrom(Number(e.target.value))}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Бюджет до</label>
          <input
            type="number"
            value={budgetTo}
            onChange={(e) => setBudgetTo(Number(e.target.value))}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Срок выполнения (дни)</label>
          <input
            type="number"
            value={deadline}
            onChange={(e) => setDeadline(Number(e.target.value))}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Напоминания</label>
          <input
            type="number"
            value={reminds}
            onChange={(e) => setReminds(Number(e.target.value))}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">
            <input
              type="checkbox"
              checked={allAutoResponses}
              onChange={(e) => setAllAutoResponses(e.target.checked)}
              className="mr-2"
            />
            Все автоматические ответы
          </label>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Правила (JSON)</label>
          <textarea
            value={rules}
            onChange={(e) => setRules(e.target.value)}
            className="w-full px-4 py-2 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        >
          Отправить
        </button>
      </form>
    </div>
  );
};

export default Form;