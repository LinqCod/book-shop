class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
      <header>
        <div class="header">
            <div class="wrapper">
                <div id="head-wrapper">
                    <img src="../resources/logo.png" width="250px">
                    <nav id="middle-nav">
                        <a href="./main_page.html">Главная</a>
                        <a href="./books.html">Книги</a>                   
                        <a href="./top3.html">ТОП-3</a>
                         <a href="./reference.html">Справка</a>
                    </nav>
                </div>
            </div>
        </div>
        <div class="lower header">
            <div class="wrapper coldir">
                <form class="search-container" method="get" action="./search.html">
                    <input type="text" placeholder="Введите название книги..." name="query">
                    <button type="submit">Поиск</button>
                </form>
                <div class="account-nav">
                    <a class="text-with-icon" href="./login.html">
                        <span>Войти</span>
                    </a>
                    <a class="text-with-icon" href="./login.html">
                        <span>Регистрация</span>
                    </a>
                </div>
            </div>
        </div>
    </header>
      `;
    }
  }
class Footer extends HTMLElement {
    constructor() {
    super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <div class="upper footer">
            <div class="wrapper">
                <nav class="bottom-nav">
                        <p class="title">О компании</p>                   
                    <a href="./main_page.html">
                        <p>О нас</p>
                    </a>
                </nav>
                <nav class="bottom-nav">
                    <p class="title">Для вас</p>
                    <a href="./reference.html">
                        <p>Политика конфиденциальности</p>
                    </a>
                    <a href="./reference.html">
                        <p>Связаться с нами</p>
                    </a>                    
                </nav>
            </div>
        </div>
        <div class="lower footer">
            ©LinqcodProd // Balin Maxim 2021
        </div>
    </footer>
        `;
      }
  }

  class SideNavigation extends HTMLElement {
    constructor() {
    super();
    }
    
    connectedCallback() {
        this.innerHTML = `
        <div id="side-content">
                    <div id="genres">
                        <h2>Категории</h2>
                        <a href="genre.html?genre=fantasy">Фантастика</a>
                        <a href="genre.html?genre=detective">Детективы</a>
                        <a href="genre.html?genre=adventure">Приключенческие</a>
                        <a href="genre.html?genre=romance">Романы</a>
                        <a href="genre.html?genre=action">Экшн</a>                        
                        <a href="genre.html?genre=coding">Программирование</a>
                        <a href="genre.html?genre=languages">Языки</a>  
                        <a href="genre.html?genre=children">Для детей</a>                                            
                    </div>
                </div>
        `;
      }
  }


  
  customElements.define('header-component', Header);
  customElements.define('footer-component', Footer);
  customElements.define('side-nav-component', SideNavigation);