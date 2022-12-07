// Exemplo de requisição
var artist = "U2";
var song   = "One";
jQuery.getJSON(
    "https://api.vagalume.com.br/search.php"
        + "?art=" + artist
        + "&mus=" + song,
        + "&apikey={key}",
    function (data) {
        // Letra da música
        alert(data.mus[0].text);
    }
);