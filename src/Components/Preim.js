import React from "react";
import pl1 from '../img/pl1.PNG'
import pl2 from '../img/pl2.PNG'
import pl3 from '../img/pl3.PNG'
import pl4 from '../img/pl4.PNG'
import pl5 from '../img/pl5.PNG'
import pl6 from '../img/pl6.PNG'
import pl7 from '../img/pl7.PNG'
import pl8 from '../img/pl8.PNG'
function Preim(){
    return <div><h2 class="preim_head_txt container"> Преимущества </h2>
    <section class="container preim_block">
        
        <div class="no_head"> 
                <img class="icon_preim" src={pl1} alt="preimimage"/>
                 <p class="preim_description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum </p> 
            
        </div>

        <div class="no_head no_h1">
            <img class="icon_preim" src={pl2} alt="preimimage"/>
                <p class="preim_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum  </p>
        </div>

        <div class="no_head no_h1"> 
            <img class="icon_preim" src={pl3} alt="preimimage"/>
                <p class="preim_description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum </p>
            
        </div>

        <div class="no_head no_h1">
            <img class="icon_preim" src={pl4} alt="preimimage"/>
            <p class="preim_description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum </p>
            
        </div>

        <div class="no_head">
            <img class="icon_preim" src={pl5} alt="preimimage"/>
            <p class="preim_description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum. </p>
            
        </div>

        <div class="no_head no_h1">
            <img class="icon_preim" src={pl6} alt="preimimage"/>
                    <p class="preim_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum </p>
             
        </div>

        <div class="no_head no_h1"> 
            <img class="icon_preim" src={pl7} alt="preimimage"/>
                <p class="preim_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum </p>
            
        </div>

        <div class="no_head no_h1"> 
            <img class="icon_preim" src={pl8} alt="preimimage"/>
                 <p class="preim_description"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis dolorum.</p>
            
        </div>
    </section>
    </div>
}

export default Preim;