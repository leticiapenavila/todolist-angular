import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public tarefa = "";
  public items = ['Lista de tarefas']
  public tarefaEmBranco = false;

  ngOnInit() {
    const storedItems = localStorage.getItem('items');
    if (storedItems) {
      this.items = JSON.parse(storedItems);
    }
  }

  addTarefa(){
    if (this.tarefa.trim() === '') {
      this.tarefaEmBranco = true;
      return; 
    }
    
    this.items.push(this.tarefa);
    this.tarefa = ""; 
    this.tarefaEmBranco = false;
    localStorage.setItem('items', JSON.stringify(this.items)); 
  }

  removeTarefa(item:string){
    this.items.splice(this.items.indexOf(item), 1);
    localStorage.setItem('items', JSON.stringify(this.items));
  }
  editTarefa(index: number) {
    this.tarefa = this.items[index]; 
    this.items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.items));

  }
}
