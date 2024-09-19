import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  showCategoryFilter = false;
  showCityFilter = false;
  showDateFilter = false;

  cards = [
    {
      imgSrc:
        'https://www.chronomax.com.br/maxrace/assets/imagens/upload/6YDJfnzbe7.jpg',
      title: 'Maratona Internacional de São Paulo',
      description: 'Curitiba, PR',
      date: '05 out 2024',
      category: 'Corrida',
    },
    {
      imgSrc:
        'https://www.chronomax.com.br/maxrace/assets/imagens/upload/6bTsYKd4Rg.jpg',
      title: 'Maratona Internacional de São Paulo',
      description: 'Curitiba, PR',
      date: '05 out 2024',
      category: 'Corrida',
    },
    {
      imgSrc:
        'https://www.chronomax.com.br/maxrace/assets/imagens/upload/6YDJfnzbe7.jpg',
      title: 'Campeonato Brasileiro de Natação',
      description: 'Curitiba, PR',
      date: '12 nov 2024',
      category: 'Natação',
    },
    {
      imgSrc:
        'https://www.chronomax.com.br/maxrace/assets/imagens/upload/6bTsYKd4Rg.jpg',
      title: 'Torneio de Tênis do Rio Open',
      description: 'Curitiba, PR',
      date: '22 dez 2024',
      category: 'Tênis',
    },
  ];
  toggleCategoryFilter() {
    this.showCategoryFilter = !this.showCategoryFilter;
    this.showCityFilter = false;
    this.showDateFilter = false;
  }

  toggleCityFilter() {
    this.showCityFilter = !this.showCityFilter;
    this.showCategoryFilter = false;
    this.showDateFilter = false;
  }

  toggleDateFilter() {
    this.showDateFilter = !this.showDateFilter;
    this.showCategoryFilter = false;
    this.showCityFilter = false;
  }
}
