# StarterVue
![image](vue+aspnet+ts-webpack+require.png?raw=true "image")

Решение Visual Studio 2017 - примеры для статей на habrahabr.ru:
- [Приложение Vue.js + Asp.NETCore + TypeScript без Webpack](https://habrahabr.ru/post/349880/);
- [RequireJS для приложений Vue.js + Asp.NETCore + TypeScript](https://habrahabr.ru/post/350056/).

На данный момент исходный код примеров немного отличается от приведенного в статье. Изменения вызваны обновлением версий используемых компонент (переход на Webpack 4.32.2, Asp.NETCore 2.2 и т.д.).
# Установка

Скачать или клонировать этот репозиторий, установить NPM-пакеты в проекте TryVueWebpack при помощи npm-install-try-vue-webpack.bat.

Рекомендуется выполнить обновление пакетов через командную строку до открытия файл решения (StarterVue.sln).

# Сборка и запуск проекта TryVueWebpack
Через командную строку в каталоге проекта выполняем следующее:
```dos
npm install
npm run build
dotnet run
```
В браузере открываем страницу по указанному адресу, например, http://localhost:5000.

Запуск приложения также можно производить в среде Visual Studio.

# Сборка и запуск проектов TryVue/TryVueRequire
Открыть решение StarterVue.sln, выполнить сборку проекта TryVue/TryVueRequire (например, через F6), в локальном меню файла bundleconfig.json выполнить команду "Bundle&Minfier\Update bundles".

Запуск приложения - традиционное для среды VS2017 (например, "Назначить автозагружаемым проектом", затем нажать F5).
