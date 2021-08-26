import { Component, ElementRef, Renderer2, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(public ele: ElementRef, public render: Renderer2) {}
  ngOnInit() {
   
  }
  ngAfterViewInit() {
    // this.ele.nativeElement
    //   .querySelector('main')
    //   .addEventListener('click', this.onClick.bind(this));
      const inputs = this.ele.nativeElement.querySelectorAll(
        '.color-box > input'
      );
      const root = document.documentElement;
      const range = this.ele.nativeElement.querySelector('.booth-slider');
      //as slider range's value changes, do something
      range.addEventListener('input', this.handleSlider);
      //as the value in the input changes, do something.
      inputs.forEach(input => {
        input.addEventListener('input', this.handleInputChange);
      });
  }

  onClick(event) {
    console.log(event);
  }
  handleInputChange(e) {
    let value = e.target.value;
    let inputId = e.target.parentNode.id;
    let inputBg = `--bg-${inputId}`;
    const root = document.documentElement;
    root.style.setProperty(inputBg, value);
  }

  handleSlider(e) {
    let value = e.target.value;
    const root = document.documentElement;
    root.style.setProperty('--slider', value);
  }
}
