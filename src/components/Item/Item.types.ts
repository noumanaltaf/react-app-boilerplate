export interface IItemProps {
  text: string;
  id: string;
  completed?: boolean;
  onDelete?(id: string): void;
  checkedOnChange?(id: string, checked: boolean): void;
}