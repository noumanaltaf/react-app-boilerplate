export interface IItemProps {
  text: string;
  id: number;
  completed?: boolean;
  checkedOnChange?(id: number, checked: boolean): void;
}