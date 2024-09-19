import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  title = 'topfotos';
  go() {}
  faqItems = [
    {
      question: "Quando vou receber minhas fotos sem marca d'água?",
      answer:
        "Comprou, baixou! Todas as suas fotos, em alta qualidade e sem marca D'água, ficam disponíveis instantaneamente após a compra. Além de baixar na hora, você também receberá um email com todas as instruções necessárias.",
      isOpen: false,
    },
    {
      question: 'Quantas vezes posso baixar as minhas fotos?',
      answer:
        'Você pode baixar suas fotos quantas vezes quiser. Elas estarão disponíveis no seu email e em sua conta.',
      isOpen: false,
    },
    {
      question: 'Eu terei os direitos de imagem das fotos que comprar?',
      answer:
        'Ao comprar suas fotos, você terá direito de uso pessoal, mas os direitos autorais permanecerão com o fotógrafo.',
      isOpen: false,
    },
    {
      question: 'Quais são as formas de pagamento aceitas?',
      answer:
        'Aceitamos pagamento via Pix, Cartão de Crédito e outras formas populares de pagamento digital.',
      isOpen: false,
    },
    {
      question: 'Qual o formato de arquivo das fotos?',
      answer:
        'As fotos são disponibilizadas no formato JPEG em alta qualidade.',
      isOpen: false,
    },
  ];

  categories = [
    {
      imgSrc:
        'https://images01.brasildefato.com.br/caaa16e2c9f0c0f61d42e9009b630508.jpeg',
      title: 'Volei',
      link: '#',
    },
    {
      imgSrc:
        'https://www.smartfit.com.br/news/wp-content/uploads/2024/07/basquete-destaque.jpg',
      title: 'Basquete',
      link: '#',
    },
    {
      imgSrc:
        'https://www.corridaperfeita.com/wp-content/uploads/2023/03/blogpost-2.jpg',
      title: 'Corrida',
      link: '#',
    },
    {
      imgSrc:
        'https://s2-pipelinevalor.glbimg.com/dSFP56bXPWA3doiLzNbcxIL6ZDs=/0x0:1920x1280/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b3309463db95468aa275bd532137e960/internal_photos/bs/2022/v/3/kn8nyYR9iEeHPcxjyEOg/football-488714-1920.jpg',
      title: 'Futebol',
      link: '#',
    },
    {
      imgSrc:
        'https://blog.colombo.com.br/wp-content/uploads/2023/03/NATACAO-CAPA.jpg',
      title: 'Natação',
      link: '#',
    },
  ];
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
  toggleFAQ(index: number) {
    this.faqItems[index].isOpen = !this.faqItems[index].isOpen;
  }
}
