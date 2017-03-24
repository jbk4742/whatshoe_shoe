/**
 * Created by byeongkwan on 2017-03-17.
 */
function valid_name(name) {
    var name = name;
    if(!name){
        alert("이름을 입력하지 않았습니다.");
        return false;
    }
    return true;
}

function valid_phone(phone) {
    var phone = phone;
    if(!phone){
        alert("번호 입력이 안됬습니다");
        return false;
    } else if(!/^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/){
        alert("형식이 잘못됬습니다.");
        return false;
    } else {
        return true;
    }
}

function valid_measureSize(size) {
    var size = size;
    if(size === "")
        return false;
    return true;
}

var comment="";
function valid_football(size) {
    var size = size;

    if(size === "A"){

        return true;
    }else if(size === "A-B"){

        return true;
    }else if(size === "B"){
        comment = "평균";
        return true;
    }else if(size === "B-C"){

        return true;
    }else if(size === "C-D"){

        return true;
    }else if(size === "D"){

        return true;
    }else if(size === "D-E"){

        return true;
    }else if(size === "E"){

        return true;
    }else if(size === "E-E2"){

        return true;
    }else if(size ==="E2"){

        return true;
    }

    return false;

}

function valid_EmailCheck(valid_email){
    var email = valid_email;
    if(!email){
        alert("이메일이 입력 안됬습니다.");
        return false;
    } else if(!/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/.test(email)) {
        alert("형식이 맞지 않습니다");
        return false;
    } else {
        return true;
    }
}       //이메일 유효성 체크