var fdate = new Date();
var fyear = fdate.getFullYear();
var fmonth = fdate.getMonth()+1;
var fday  = fdate.getDate();
var ffinalday = fyear+"-"+fmonth+"-"+fday;
if(ffinalday=="2023-10-31"){
    console.log(ffinalday)
}