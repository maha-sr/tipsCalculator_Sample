if(document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready () {

    document.getElementsByClassName('btn')[0].addEventListener('click', calcTips)

    //Hide the tip amount on load
    document.getElementById("totalTip").style.display = 'none';
    document.getElementById("each").style.display = 'none';
}
    
function calcTips() {

    var billAmount = document.getElementById('billAmt').value

    var qualityOfService = document.getElementById('serviceQuality').value

    var billSharedBy = document.getElementById('perHead').value
    
    // Validate all inputs

    if (isNaN(billAmount) || billAmount === "" || billAmount == 0){

        alert('Enter valid bill amount.')
        return
    }
    else if (qualityOfService == 0) {

        alert('Choose a valid service rating')
        return
    }
    else if (billSharedBy ==="" || billSharedBy <= 1) {

        billSharedBy = 1
        document.getElementById('each').style.display = 'none'
    } else {
        document.getElementById('each').style.display = 'block'
    }

    var total = (billAmount * qualityOfService) / billSharedBy
    total = Math.round(total*100)/100
    console.log(billAmount, qualityOfService, billSharedBy,total)

    // Display the tip

    document.getElementById('totalTip').style.display ='block'
    document.getElementById('tip').innerHTML = total
}
