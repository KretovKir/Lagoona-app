import React from "react";
import news from "../img/news-2186-1.jpg"
function Contacts(){
    return <section class="container">
    <h3 class="contacts_head_text"> Контакты </h3>
    <div class="contacts">
        <div class="text_box">
                <div class="top_section">
                    <h3 class="address_ht"> Адрес </h3>
                    <p class="address_content"> Москва, ул.Юности д.5 стр.4 офис 2.</p>
                </div>
                <div class="address_line"></div>
        
                    <div class="top_section">
                        <h3 class="address_ht"> Телефоны </h3>
                        <p class="address_content1">+7 (499) 535-64-34 <br/> +7 (499) 535-64-34 </p> 
                        
                    </div>
                    <div class="address_line"></div>
            
                    <div class="top_section">
                        <h3 class="address_ht"> E-mail </h3>
                        <p class="address_content2"> lg.oona@mail.ru <br/> hotels.ln@mail.ru </p> 
                        
                    </div>
                    <div class="address_line"></div>

                    <div class="top_section">
                        <h3 class="address_ht"> График </h3>
                        <p class="address_content3"> Понедельник-Пятница <br/> с 10.00 до 19.00 </p> 
                        
                    </div>
                    <div class="address_line"></div>

                    <div class="marsh_href">
                        <a class="marsh_href_content" href="">
                            Построить маршрут
                        </a>
                    </div>

        </div>
        <div class="image_box">
            <img class="contacts_image" src={news} alt = "news"/>
        </div>
    </div>
</section>

}

export default Contacts;