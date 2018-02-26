# StarterVue
"Приложение Vue.js + Asp.NETCore + TypeScript без Webpack" - это решение для Visual Studio 2017, пример для статьи ![habrahabr](https://habrahabr.ru/post/349880/).

![image](https://habrastorage.org/webt/fq/28/_d/fq28_d4hgcvuvhwoatayx1ojrio.png) 

Для иллюстрации способа избавления от Webpack подготовлено решение Asp.Net Core с двумя проектами: TryVueWebpack, TryVue.

# Установка

Скачать или клонировать этот репозиторий, установить NPM-пакеты в проекте TryVueWebpack при помощи npm-install-try-vue-webpack.bat.

Рекомендуется выполнить обновление пакетов через командную строку до открытия файл решения (StarterVue.sln).

# Сборка и запуск TryVueWebpack
Через командную строку в каталоге проекта выполняем следующее:
```dos
npm install
npm run build
dotnet run
```
В браузере открываем страницу по указанному адресу, например, http://localhost:52643.

Запуск приложения также можно производить в среде Visual Studio.

# Сборка и запуск TryVue
Открыть решение StarterVue.sln, выполнить сборку проекта TryVue (например, через F6), в локальном меню файла bundleconfig.json выполнить команду "Bundle&Minfier\Update bundles".

Запуск приложения TryVue - традиционное для среды VS2017 (например, "Назначить автозагружаемым проектом", затем нажать F5).
