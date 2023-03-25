export interface IAddTodo {
  onAdd?(text: string): void;
}

export const DefaultValues = {
  onAdd: (t: string) => { console.log(t) }
}