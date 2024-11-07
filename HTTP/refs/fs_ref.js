const fs = require('fs');
const path = require('path');

// Создание новой папки 'test'
fs.mkdir(path.join(__dirname, 'test'), (err) => {
    if (err) throw err;
    console.log("Папка 'test' была создана");
});

// Создание файла 'text.txt' внутри папки 'test' с содержимым "STPV22"
fs.writeFile(
    path.join(__dirname, 'test', 'text.txt'),
    'STPV22',
    (err) => {
        if (err) throw err;
        console.log("Файл 'text.txt' был создан");

        // Добавление текущего года к файлу 'text.txt'
        fs.appendFile(
            path.join(__dirname, 'test', 'text.txt'),
            ` ${new Date().getFullYear()}`,  //Пробел и текущий год
            (err) => {
                if (err) throw err;
                console.log("К названию группы добавлен текущий год");

                // Переименование файла 'text.txt' в 'updated_text.txt'
                fs.rename(
                    path.join(__dirname, 'test', 'text.txt'),
                    path.join(__dirname, 'test', 'updated_text.txt'),
                    (err) => {
                        if (err) throw err;
                    }
                );
            }
        );
    }
);
