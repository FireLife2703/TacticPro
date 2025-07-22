import React from 'react';

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Контакти</h1>
      <div className="space-y-4 text-gray-700 text-lg">
        <p>
          <strong>Телефон:</strong>{' '}
          <a href="tel:+380500873878" className="text-blue-600 hover:underline">
            +38 (050) 087-38-78
          </a>
        </p>
        <p>
          <strong>Email:</strong>{' '}
          <a href="mailto:tacticprouashop@gmail.com" className="text-blue-600 hover:underline">
            tacticprouashop@gmail.com
          </a>
        </p>
        <p>
          <strong>Telegram:</strong>{' '}
          <a
            href="https://t.me/TacticProUA_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            @TacticProUA_bot
          </a>
        </p>
        <p>
          <strong>Місцезнаходження:</strong> Україна, м. Київ (доставка по всій країні)
        </p>
        <div className="border-t pt-4">
          <p>
            Ви можете зв’язатися з нами з будь-яких питань щодо товарів, замовлення або
            співпраці. Ми завжди раді вам допомогти!
          </p>
        </div>
      </div>
    </div>
  );
}
