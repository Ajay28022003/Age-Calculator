document.querySelector("#calculate").addEventListener("click",function()
{
    let dob = document.querySelector("#dob").value,
        dobDate = new Date(dob),
        todayDate= new Date(),
        value = todayDate-dobDate,
        year = value / 1000 /60 /60 / 24 / 365.25;
        month = year - parseInt(year);
        month = (month * 365.25) / 30;
        day = month - parseInt(month);
        day = day * 30;
        document.querySelector("#years").innerHTML = parseInt(year);
        document.querySelector("#months").innerHTML = parseInt(month);
        document.querySelector("#DAYS").innerHTML = parseInt(day) + " Days";
})