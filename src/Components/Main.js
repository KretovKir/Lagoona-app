import React from "react";

function Main(){
    return <section class="container special">
        <h3 class="sp_head"> Спецпредложения </h3>
        <div class="spec_items_block">
           
            <div class="left">
                <a class="img_link" href="">
                    <div class="sp_item sp_item3"> 
                        <h3 class="item_head"> Мальдивские острова </h3>
                        <p class="description_text"> От 55 000 руб. Подробнее...</p>
                    </div>
                </a>
                <a class="img_link" href="">
                <div class="sp_item sp_item2"> 
                    <h3 class="item_head"> Горящий тур на остров Крит </h3>
                    <p class="description_text"> От 15 000 руб. Подробнее...</p>
                </div>
                </a>
            </div>

            <a class="img_link" href="">
            <div class="sp_item sp_item1"> 
                <h3 class="item_head1"> Номера категории Люкс </h3>
                <p class="description_text1"> От 5 000 руб. Подробнее...</p>
            </div>
            </a>
        </div>
    </section>
}

export default Main;