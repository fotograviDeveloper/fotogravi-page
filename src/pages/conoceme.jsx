import React from "react";
//esta pagina renderiza solo el componente Portafolio section
import PortadaImg from "../components/Portadas/Portada1/Portada1";
import AbautMe from "../components/AbautMe/AbautMe";

function Conoceme () {
  
    return (
      <React.Fragment>
        <PortadaImg 
        img="https://images.pexels.com/photos/5186733/pexels-photo-5186733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        titulo="Este soy yo"/>
<div className="parrafo">
   <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia asperiores sed iure consectetur consequatur, aperiam culpa nesciunt quod eius provident nostrum fuga in nisi aspernatur, placeat deleniti vero! Est, molestias?
    Quis aliquid vero ipsa asperiores possimus impedit magni, voluptates sed vel sapiente dolorem optio. Aliquam, odit? Iste facere reiciendis inventore, ullam beatae dolores, ipsam quos quod vero non praesentium quisquam!
    A eaque eum eos non molestiae neque beatae distinctio iusto quisquam quidem nam dignissimos reprehenderit iste consequuntur, sint facilis iure inventore enim explicabo blanditiis quas laudantium excepturi illo! Odit, dolore?
    Ea at rerum commodi molestias a animi illum architecto libero recusandae totam tenetur doloremque vero dignissimos, aperiam quo, deserunt maiores alias enim minus facere magnam nobis quibusdam! Ipsa, dolore tempora!
    </p> </div>
<AbautMe></AbautMe>
<AbautMe></AbautMe>
      </React.Fragment>
    );
  
}
export default Conoceme;
