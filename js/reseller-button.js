let select = document.getElementById('cpanel-select-monthly');
select.onchange = function() {
   let x = document.getElementById("cpanel-select-monthly").value;

   let button = document.getElementById("cpanel-select-monthly-button");

   if(x=="https://client.nmhosting.eu/store/cpanel-reseller-hosting/pro-50") {
    button.setAttribute("href", "https://client.nmhosting.eu/store/cpanel-reseller-hosting/pro-50");
    document.getElementById("cpanel-select-monthly-price").textContent="22.45";
    document.getElementById("cpanel-select-quarterly-price").textContent="19.15";

   } else if(x=="https://client.nmhosting.eu/store/cpanel-reseller-hosting/pro-100") {
        button.setAttribute("href", "https://client.nmhosting.eu/store/cpanel-reseller-hosting/pro-100");
        document.getElementById("cpanel-select-monthly-price").textContent="37.45";
        document.getElementById("cpanel-select-quarterly-price").textContent="31.65";

    } else if(x=="https://client.nmhosting.eu/store/cpanel-reseller-hosting/pro-150") {
        button.setAttribute("href", "https://client.nmhosting.eu/store/cpanel-reseller-hosting/pro-150");
        document.getElementById("cpanel-select-monthly-price").textContent="52.45";
        document.getElementById("cpanel-select-quarterly-price").textContent="44.15";

    } else if(x=="https://client.nmhosting.eu/store/cpanel-reseller-hosting/pro-200") {
        button.setAttribute("href", "https://client.nmhosting.eu/store/cpanel-reseller-hosting/pro-200");
        document.getElementById("cpanel-select-monthly-price").textContent="67.45";
        document.getElementById("cpanel-select-quarterly-price").textContent="57.45";

    } else if(x=="https://client.nmhosting.eu/store/cpanel-reseller-hosting/pro-250") {
        button.setAttribute("href", "https://client.nmhosting.eu/store/cpanel-reseller-hosting/pro-250");
        document.getElementById("cpanel-select-monthly-price").textContent="74.95";
        document.getElementById("cpanel-select-quarterly-price").textContent="64.15";

}
};