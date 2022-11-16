import React from "react";

function FormsBlock(){
    return <section class="container">
    <div class="forms_block">
        <h3 class="forms_block_headtext">Хочу тур</h3>
        <div class="only_block">
            <form action="https://jsonplaceholder.typicode.com/posts" autocomplete method="post" class="forms">
                <div class="form_top_text">
                    <h5 class="inp_top">Город вылета</h5>
                    <input required type="text" name="start" placeholder="Город" class="first_input"/> 
                </div>
                <div class="form_top_text">
                    <h5 class="inp_top">Страна</h5>
                    <input required type="text" name="country" placeholder="Страна" class="second_input"/>
                </div>
                <div class="form_top_text">
                    <h5 class="inp_top">Дата прибытия</h5>
                    <input required type="date" name="date" placeholder="Дата прибытия" class="three_input"/>
                </div>
                <div class="form_top_text">
                    <h5 class="inp_top">Ночей</h5>
                    <input required type="number" name="night" placeholder="Кол-во ночей" class="four_input"/>
                </div>
                <div class="form_top_text">
                    <h5 class="inp_top">Туристы</h5>
                    <input required type="number" name="tourists" placeholder="Кол-во туристов" class="five_input"/>
                </div>
                <button type="submit" class="form_button"> Найти </button>
            </form>
        </div>
    </div>
</section>

}

export default FormsBlock;