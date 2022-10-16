//<input type="text" name="duckSearch" id="myduckSearch"/>
var link;


function gotolink() 
{
    link = document.getElementById('myduckSearch').value;
    window.location.href = "https://duckduckgo.com/"+link+"?ia=web";
}
