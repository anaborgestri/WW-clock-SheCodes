function refreshTime() {
  let tokyoTime = document.querySelector("#onetime");
  tokyoTime.innerHTML = moment()
    .tz("Asia/Tokyo")
    .format("hh:mm:ss [<small>]A[</small>]");
  let tokyoDate = document.querySelector("#onedate");
  tokyoDate.innerHTML = moment().tz("Asia/Tokyo").format("D MMMM YYYY");

  let saopauloTime = document.querySelector("#twotime");
  saopauloTime.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("hh:mm:ss [<small>]A[</small>]");
  let saopauloDate = document.querySelector("#twodate");
  saopauloDate.innerHTML = moment()
    .tz("America/Sao_Paulo")
    .format("D MMMM YYYY");

  let barcelonaTime = document.querySelector("#threetime");
  barcelonaTime.innerHTML = moment()
    .tz("Europe / Madrid")
    .format("hh:mm:ss [<small>]A[</small>]");
  let barcelonaDate = document.querySelector("#threedate");
  barcelonaDate.innerHTML = moment()
    .tz("Europe / Madrid")
    .format("D MMMM YYYY");
}
refreshTime();
setInterval(refreshTime, 1000);
