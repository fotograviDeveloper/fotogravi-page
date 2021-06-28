//este componente contiene la informacion de todos los iconos de redes sociales 
//manda las props al componente iconsocial
import React from 'react'

//llama al compnente IconSocial
import IconSocial from './IconsSocial';
import "./socialiconList.css"

class IconSocialList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
    
      
            {
              id : "1",
                Icon: "fab fa-facebook-square",
                link: "https://www.facebook.com/Garces.fotogravi",
                alt: "link a facebook"
            },
        
            {
                id : "2",
               Icon: "fab fa-linkedin",
                link: "https://www.linkedin.com/in/fotogravi-studio/m",
                alt: "link a linkeding"
            },
            {
                id : "3",
                Icon: "fab fa-instagram",
                link: "https://www.instagram.com/raul__garces/?hl=es-la",
                alt: "link a intagram"
            },
            {
                id : "4",
                Icon: "fab fa-youtube-square",
                link: "https://www.youtube.com/channel/UCdVM_v-KGzbzHU6FJ3Ad7AA",
                alt: "link a youtube"
            }
          
      ],
    };
  }
  render() {
    return (
      <React.Fragment>
      <div className="iconBlock" key={this.state.data.id}>
        <IconSocial icons={this.state.data} /></div>
      
      </React.Fragment>
    );
  }
}

export default IconSocialList;
