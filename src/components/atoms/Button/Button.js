// Button Component
export default class Button {
  constructor(text, onClick) {
    this.text = text;
    this.onClick = onClick;
  }
  
  render() {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = this.text;
    button.addEventListener('click', this.onClick);
    return button;
  }
}