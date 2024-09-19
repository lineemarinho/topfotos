import { Component } from "@angular/core";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.css"],
})
export class GalleryComponent {
  card = false;
  imgs = [
    {
      img: "https://webvolei.com.br/wp-content/uploads/2021/08/395259_979267_rosamaria_russia_web_.jpg",
    },
    {
      img: "https://blog.ciaathletica.com.br/wp-content/uploads/2020/05/Escola-de-nata%C3%A7%C3%A3o-infantil-9-vantagens-para-o-desenvolvimento-2.png",
    },
    {
      img: "https://s2-ge.glbimg.com/cco2ysRlaOGERgSxKVMwknDfygI=/0x0:1497x2000/984x0/smart/filters:strip_icc()/s.glbimg.com/es/ge/f/original/2019/09/14/gallerypic_1_g4adz8W.jpg",
    },
    {
      img: "https://www.sesc-rs.com.br/wp-content/uploads/2024/03/corrida-do-choque.jpg",
    },
  ];
  gocard() {
    this.card = true;
  }
}
