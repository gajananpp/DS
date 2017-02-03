/* Based on the template in Web Starter Kit :
https://github.com/google/web-starter-kit/blob/master/app/index.html
*/
import chromeFavicon from '../images/chrome-ninja192-precomposed.png';
import appleFavicon from '../images/apple-ninja152-precomposed.png';
import msFavicon from '../images/ms-ninja144-precomposed.png';
import favicon from '../images/favicon.png';
import { isProduction } from '../../config/app';

const metaAssets = () => {
  return [
    { charset: 'utf-8' },
    // Meta descriptions are commonly used on search engine result pages to
    // display preview snippets for a given page.
    { name: 'description', content: 'Your One-Stop solution for a full-stack universal Redux App' },
    // Setting IE=edge tells Internet Explorer to use the latest engine to
    //  render the page and execute Javascript
    // { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
    // Using the viewport tag allows you to control the width and scaling of
    // the browser's viewport:
    // - include width=device-width to match the screen's width in
    // device-independent pixels
    // - include initial-scale=1 to establish 1:1 relationship between css pixels
    // and device-independent pixels
    // - ensure your page is accessible by not disabling user scaling.
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // Disable tap highlight on IE
    // { name: 'msapplication-tap-highlight', content: 'no' },
    // Add to homescreen for Chrome on Android
    // { name: 'mobile-web-app-capable', content: 'yes' },
    // Add to homescreen for Safari on IOS
    // { name: 'apple-mobile-web-app-capable', content: 'yes' },
    // { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    // { name: 'apple-mobile-web-app-title', content: 'reactGo' },
    // Tile icon for Win8 (144x144 + tile color)
    // { name: 'msapplication-TileImage', content: msFavicon },
    // { name: 'msapplication-TileColor', content: '#3372DF' }
  ];
};

const linkAssets = () => {
  const links = [
    // Add to homescreen for Chrome on Android
    { rel: 'icon', href: favicon },
    { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
    { rel: 'icon', sizes: '192x192', href: chromeFavicon },
    // { rel: 'stylesheet', href: '/assets/styles/react-resizeable.css' },
    // Add to homescreen for Safari on IOS
    // { rel: 'apple-touch-icon', sizes: '152x152', href: appleFavicon },
    // { rel: 'stylesheet', href: 'htt  ps://fonts.googleapis.com/css?family=Roboto+Condensed', type: 'text/css' },
    // { rel: 'stylesheet', href: '/assets/styles/index.css' }
    // { rel: 'stylesheet', href: '/assets/styles/main.css' }
    // SEO: If your mobile URL is different from the desktop URL,
    // add a canonical link to the desktop page https://developers.google.com/webmasters/smartphone-sites/feature-phones
    // { 'rel': 'canonical', 'href': 'http://www.example.com/' }
  ];
  // ############################################# NOTE ########################################################//
  // return isProduction ? links : links.filter(l => l.rel !== 'stylesheet');
  return links;
};

// add style in <style> here
const styleAssets = () => {
    return [
        { type: "text/css", cssText: 
        `
            .react-grid-layout {
                position: relative;
                transition: height 0.2s ease;
            }
            .react-grid-item {
                transition: all 0.2s ease;
                transition-property: left, top;
            }
            .react-grid-item.cssTransforms {
                transition-property: transform;
            }
            .react-grid-item.resizing {
                z-index: 1;
            }

            .react-grid-item.react-draggable-dragging {
                transition: none;
                z-index: 3;
            }

            .react-grid-item.react-grid-placeholder {
                background: red;
                opacity: 0.2;
                transition-duration: 0.1s;
                z-index: 2;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                -o-user-select: none;
                 user-select: none;
            }

            .react-grid-item > .react-resizable-handle {
                position: absolute;
                width: 20px;
                height: 20px;
                bottom: 0;
                right: 0;
                background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
                background-position: bottom right;
                padding: 0 3px 3px 0;
                background-repeat: no-repeat;
                background-origin: content-box;
                box-sizing: border-box;
                cursor: se-resize;
            }





            .react-resizable {
                position: relative;
            }
            .react-resizable-handle {
                position: absolute;
                width: 20px;
                height: 20px;
                bottom: 0;
                right: 0;
                background: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/Pg08IS0tIEdlbmVyYXRvcjogQWRvYmUgRmlyZXdvcmtzIENTNiwgRXhwb3J0IFNWRyBFeHRlbnNpb24gYnkgQWFyb24gQmVhbGwgKGh0dHA6Ly9maXJld29ya3MuYWJlYWxsLmNvbSkgLiBWZXJzaW9uOiAwLjYuMSAgLS0+DTwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DTxzdmcgaWQ9IlVudGl0bGVkLVBhZ2UlMjAxIiB2aWV3Qm94PSIwIDAgNiA2IiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmMDAiIHZlcnNpb249IjEuMSINCXhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiDQl4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjZweCIgaGVpZ2h0PSI2cHgiDT4NCTxnIG9wYWNpdHk9IjAuMzAyIj4NCQk8cGF0aCBkPSJNIDYgNiBMIDAgNiBMIDAgNC4yIEwgNCA0LjIgTCA0LjIgNC4yIEwgNC4yIDAgTCA2IDAgTCA2IDYgTCA2IDYgWiIgZmlsbD0iIzAwMDAwMCIvPg0JPC9nPg08L3N2Zz4=');
                background-position: bottom right;
                padding: 0 3px 3px 0;
                background-repeat: no-repeat;
                background-origin: content-box;
                box-sizing: border-box;
                cursor: se-resize;
            }
        ` 
        }
    ];
};

const noscriptAssets = () => {
    return [
        // {innerHTML: `<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />`}
    ];
};

export const title = 'Digital Signage';
export const meta = metaAssets();
export const link = linkAssets();
export const style = styleAssets();
export const noscript = noscriptAssets();