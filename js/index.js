// input的非空验证
function isEmpty() {
    const iptval = document.getElementsByName('myipt');
    const redtxt = document.getElementsByClassName('redtxt');
    for (let i = 0; i < iptval.length; i++) {
        redtxt[i].classList.add('hid');
        if (iptval[i].value === '') {
            redtxt[i].classList.remove('hid');
        }
        else {
            console.log('已提交表单');
        }


    }

}