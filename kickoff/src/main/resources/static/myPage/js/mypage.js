
/* 엔터키 submit 방지 */
document.addEventListener('keydown', function(event) {
	if (event.keyCode === 13) {
		event.preventDefault();
	};
}, true);

/* 예약 내역 */
/* cancel */
function cancel(url) {
	var check = confirm("예약 취소 하시겠습니까?");
	
	if(check == true) {
		location = url;
	} 
}

/* 유효성 검사 */
/*function validCheck() {
    const frm = document.forms[0];
    const mail = frm.mail;
    const email = frm.email;
    const year = frm.year;
    const month = frm.month;
    const day = frm.day;
    const userPhoneNumber = frm.userPhoneNumber;
    const userAddress = frm.userAddress;
    let isValid = true;

    if(mail.value == ""){
        alert("이메일을 입력해주세요.")
        mail.focus();
        isValid=false;
    } else if(email.value == "") {
        alert("이메일을 선택해주세요.")
        email.focus();
        isValid = false;
    } else if(year.value == "") {
        alert("연도를 입력해주세요.")
        year.focus();
        isValid = false;
    } else if(month.value == "") {
        alert("월을 입력해주세요.")
        month.focus();
        isValid = false;
    } else if(day.value == "") {
        alert("일을 입력해주세요.")
        day.focus();
        isValid = false;
    } else if(userPhoneNumber.value == "") {
        alert("휴대폰 번호를 입력해주세요.")
        userPhoneNumber.focus();
        isValid = false;
    } else if(userAddress.value == "") {
        alert("주소를 입력해주세요.")
        userAddress.focus();
        isValid = false;
    } 

    if(isValid) {
        frm.action='reservationInsert';
        frm.submit();
    }
}
*/
