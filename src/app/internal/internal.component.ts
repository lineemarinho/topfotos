import { Component } from "@angular/core";

@Component({
  selector: "app-internal",
  templateUrl: "./internal.component.html",
  styleUrls: ["./internal.component.css"],
})
export class InternalComponent {
  showCart = false;
  selectedImage: string =
    "https://webvolei.com.br/wp-content/uploads/2021/08/395259_979267_rosamaria_russia_web_.jpg";

  images = [
    "https://webvolei.com.br/wp-content/uploads/2021/08/395259_979267_rosamaria_russia_web_.jpg",
    "https://conteudo.imguol.com.br/c/esporte/37/2022/10/14/rosamaria-jogadora-da-selecao-brasileira-em-jogo-contra-o-japao-pelo-mundial-de-volei-feminino-1665777238373_v2_1x1.jpg",
    "https://www.esportelandia.com.br/wp-content/uploads/2024/05/Artes-para-noticias-22-1-1200x800.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/b6/2022-09-17_Deutschland_gegen_Brasilien_%28Volleyball-Freundschaftsspiel_der_Frauen%29_by_Sandro_Halank%E2%80%93090.jpg",
  ];

  selectImage(image: string) {
    this.selectedImage = image;
  }
  toggleCart() {
    this.showCart = !this.showCart;
  }
}
