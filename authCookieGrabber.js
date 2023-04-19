cookies = document.cookie;

cookiesArray = cookies.split(";");
//console.log(cookiesArray);

for (i = 0; i < cookiesArray.length; i++)
  {
    if(cookiesArray[i].includes("<target_cookie_name>"))
      {
        cookieNameAndValue = cookiesArray[i].split("=");
        //console.log(cookieNameAndValue);
        
        cookieValue = cookieNameAndValue[1];
        console.log(cookieValue);
      }
  }
