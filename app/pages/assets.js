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
                html, body {
                    width: 100%;
                    height: 100%;
                }

                .highlight:hover {
                    background-color: rgba(255, 100, 150, 0.5);
                }

                .ph-border {
                    border: 1px dashed black;
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