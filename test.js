var date = new Date();
                var year = date.getFullYear();
                var month = date.getMonth();
                month = (month+1 < 10 ? "0" : "") + (month+1);
                var day  = date.getDate();
                var finalday = year+"-"+month+"-"+day;
                console.log(finalday);