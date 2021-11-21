let select = document.getElementById('directadmin-select-monthly');
select.onchange = function() {
   let x = document.getElementById("directadmin-select-monthly").value;

   let button = document.getElementById("directadmin-select-monthly-button");

   if(x=="https://client.nmhosting.eu/store/directadmin-reseller-hosting/pro-100") {
        button.setAttribute("href", "https://client.nmhosting.eu/store/directadmin-reseller-hosting/pro-100");
        document.getElementById("directadmin-select-monthly-price").textContent="22.45";
        document.getElementById("directadmin-select-quarterly-price").textContent="19.15";

    } else if(x=="https://client.nmhosting.eu/store/directadmin-reseller-hosting/pro-250") {
        button.setAttribute("href", "https://client.nmhosting.eu/store/directadmin-reseller-hosting/pro-250");
        document.getElementById("directadmin-select-monthly-price").textContent="37.45";
        document.getElementById("directadmin-select-quarterly-price").textContent="31.65";
    }
};