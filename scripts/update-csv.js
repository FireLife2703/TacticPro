const fs = require('fs');
const path = require('path');
const Papa = require('papaparse');

// Путь к файлу export.csv
const csvFilePath = path.join(__dirname, '../public/export.csv');

// Чтение export.csv
const csvData = fs.readFileSync(csvFilePath, 'utf8');
const parsedData = Papa.parse(csvData, { header: true }).data;

// Маппинг названий товаров на локальные пути к изображениям
const imageMap = {
    'Тактичний каремат сидушка M-Win односекційний Multicam': '/images/Тактичний каремат сидушка M-Win односекційний Multicam/karemat-sidushka.jpg',
    'Маскувальна сітка M-Win Темний мультикам. Маскування весна, літо, осінь': '/images/Маскувальна сітка M-Win Темний мультикам. Маскування весна, літо, осінь/maskuvalna-sitka.jpg'
    // Добавь сюда другие товары, если их больше
};

// Обновление путей к изображениям
const updatedData = parsedData.map(product => {
    const imagePath = imageMap[product.name] || '/images/placeholder.jpg';
    return {
        ...product,
        image: imagePath
    };
});

// Запись обновлённого CSV
const updatedCsv = Papa.unparse(updatedData);
fs.writeFileSync(csvFilePath, updatedCsv, 'utf8');

console.log('export.csv успешно обновлён!');