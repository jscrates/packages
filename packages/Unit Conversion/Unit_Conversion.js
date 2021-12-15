
function celsius_to_farenheit(celsius)
{
    var farenheit=(celsius*1.8)+32;  
    return farenheit; 
}
function celsius_to_kelvin(celsius)
{
    var kelvin=celsius+273.15;
    return kelvin;
}
function farenheit_to_celsius(farenheit)
{
    var celsius=(farenheit-32)/1.8;
    return celsius;
}
function farenheit_to_kelvin(farenheit)
{
    kelvin=farenheit_to_celsius(farenheit)+273.15;
    return kelvin;
}
function kelvin_to_celsius(kelvin)
{
    celsius=kelvin-273.15;
    return celsius;
}
function kelvin_to_farenheit(kelvin)
{
    farenheit=celsius_to_farenheit(kelvin_to_celsius(kelvin));
    return farenheit;
}
console.log(kelvin_to_farenheit(556));