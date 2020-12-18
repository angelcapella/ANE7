import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-component-producto',
  templateUrl: './component-producto.component.html',
  styleUrls: ['./component-producto.component.css']
})
export class ComponentProductoComponent {
 @Input() codigo = '';
 @Input() nombre='';
 @Input() descripcion='';
 @Input() precio='';
 @Input() stock='';
 @Input() imagen='';
}

