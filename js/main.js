document.addEventListener('DOMContentLoaded', function() {
    var elemDropDown = document.querySelectorAll('.dropdown-trigger');
    var instancesDropDown = M.Dropdown.init(elemDropDown, {
        coverTrigger: false,
        constrainWidth: false,
        hover: true
    });
});

const APP = {
    pages: [],
    show: new Event('show'),
    init() {
        this.pages = document.querySelectorAll('.page');
        this.pages.forEach(pg => {
            pg.addEventListener('show', this.pageShown);
        })

        document.querySelectorAll('.nav-links').forEach(link => {
            link.addEventListener('click', this.nav);
        })
        history.replaceState({}, 'Home', '#home');
        windows.addEventListener('popstate', this.popping)
    },
    nav(ev){
        ev.preventDefault();
        let currentPage = ev.target.dataset.target;
        document.querySelector('.active').classList.remove('active');
        document.getElementById(currentPage).classList.add('active');
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(this.show);
    },
    pageShown(ev) {
        console.log('page', ev.target.id, 'just shown')
    },
    popping() {
        console.log(location.hash, 'popstate event')
        let hash = location.hash.replace('#', '')
        document.querySelector('.active').classList.remove('active');
        document.getElementById(hash).classList.add('active');
        document.getElementById(hash).dispatchEvent(this.show);
    }
}

document.addEventListener('DOMContentLoaded', APP.init)