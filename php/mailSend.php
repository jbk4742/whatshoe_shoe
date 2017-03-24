<?php
  $ch = curl_init();

  /* 
   * subject  : 받을 mail 제목.
   * body  : 받을 mail 본문.
   * username : directsend 발급 ID
   * recipients : 발송 할 고객 이메일 , 로 구분함. ex) aaa@naver.com,bbb@nate.com (공백제거해서 입력해 주세요!!)
   * key : directsend 발급 api key
   * 
   * 각 번호가 유효하지않을 경우에는 발송이 되지 않습니다.
   */ 

  /* 여기서부터 수정해주시기 바랍니다. */

  $L_img_path = $_POST['image_L'];
  $R_img_path = $_POST['image_R'];
  $comment = $_POST['comment'];
  $left_size = $_POST['left_size'];
  $right_size = $_POST['right_size'];
  $left_ball = $_POST['left_ball'];
  $right_ball = $_POST['right_ball'];

  $subject = "[WhatShoe] 측정된 발의 모형입니다.";
  $body = "
  <div style='text-align: center; width: 100%; border: 1px solid #000000'>
      <div style='background-color:#000000; width: 100%; height: 16.5px;'>

      </div>
      <div>
          <img src='http://whatshoe.co.kr/bk/shoe/images/Your-Foot.png' >
      </div>
      <div>
          <img src= '".$L_img_path."' alt='1''  style='width : 80%'/>
      </div>
      <div>
          <img src= '".$R_img_path."' alt='1'  style='width : 80%' />
      </div>
      <div style='margin-bottom: 20px'>
          <img src='http://whatshoe.co.kr/bk/shoe/images/Foot-Info.png' >
      </div>
      <div style='margin-bottom: 20px'>
          <img src='http://whatshoe.co.kr/bk/shoe/images/football.png' >
      </div>

      <div style='margin-bottom: 20px;'>
      <div><p>발 길이<br>(mm)</p></div>
      <div>
          <table rules='all' style='margin:auto; width: 300px; height: 50px'>
              <thead>
              <tr>
                  <th width='50%'>LEFT</th>
                  <th width='50%'>RIGHT</th>
              </tr>
              </thead>
              <tbody>
              <td>".$left_size."</td>
              <td>".$right_size."</td>
              </tbody>
          </table>
      </div>
      </div>

      <div style='margin: auto'>
      <div><p>발볼넓이</p></div>
      <div>
          <table rules='all' style='margin:auto; width: 300px; height: 50px'>
              <thead>
              <tr>
                  <th width='50%'>LEFT</th>
                  <th width='50%'>RIGHT</th>
              </tr>
              </thead>
              <tbody>
              <td>".$left_ball."</td>
              <td>".$right_ball."</td>
              </tbody>
          </table>
      </div>
      </div>

      <div  style='clear: both; margin-bottom: 20px'>
            <img src='http://whatshoe.co.kr/bk/shoe/images/comment.png'>
      </div>
      <div style='clear: both; margin-right: 40px; margin-left: 40px' >
        <p> ".$comment."<p/>
      </div>
      <div>
          <img src='http://whatshoe.co.kr/bk/shoe/images/logo.png'>
      </div>
      <div style='background-color:#000000; width: 100%; height: 16.5px;'>
      </div>
  </div>
";





  $sender = "byeongkwan@hanmail.net";
  $username = "byeognkwan";
  $recipients = $_POST['mail'];
  $key = "hfql3BCIZaegzsE";

  /* 여기까지 수정해주시기 바랍니다. */

  /* Server의 인코딩이 utf-8일때 다음 구문을 사용하세요*/
  /* UTF-8 */
  $subject = base64_encode(iconv("utf-8", "euc-kr", $subject));
  $body = base64_encode(iconv("utf-8", "euc-kr", $body));

  /* Server의 인코딩이 euc-kr일때 사용하세요. */
  /* EUC-KR  */

  $postvars = "subject=" . urlencode($subject)
  	. "&body=" . urlencode($body)
	. "&sender=" . urlencode($sender)
	. "&username=" . urlencode($username)
	. "&recipients=" . urlencode($recipients)
	. "&key=" . urlencode($key);


  $url = "https://directsend.co.kr/index.php/api/v2/mail";

  curl_setopt($ch,CURLOPT_URL, $url);
  curl_setopt($ch,CURLOPT_POST, true);
  curl_setopt($ch,CURLOPT_POSTFIELDS, $postvars);
  curl_setopt($ch,CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch,CURLOPT_CONNECTTIMEOUT ,3);
  curl_setopt($ch,CURLOPT_TIMEOUT, 20);
  $response = curl_exec($ch);
 
  /* 
	* response의 실패
	*  {"status":101}
  */
		
  /* 
	* response 성공
	* {"status":0}
	* 성공 코드번호.
  */
		
	/* 
  		status code
        0   : 정상발송
        100 : POST validation 실패
        101 : sender 유효한 번호가 아님
        102 : recipient 유효한 번호가 아님
        103 : message 값 존재X
        104 : recipient count = 0
        105 : message length = 0
        106 : message validation 실패
        107 : 본문에 허용할 수 없는 URL이 포함되어 있습니다.
        205 : 잔액부족
        999 : Internal Error.
    */

  print $response;
  curl_close ($ch);	
?>
