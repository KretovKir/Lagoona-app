import React from "react";
import sots1 from '../img/pngwing.com(2).png'
import sots2 from '../img/pngwing.com(1).png'
import sots3 from '../img/pngwing.com(3).png'
import sots4 from '../img/pngwing.com(4).png'

function Footer(){
    return  <section class="container footer">
        <div class="footer_content">
            <p class="footer_content1">
                © 2012-2020 Управляющая компания 
                Объединенной сети «Лагуна Хотелс» 
            </p>

            <p class="footer_content2">
                Представленная на сайте информация носит справочный характер и не является публичной офертой
            </p>
            <div class="soglash">
                <a class="polz_sogl" href="">Пользовательское соглашение</a>
            </div>
        </div>

        <div class="second_block_footer">
            <p class="footer_content3">
                11710, улица Юности, дом 5, строение 4, офис 2.
            </p>

            <p class="footer_content4">
                +7 (499) 535-64-34 <br/>
                +7 (495) 005-05-44
            </p>

            <p class="footer_content5">
                lg.oona@mail.ru <br/>
                hotels.ln@mail.ru
            </p>
        </div>
        <div class="social_media">
            <img class="media_circ" src={sots1} alt = "media"/>
            <img class="media_circ" src={sots2} alt = "media"/>
            <img class="media_circ" src={sots3} alt = "media"/>
            <img class="media_circ" src={sots4} alt = "media"/>
        </div>
        
    </section>
}

export default Footer;