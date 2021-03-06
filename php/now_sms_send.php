<?
header('Content-type: text/html; charset=utf-8'); //인코딩이 깨질 때.
error_reporting(E_ALL ^ E_NOTICE); //에러 보이게

include_once "./class/json.class.php";
include_once "./config.php";
include_once "./class/now_sms_send.php";
include_once "./curl/curl.php";
include_once "./class/result_code.php";

@extract($_POST);
/*
example form 파일에서 들어오는 POST값들
$sms_from = "발신자"
$susin1 = "수신자1", $susin2="수신자2", $susin3="수신자3"
대량 발송의 경우 위의 방식보다는 jQuery 를 이용하여 데이터를 문서에 나온 방식 중 하나로
전송하시기 바랍니다.
$sms_to = 다중전송을 위한 변수
$tpye_set="msg타입"			//A,B,C,D
$sms_msg = "msg 내용"
*/
$susin1 = $_POST['susin1'];
if($susin1){
	$sms_to= $susin1;
}

$data = new now_sms_send;
//////발신자 전화번호 셋팅/////
$caller = "0220518292";//$_POST['sms_from'];
////////[수신자 전화번호 셋팅]//
/*
type 1 => ex : 01011112222(한사람), ex : 01011112222,01022221111(단체는 콤마(,)로 구분해 주면됩니다.) 
type 2 => ex : array 형태로 넣어 주시면됩니다.
두가지 중에 편하신 방법으로 진행 하시기 바랍니다.
*/
$toll = $sms_to;
//LMS 사용시 제목을 넣으실수 있습니다.(안넣어도 무방함. 일부 스마트 폰에서 제목으로 표시됩니다.)
$subject = "[whatshoe] 측정하신 발 모형입니다.";
///////////[메세지 내용 셋팅]//////////
$msg = $sms_msg = $_POST['sms_msg'];

//////////////[단문인지 HTML 형식인지 셋팅]////////
//단문 0  ,  html 1
$html_type = 1;

$type_set = $_POST['type_set'];
if($type_set == ''){
	$type_set = "-1";
}

/////////////////////////
$rs = $data->set($caller, $toll, $msg, 1, $subject, $type = $type_set );

if($rs[0]==true){
	$result = $data->send();   //결과값 리턴. 
	echo $result;
	exit;
}else{   //결과값 리턴. 
	echo json_encode(array("result"=>false,"msg"=>$rs[1]));
	exit;
}
?>