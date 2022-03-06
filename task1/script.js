let logoBtn = document.querySelector("#logo"),
    mainBtn = document.querySelector(".main"),
    featurseBtn = document.querySelector(".features"),
    content = document.querySelector(".content");

logoBtn.addEventListener("click", () => {
  content.innerHTML = `
  <div class="container content-cont ">
  <h1>JavaScript</h1>
  <div class="intro">
    <p class="p-text">
      <a id="wiki-link" href="https://ru.wikipedia.org/wiki/JavaScript" target="_blank">JavaScript</a>, наверное, одна из самых известных web-технологий,
      в которой очень много неочевидных особенностей. 
      Но тем не менее любим ли мы ее или ругаем, факт остается фактом — это основной язык, на котором работает современный web.
    </p>
    <div class="div-img">
      <img id="js-code-img" src="https://hsto.org/getpro/habr/comment_images/a91/2ee/de9/a912eede987f4190873a95aa316573f9.jpg" alt="JavaScript код">
      <span">Пример JavaScript кода</span>
    </div>
    </div>
    <div class="intro-2">
      <p>
        Интерактивные элементы сайтов и мобильных приложений часто выполняются на языке JavaScript. 
        Он хорошо интегрируется с кодом HTML/CSS, поддерживается основными браузерами и включен в них по умолчанию.
        Поэтому никаких вопросов с запуском веб-ресурсов не возникает, они работают без участия пользователя.</p>
    </div>

    <hr noshade="true">

    <div class="intro-2">
      <h2>Области применения JavaScript</h2>
      <p>
        Овладеть основами JavaScript полезно всем, кто касается сферы разработки и продвижения сайтов. 
        В составе любого ресурса есть хотя бы 3-4 скрипта – от счетчика Яндекс.Метрики до формы захвата контактов, виджетов социальных сетей или регистрации аккаунта. 
        Популярность платформы имеет объяснение: язык безопасен, он не предоставляет низкоуровневый доступ к процессам сервера.
      </p>
      <img id="code-2" src="https://timeweb.com/media/bf2c5f1b0edfd150c0c3101e66a62872.png" alt="JS код">
      <div>
        <ol>
          <li>клиентская часть любых веб-приложений,</li>
          <li>интерактивные элементы интерфейсов на AJAX,</li>
          <li>механизм выдачи Push-уведомлений по модели Comet,</li>
          <li>программы, совместимые с Android, iOS, Windows Mobile,</li>
          <li>браузерные операционные системы типа WebOS,</li>
          <li>макросы для автоматизации рутинных офисных операций,</li>
          <li>приложения, запускаемые на серверах C, C++, Java, Go.</li>
        </ol>
      </div>
      <p>
        Отдельно стоит упомянуть пользовательские скрипты в браузерах. 
        Ими реализуются такие фишки, как автоматическое заполнение форм, форматирование контента на странице, скрытие и отражение содержимого в зависимости от региона. 
        Аналогичным образом пишутся расширения, плагины (виджеты) для популярных CMS вроде WordPress, MODX, 1С-Битрикс.
      </p>
    </div>
  </div>
  `
});

mainBtn.addEventListener("click", () => {
  content.innerHTML = `
  <div class="container main-cont">
        <div class="intro intro-main">
        <h1>Главное о JavaScript</h1>
        <img id="ecmaImg" src="https://i.ytimg.com/vi/BMHNQt_ppis/maxresdefault.jpg" alt="Стандарт ECMAScript">
          <p>
            JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации <a id="ecma-link" href="https://ru.wikipedia.org/wiki/ECMAScript" target="_blank">ECMAScript</a>.
            JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений. Наиболее широкое применение находит в браузерах как язык сценариев для придания интерактивности веб-страницам.
            Основные архитектурные черты: динамическая типизация, слабая типизация, автоматическое управление памятью, прототипное программирование, функции как объекты первого класса.
            На JavaScript оказали влияние многие языки, при разработке была цель сделать язык похожим на Java. 
            Языком JavaScript не владеет какая-либо компания или организация, что отличает его от ряда языков программирования, используемых в веб-разработке.  
            Название «JavaScript» является зарегистрированным товарным знаком корпорации Oracle в США.
          </p>
        </div>
  </div>
  `
});

featurseBtn.addEventListener("click", () => {
  content.innerHTML = `
  <div class="container features-cont">
        <div class="intro-feat">
          <h1>Особенности JavaScript</h1>
          <p>
            Инструмент JavaScript (сокращенно JS) относится к языкам программирования высокого уровня с возможностью встраивания в другие приложения. 
            Все типы функциональных модулей создаются в виде сценариев. По синтаксису он схож с языком Java, но общая у них только часть наименования. 
            Платформа регулярно обновляется, код становится все более рациональным.
          </p>
          <h2>Особенности языка:</h2>
          <ol>
            <li>JS изначально разрабатывался по принципу «пиши меньше – делай больше».</li>
            <li>Код поддерживает функциональные, императивные и событийно-ориентированные стили.</li>
            <li>Платформа распространяется бесплатно без лицензионных отчислений разработчикам.</li>
          </ol>

          <p>
            Синтаксис JavaScript подходит не под все задачи. 
            Это привело к появлению ряда искусственных языков, которые транспилируются (конвертируются) после запуска в браузере. 
            Разработчики пишут код на понятном им языке, а платформа «на лету» преобразует его в JS. 
            Примеры: CoffeeScript, Flow, Dart, TypeScript, Brython.
          </p>
        </div>
      </div>
  `
});