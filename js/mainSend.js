/**
 * Created by byeongkwan on 2017-03-27.
 */

var mail = localStorage.mail;
var left_img = localStorage.football_L_addr;
var right_img = localStorage.football_R_addr;
var measure_size_left = localStorage.measure_L;
var measure_size_right = localStorage.measure_R;
var football_left = localStorage.football_L;
var football_right = localStorage.football_R;
var comment = localStorage.comment;

document.getElementById('L_img').src = left_img;
document.getElementById('R_img').src = right_img;
document.getElementById('left_size').textContent = measure_size_left;
document.getElementById('right_size').textContent = measure_size_right;
document.getElementById('football_L').textContent = football_left;
document.getElementById('football_R').textContent = football_right;
document.getElementById('comment').textContent = comment;

$('#send_btn').click(function () {

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
});