	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<form action="now_sms_send.php" method="POST">
	<h1 style="text-align: center">SMS<b>
		<!--msg 내용-->
		<textarea cols="30" rows="10" style="overflow:hidden" id="sms_msg" name="sms_msg"></textarea>
		<br>
		<!--발신자 번호 셋팅-->
		<input type="hidden" id="sms_from" name="sms_from" value="16882254">
		<!--msg type 설정-->
		<input type="hidden" id="type_set" name="type_set" value="A">
		<!--수신자 번호 셋팅 여러명에게 보내려면 send 페이지에서 sms_to에 ,로 구분하여 합쳐준다. -->
		수신번호1 : <input type="text" id="susin1" name="susin1"><br>
		수신번호2 : <input type="text" id="susin2" name="susin2"><br>
		수신번호3 : <input type="text" id="susin3" name="susin3">
		<br>
		<input type="submit" value="전송">
	</form>
