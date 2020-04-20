var lazyadsense = false; 
window.addEventListener("scroll", function(){ 
  if ((document.documentElement.scrollTop != 0 && lazyadsense === false) || (document.body.scrollTop != 0 && lazyadsense === false)) { 
    (function() { var ad = document.createElement('script'); ad.type = 'text/javascript'; ad.async = true; ad.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'; var sc = document.getElementsByTagName('script')[0]; sc.parentNode.insertBefore(ad, sc); })(); 
    document.body.className += " sticky"; lazyadsense = true;}}, true);

     (adsbygoogle = window.adsbygoogle || []).push({
          google_ad_client: "ca-pub-4901031377837473",
          enable_page_level_ads: true
     });
