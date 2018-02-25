# StarterVue
ѕриложение Vue.js + Asp.NETCore + TypeScript без Webpack - решение дл€ Visual Studio 2017, пример дл€ habrahabr.

![sss](https://habrastorage.org/webt/fq/28/_d/fq28_d4hgcvuvhwoatayx1ojrio.png) 

ƒл€ иллюстрации способа избавлени€ от Webpack подготовлено решение Asp.Net Core с двум€ проектами: TryVueWebpack, TryVue.

# ”становка

—качать или клонировать этот репозиторий, установить NPM-пакеты в проекте TryVueWebpack при помощи npm-install-try-vue-webpack.bat.

–екомендуетс€ выполнить обновление пакетов через командную строку до открыти€ файл решени€ (StarterVue.sln).

# —борка и запуск приложени€ TryVueWebpack
„ерез командную строку в каталоге проекта выполн€ем следующее:
```dos
npm install
npm run build
dotnet run
```
¬ браузере открываем страницу по указанному адресу, например, http://localhost:52643.

«апуск приложени€ также можно производить в среде Visual Studio.

# —борка и запуск приложени€ TryVue
ќткрыть решение StarterVue.sln, выполнить сборку проекта TryVue (например, через F6), в локальном меню файла bundleconfig.json выполнить команду "Bundle&Minfier\Update bundles".

«апуск приложени€ TryVue - традиционное дл€ среды VS2017 (например, назначить автозагружаемым проектом, затем F5).
