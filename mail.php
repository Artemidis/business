<?php

$recepient = "artemidis91@yandex.ru";
$sitename = "Бизнес-конгресс";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$email = trim($_POST["email"]);
$sum = trim($_POST["sum"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nE-mail: $email \nЗаявка: $sum рублей";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");