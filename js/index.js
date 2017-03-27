/**
 * Created by byeongkwan on 2017-03-21.
 */

$('#shoe_register').click(function () {
    var name = document.getElementById('shoe_input_name').value;
    var phone = document.getElementById('shoe_input_phone').value;
    var mail = document.getElementById('shoe_input_mail').value;

    var originSize_left_e = document.getElementById('shoe_size_left');
    var originSize_left = originSize_left_e.options[originSize_left_e.selectedIndex].value;

    var originSize_right_e = document.getElementById('shoe_size_right');
    var originSize_right = originSize_right_e.options[originSize_right_e.selectedIndex].value;

    var measure_size_left_e = document.getElementById('measure_size_left');
    var measure_size_left = measure_size_left_e.options[measure_size_left_e.selectedIndex].value;

    var measure_size_right_e = document.getElementById('measure_size_right');
    var measure_size_right = measure_size_right_e.options[measure_size_right_e.selectedIndex].value;

    var football_left_e = document.getElementById('football_left');
    var football_left = football_left_e.options[football_left_e.selectedIndex].value;

    var football_right_e = document.getElementById('football_right');
    var football_right = football_right_e.options[football_right_e.selectedIndex].value;

    //발볼 구분 라지, 미디엄, 스몰중에서 구분 후 저장
    var football_L;
    var football_R;

    football_L = compare_Football(football_left);
    football_R = compare_Football(football_right);

    //해당 이미지 url 저장
    var right_img = "http://whatshoe.co.kr/bk/shoe/images/R/"+measure_size_right+""+football_R+".png";
    var left_img = "http://whatshoe.co.kr/bk/shoe/images/L/"+measure_size_left+""+football_L+".png";

    //수신번호 메시지전송을 위해 input value 설정
    document.getElementById('susin1').value = phone;




    //valid 검사 및 사이즈
    if(!valid_name(name)){

    }else if(!valid_phone(phone)){

    }else if(!valid_EmailCheck(mail)){

    }else if(!valid_measureSize(originSize_left) || !valid_measureSize(originSize_right)) {

    }else if(!valid_measureSize(measure_size_left) || !valid_measureSize(measure_size_left)){
        alert("측정 사이즈가 선택되지 않았습니다");
    }else if(!valid_football(football_right) || !valid_football(football_left)) {
        alert("발볼 사이즈가 선택되지 않았습니다");
    }else{
        if(parseInt(measure_size_left)-parseInt(measure_size_right)>=5 || parseInt(measure_size_right)-parseInt(measure_size_left)>=5){
            alert("짝발");
            comment = "측정한 발의 사이즈는 왼발 "+measure_size_left+", 오른발 "+measure_size_right+" / 발볼의 사이즈는 왼발 "+football_left+", 오른발 "+football_right+" 입니다. 이 수치들로 봤을 때 고객님의 발은 짝발형에 가깝습니다. 짝발형은 왼발과 오른발의 사이즈가 5미리 이상 차이나는 경우로써 신발을 구매하고 신으실 때 양쪽 발에 다 맞지 않을 수 있으니 유의하시길 바랍니다.";
        } else if((football_left === "C" || football_left === "C-D" || football_left === "D") && (football_right === "C" || football_right === "C-D" || football_right === "D")){
            comment = "측정한 발의 사이즈는 왼발 "+measure_size_left+", 오른발 "+measure_size_right+" / 발볼의 사이즈는 왼발 "+football_left+", 오른발 "+football_right+" 입니다. 이 수치들로 봤을 때 고객님의 발은 표준형에 가깝습니다. 표준형은 발, 발볼의 사이즈가 표준으로써 신발을 구매하실 때 큰 걱정 안하셔도 될 것 같습니다.";
        } else if((football_left === "A" || football_left === "A-B" || football_left === "B" || football_left === "B-C") && (football_right === "A" || football_right === "A-B" || football_right === "B" || football_right === "B-C")){
            comment = "측정한 발의 사이즈는 왼발 "+measure_size_left+", 오른발 "+measure_size_right+" / 발볼의 사이즈는 왼발 "+football_left+", 오른발 "+football_right+" 입니다. 이 수치들로 봤을 때 고객님의 발은 칼날형에 가깝습니다. 칼날형은 평균대비 발볼의 사이즈가 작은 경우로써 신발을 신을 때 신발이 헐렁할 수도 있으니 유의하시길 바랍니다.";
        } else {
            comment = "측정한 발의 사이즈는 왼발 "+measure_size_left+", 오른발 "+measure_size_right+" / 발볼의 사이즈는 왼발 "+football_left+", 오른발 "+football_right+" 입니다. 이 수치들로 봤을 때 고객님의 발은 넓적형에 가깝습니다. 넓적형은 평균대비 발볼의 사이즈가 큰 경우로써 신발을 신을 때 끼는 경우가 생길 수도 있으니 유의하시길 바랍니다.";
        }

        //input 저장 문자 메시지에 갈 내용!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        document.getElementById('sms_msg').value = "test";

        //변수값 저장.
        localStorage.name = name;
        localStorage.susin1 = phone;
        localStorage.mail = mail;
        localStorage.football_L = football_left;
        localStorage.football_R = football_right;
        localStorage.football_L_addr = left_img;
        localStorage.football_R_addr = right_img;
        localStorage.measure_L = measure_size_left;
        localStorage.measure_R = measure_size_right;
        localStorage.comment = comment;

        //디비에 고객정보 저장
        $.post("http://whatshoe.co.kr/bk/shoe/php/shoeRegister.php",
            {
                name : name,
                phone : phone,
                mail : mail,
                originSize_left : originSize_left,
                originSize_right : originSize_right,
                measure_size_left : measure_size_left,
                measure_size_right : measure_size_right,
                football_left : football_left,
                football_right : football_right,
            },
            function (data, status) {
                if(data === "1"){
                    document.getElementById('shoe_R_img').src = "http://whatshoe.co.kr/bk/shoe/images/R/"+measure_size_right+""+football_right+".png";
                    document.getElementById('shoe_L_img').src = "http://whatshoe.co.kr/bk/shoe/images/L/"+measure_size_left+""+football_left+".png";
                    //이미지 띄우고 문자메시지, 이메일 전송

                    location.href="mailSend.html"

                   // document.getElementById('form').submit(); //문자 전송
                 } else {
                    alert(data + "실패!");
                }
            });
/*
        //메일 전송
        $.post("http://whatshoe.co.kr/bk/shoe/php/mailSend.php",
            {
                mail : mail,
                image_L : left_img,
                image_R : right_img,
                comment : comment,
                left_size : measure_size_left,
                right_size : measure_size_right,
                left_ball : football_left,
                right_ball : football_right,
            },
            function (data, status) {
                alert(status);
                alert(data);
            });
*/
        }
});