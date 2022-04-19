function removeHttp(url) {
  if (url.startsWith('https://')) {
    const https = 'https://';
    return url.slice(https.length);
  }
  if (url.startsWith('http://')) {
    const http = 'http://';
    return url.slice(http.length);
  }
  return url;
}
//FUNCTION SITE
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt');
    checkPageButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        url_active = tab.url;
        //https
        if(url_active.startsWith('https://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://outlinetts.com/article/https/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
        //http
        if(url_active.startsWith('http://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://outlinetts.com/article/http/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
      });
    }, false);
  }, false);


//FUNCTION SITE 2
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt2');
    checkPageButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        url_active = tab.url;
        //https
        if(url_active.startsWith('https://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://easyreader.org/article/https/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
        //http
        if(url_active.startsWith('http://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://easyreader.org/article/http/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
      });
    }, false);
  }, false);

//FUNCTION SITE 3
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt3');
    checkPageButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        url_active = tab.url;
        //https
        if(url_active.startsWith('https://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://ttspress.com/article/https/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
        //http
        if(url_active.startsWith('http://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://ttspress.com/article/http/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
      });
    }, false);
  }, false);

//FUNCTION SITE 4
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt4');
    checkPageButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        url_active = tab.url;
        //https
        if(url_active.startsWith('https://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://readertts.com/article/https/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
        //http
        if(url_active.startsWith('http://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://readertts.com/article/http/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
      });
    }, false);
  }, false);

//FUNCTION SITE 5
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt5');
    checkPageButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        url_active = tab.url;
        //https
        if(url_active.startsWith('https://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://newsvoice.info/article/https/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
        //http
        if(url_active.startsWith('http://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://newsvoice.info/article/http/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
      });
    }, false);
  }, false);

//FUNCTION SITE 6
document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt6');
    checkPageButton.addEventListener('click', function() {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var tab = tabs[0];
        url_active = tab.url;
        //https
        if(url_active.startsWith('https://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://newsreader.info/article/https/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
        //http
        if(url_active.startsWith('http://')){
          article_url = removeHttp(url_active);
          link_redirect = 'https://newsreader.info/article/http/'+article_url;
          chrome.tabs.create({ url: link_redirect });
        }
      });
    }, false);
  }, false);