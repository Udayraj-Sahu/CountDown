const endDate = "3 April 2024 12:00 AM"
document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

const clock = () => {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now)/1000;

    if(diff < 0) return;
    //convert days
    inputs[0].value = Math.floor(diff / 3600 /24);

    //converts hours
    inputs[1].value = Math.floor(diff/3600) % 24

    //convert into mintues
    inputs[2].value = Math.floor(diff/60)%60

    //converts into sec
    inputs[3].value = Math.floor(diff)%60
}
setInterval(
    ()=>{
        clock();
    },1000
)