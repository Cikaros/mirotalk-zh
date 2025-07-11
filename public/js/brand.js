'use strict';

// Brand
const brandDataKey = 'brandDataP2P';
const brandData = window.sessionStorage.getItem(brandDataKey);

// Html pages
const landingTitle = document.getElementById('landingTitle');
const newCallTitle = document.getElementById('newCallTitle');
const newCallRoomTitle = document.getElementById('newCallRoomTitle');
const newCallRoomDescription = document.getElementById('newCallRoomDescription');
const loginTitle = document.getElementById('loginTitle');
const privacyPolicyTitle = document.getElementById('privacyPolicyTitle');
const stunTurnTitle = document.getElementById('stunTurnTitle');
const clientTitle = document.getElementById('clientTitle');
const notFoundTitle = document.getElementById('stunTurnTitle');

const shortcutIcon = document.getElementById('shortcutIcon');
const appleTouchIcon = document.getElementById('appleTouchIcon');

const appTitle = document.getElementById('appTitle');
const appDescription = document.getElementById('appDescription');
const appJoinDescription = document.getElementById('appJoinDescription');
const joinRoomBtn = document.getElementById('joinRoomButton');
const appJoinLastRoom = document.getElementById('appJoinLastRoom');

const features = document.getElementById('features');
const browsers = document.getElementById('browsers');
const teams = document.getElementById('teams');
const tryEasier = document.getElementById('tryEasier');
const poweredBy = document.getElementById('poweredBy');
const sponsors = document.getElementById('sponsors');
const advertisers = document.getElementById('advertisers');
const footer = document.getElementById('footer');
//...

// Brand customizations...

let brand = {
    app: {
        language: 'zh',
        name: 'MiroTalk',
        title: 'MiroTalk<br />免费基于浏览器的实时视频通话。<br />简单、安全、快速。',
        description:
            '只需点击一下即可开始下一次视频通话。无需下载、插件或登录即可直接进行对话、发送消息和共享屏幕。',
        joinDescription: '选择一个房间名称。<br />如何？',
        joinButtonLabel: '加入房间',
        joinLastLabel: '您的最近房间：',
    },
    site: {
        shortcutIcon: '../images/logo.svg',
        appleTouchIcon: '../images/logo.svg',
        landingTitle: 'MiroTalk 免费安全视频通话、聊天及屏幕共享。',
        newCallTitle: 'MiroTalk 免费安全视频通话、聊天及屏幕共享。',
        newCallRoomTitle: '选择名称。 <br />分享 URL。 <br />开始会议。',
        newCallRoomDescription:
            "每个房间都有一个临时 URL。只需选择房间名称并分享您的自定义 URL。如此简单。",
        loginTitle: 'MiroTalk - 需要受保护的登录权限。',
        clientTitle: 'MiroTalk WebRTC 视频通话、聊天室及屏幕共享。',
        privacyPolicyTitle: 'MiroTalk - 隐私政策。',
        stunTurnTitle: '测试 Stun/Turn 服务器。',
        notFoundTitle: 'MiroTalk - 404 页面未找到。',
    },
    html: {
        features: true,
        browsers: true,
        teams: true, // 请始终保留为真 ;)
        tryEasier: true,
        poweredBy: true,
        sponsors: true,
        advertisers: true,
        footer: true,
    },
    about: {
        imageUrl: '../images/mirotalk-logo.gif',
        title: 'WebRTC P2P v1.5.30',
        html: `
            <button 
                id="support-button" 
                data-umami-event="Support button" 
                onclick="window.open('https://codecanyon.net/user/miroslavpejic85')">
                <i class="fas fa-heart"></i>&nbsp;支持
            </button>
            <br /><br /><br />
            作者:<a 
                id="linkedin-button" 
                data-umami-event="Linkedin button" 
                href="https://www.linkedin.com/in/miroslav-pejic-976a07101/" target="_blank"> 
                Miroslav Pejic
            </a>
            <br /><br />
            电子邮件:<a 
                id="email-button" 
                data-umami-event="Email button" 
                href="mailto:miroslav.pejic.85@gmail.com?subject=MiroTalk P2P info"> 
                miroslav.pejic.85@gmail.com
            </a>
            <br /><br />
            <hr />
            <span>&copy; 2025 MiroTalk P2P，保留所有权利</span>
            <hr />
        `,
    },
    //...
};


/**
 * Get started
 */
async function initBrand() {
    await getBrand();

    handleBrand();
}

/**
 * Get brand from server
 */
async function getBrand() {
    if (brandData) {
        setBrand(JSON.parse(brandData));
    } else {
        try {
            const response = await fetch('/brand', { timeout: 5000 });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            const serverBrand = data.message;
            if (serverBrand) {
                setBrand(serverBrand);
                console.log('FETCH BRAND SETTINGS', {
                    serverBrand: serverBrand,
                    clientBrand: brand,
                });
                window.sessionStorage.setItem(brandDataKey, JSON.stringify(serverBrand));
            }
        } catch (error) {
            console.error('FETCH GET BRAND ERROR', error.message);
        }
    }
}

/**
 * Set brand
 * @param {object} data
 */
function setBrand(data) {
    brand = data;
    console.log('Set Brand done');
}

/**
 * Handle Brand
 */
function handleBrand() {
    if (landingTitle && brand.site?.landingTitle) landingTitle.textContent = brand.site.landingTitle;

    if (newCallTitle && brand.site?.newCallTitle) newCallTitle.textContent = brand.site.newCallTitle;
    if (newCallRoomTitle && brand.site?.newCallRoomTitle) newCallRoomTitle.innerHTML = brand.site.newCallRoomTitle;
    if (newCallRoomDescription && brand.site?.newCallRoomDescription)
        newCallRoomDescription.textContent = brand.site.newCallRoomDescription;

    if (loginTitle && brand.site?.loginTitle) loginTitle.textContent = brand.site.loginTitle;
    if (privacyPolicyTitle && brand.site?.privacyPolicyTitle)
        privacyPolicyTitle.textContent = brand.site.privacyPolicyTitle;
    if (stunTurnTitle && brand.site?.stunTurnTitle) stunTurnTitle.textContent = brand.site.stunTurnTitle;
    if (clientTitle && brand.site?.clientTitle) clientTitle.textContent = brand.site.clientTitle;
    if (notFoundTitle && brand.site?.notFoundTitle) notFoundTitle.textContent = brand.site.notFoundTitle;

    if (shortcutIcon && brand.site?.shortcutIcon) shortcutIcon.href = brand.site.shortcutIcon;
    if (appleTouchIcon && brand.site?.appleTouchIcon) appleTouchIcon.href = brand.site.appleTouchIcon;

    if (appTitle && brand.app?.title) appTitle.innerHTML = brand.app.title;
    if (appDescription && brand.app?.description) appDescription.textContent = brand.app.description;
    if (appJoinDescription && brand.app?.joinDescription) appJoinDescription.innerHTML = brand.app.joinDescription;
    if (joinRoomBtn && brand.app?.joinButtonLabel) joinRoomBtn.innerText = brand.app.joinButtonLabel;
    if (appJoinLastRoom && brand.app?.joinLastLabel) appJoinLastRoom.innerText = brand.app.joinLastLabel;

    !brand.html.features && elementDisplay(features, false);
    !brand.html.browsers && elementDisplay(browsers, false);
    !brand.html.teams && elementDisplay(teams, false);
    !brand.html.tryEasier && elementDisplay(tryEasier, false);
    !brand.html.poweredBy && elementDisplay(poweredBy, false);
    !brand.html.sponsors && elementDisplay(sponsors, false);
    !brand.html.advertisers && elementDisplay(advertisers, false);
    !brand.html.footer && elementDisplay(footer, false);
}

/**
 * Handle Element display
 * @param {object} element
 * @param {boolean} display
 * @param {string} mode
 */
function elementDisplay(element, display, mode = 'block') {
    if (!element) return;
    element.style.display = display ? mode : 'none';
}

initBrand();
