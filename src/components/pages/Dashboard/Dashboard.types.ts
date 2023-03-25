import { IPageRoutes } from "../../../routes";

export type IModule = {
  id: number;
  name: string;
  key: keyof IPageRoutes;
  Icon: JSX.Element
}
