import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { FC, useContext, createContext, useState, Dispatch, SetStateAction } from "react";

export interface MenuItem {
	icon: JSX.Element,
	onClick: (e: any) => any;
	text: string;
}

export type Modal = {
	modal: JSX.Element,
	show: boolean,
	setShow: Dispatch<SetStateAction<boolean>>;
};

export interface LayoutContextParams {
	menuItems: MenuItem[];
	setMenuItems: Dispatch<SetStateAction<MenuItem[]>>;
	modals: Modal[];
	setModals: Dispatch<SetStateAction<Modal[]>>;
}

const LayoutContext = createContext({} as LayoutContextParams);

export const useLayoutContext = (): LayoutContextParams => {
	return useContext(LayoutContext);
};

export const LayoutContextProvider: FC = ({ children }) => {
	const [ menuItems, setMenuItems ] = useState<MenuItem[]>([]);
	const [ modals, setModals ] = useState<Moals[]>([]);

	return (
		<LayoutContext.Provider
			value={{ menuItems, setMenuItems, modals, setModals }}
		>
			<>{children}</>
		</LayoutContext.Provider>
	);
};
