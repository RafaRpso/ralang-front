import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.css']
})
export class LoadingPageComponent implements OnInit {
  @Input() loadingTexts: string[] = [
    "Gerando áudio com nossa equipe musical",
    "Trabalhando muito para extrair os melhores textos!",
    "Quase lá... só mais um pouquinho!",
    "Preparando tudo para você!"
  ];
  currentText: string = this.loadingTexts[0];

  ngOnInit(): void {
    this.startLoading();
  }

  startLoading(): void {
    let textIndex = 0;

    // Muda o texto a cada 5 segundos
    setInterval(() => {
      textIndex = (textIndex + 1) % this.loadingTexts.length;
      this.currentText = this.loadingTexts[textIndex];
    }, 5000);
  }
}