

function nextpay()
{

    let gif = document.createElement('img')
    gif.src = "https://icon-library.com/images/ajax-loading-icon/ajax-loading-icon-2.jpg"
    gif.setAttribute("class","nikhil_add_loading_logo")
    let body = document.querySelector("body")
    body.append(gif)
    body.style.background = "rgba(0, 0, 0, 0.5)"

    document.querySelector(".nikhil_gateway_container").style.background = "rgba(204, 207, 197, 0.5)"


    setTimeout(()=>
    {
        window.location.href = "paymentSuccessful.htm"
    },3000)
}

document.querySelector(".nikhil_arrow_head").addEventListener("click",()=>
{
    window.location.href = "summary.html"
})

let data = JSON.parse(localStorage.getItem("endTotal"))
document.querySelector(".nikhil_howmuch").innerText = ` Amount to pay ₹${data}  `