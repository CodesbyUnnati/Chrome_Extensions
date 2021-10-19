const YThumbDL = {
    tag: "[Youtube Thumbnail DL]",
    btnText: "DOWNLOAD THUMBNAIL",
    interval: null,
    delay: 3000,
    loc: null,
    contentObserver: null,
    videoItemTags: [
        'ytd-rich-item-renderer',
        'ytd-grid-video-renderer',
        'ytd-compact-video-renderer',
        'ytd-compact-radio-renderer',
    ],
    log(...params) {
        console.log(this.tag, ...params);
    },
    init() {
        this.log("Init");

        //  Create Observer
        this.contentObserver = new MutationObserver((list, obs) => {
            this.process();
        });

        //  Create location change interval
        this.interval = setInterval(() => {
            if (location.pathname !== this.loc) {
                this.loc = location.pathname;
                this.onLocationChange();
            }
        }, this.delay)

        //  Register click
        document.querySelector('#page-manager').addEventListener('click', this.onBtnClick);
    },
    observe(elem, _opt = {}) {
        let opt = Object.assign({
            attributes: false,
            childList: true,
        }, _opt)
    
        this.contentObserver.observe(elem, opt);
    },
    process() {
        let videoSelector = this.videoItemTags.map(item => item + ":not([data-ythumbdl])").join(", ");

        for (let item of document.querySelectorAll(videoSelector)) {
            if (item.querySelector('ytd-display-ad-renderer'))
                continue;
            
            if (item.querySelector('#details')) {
                item.querySelector('#details')
                    .insertAdjacentHTML('afterend', `<div class="ythumbdl-open">${this.btnText}</div>`);
            } else {
                item.classList.add('ythumbdl-column');
                item.insertAdjacentHTML('beforeend', `<div class="ythumbdl-open">${this.btnText}</div>`);
            }

            item.dataset.ythumbdl = true;
        }

        if (this.loc == "/watch") {
            let wTitle = document.querySelector('#container.ytd-video-primary-info-renderer h1.title:not([data-ythumbdl])');
            if (wTitle) {
                wTitle.insertAdjacentHTML('afterend', `<div class="ythumbdl-open current-watch" data-videoid="current">${this.btnText}</div>`);
                wTitle.dataset.yttdl = true;
            }
        }
    },
    onLocationChange(){
        this.contentObserver.disconnect();
        
        if (this.loc == "/") {
            //  Homepage, Browser
            this.observe(document.querySelector('#contents.ytd-rich-grid-renderer'));
        } else if (this.loc == "/watch") {
            //  Watch video
            this.observe(document.querySelector('ytd-compact-video-renderer').parentNode);
        } else if (this.loc.match(/\/videos$/)) {
            //  Videos tab
            this.observe(document.querySelector("#items.ytd-grid-renderer"));
        } else {
            this.log("Unsupported path", this.loc);
        }

        this.process();
    },
    onBtnClick(e) {
        if (!e.target.classList.contains('ythumbdl-open')) return;

        let videoHref, sp;
        let videoid = e.target.dataset.videoId;

        if (videoid == 'current') {
            sp = new URLSearchParams(location.search);
            videoid = sp.get('v');
        }

        if (! videoid) {
            videoHref = e.target.parentNode.querySelector('#thumbnail')?.href;            
            sp = new URLSearchParams(`?${videoHref.split("?")[1]}`)
            videoid = sp.get('v');
        }

        window.open(`https://i.ytimg.com/vi/${videoid}/maxresdefault.jpg`);
    },
    cleanup() {
        clearInterval(this.interval);
        document.querySelector('#page-manager').removeEventListener('click', this.onBtnClick);
    },
};

YThumbDL.init();