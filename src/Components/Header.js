import React from "react";
import logo from '../img/logo.PNG'
import enter from '../img/enter.png'
function Header(){
    return <section class="sections">
    <section class="container header_container">
        <div class="two">
            <div class="two1">
                <img class="logo" src={logo} width="261px" height="54px" alt="Lagoona Сеть отелей +7 (123) 4567890"/> 
                <p class="telephone">+7 (123) 4567890</p>
            </div>
            <div class="lich_cab">
                <a class="lk_link" href=".."> <img class="enter_img" src={enter} alt="Enter"/> Личный кабинет </a>
            </div>
        </div>
        <div class="nav_bg">
        <div class="container navigation">
            <ul class="nav_list">
                <li class="nav_item"> <a href = "" class="nav_link"> О нас  </a>  </li>
                <li class="nav_item"> <a href = "" class="nav_link"> Услуги </a>  </li>
                <li class="nav_item"> <a href = "" class="nav_link"> Преимущества </a></li>
                <li class="nav_item"> <a href = ""class="nav_link"> Размещение </a> </li>
                <li class="nav_item"> <a href = ""class="nav_link"> Блог </a> </li>
                <li class="nav_item"> <a href = ""class="nav_link"> Контакты </a> </li>
            </ul>
        
            <ul class="second_head_menu">
                <li class="sec_nav_item"> <a href="" class="nav_buttons"> Хочу тур </a> </li>
                <li class="sec_nav_item"> <a href="" class="nav_buttons"> Обратный звонок </a> </li>
            </ul>
        </div>
    </div>
    </section>
</section>
}

export default Header;