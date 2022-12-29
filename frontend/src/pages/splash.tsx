import { Help, LibraryMusicRounded, MonetizationOn, Palette } from "@mui/icons-material";
import { useEffect, useState, useMemo } from "react";
import { MenuItem, useLayoutContext, Modal } from "../contexts/LayoutContext";
import { Modal } from "modals";

export const Splash = (): JSX.Element => {

    const { setMenuItems } = useLayoutContext();
    const [ showModal, setShowModal ] = useState<boolean>(false);

    const ourModal = useMemo(() => {
        return <Modal show={showModal} setShow={setShowModal} />;
    }, [ showModal ]);

    const menuItems: MenuItem[] = useMemo(() => {
        return [
            {
                icon: <LibraryMusicRounded />,
                text: "Library",
                onClick: () => console.log("Fuck yeah")
            },
        ];
    }, []);

    const modals: Modal[] = [
        {
            modal: ourModal,
            show: showModal,
            setShow: setShowModal
        }
    ];

    useEffect(() => {
        setMenuItems(menuItems);
    }, [ setMenuItems ]);

    return <div>Splash</div>;
};