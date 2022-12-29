import { useState } from "react";
import splashBackground from "../../assets/Images/splashbackground.jpg";
import { useLayoutContext } from "../../contexts/LayoutContext";
import { Help } from "@mui/icons-material";
import "./pageContainer.scss";



type Layout = {
	backgroundColor?: string;
	children: JSX.Element;
};

export const PageContainer = (props: Layout): JSX.Element => {

	const { menuItems, modals } = useLayoutContext();

	const [ navPosition, setNavPosition ] = useState<string>("");

	return (
		<div style={{
			height: "100vh",
			width: "100vw",
			overflow: "hidden",
			backgroundImage: `url(${splashBackground})`,
			backgroundColor: "blue"
		}}>
			<div className={`side-nav__container ${navPosition}`} onMouseOver={() => setNavPosition("open")} onMouseLeave={() => setNavPosition("")}>
				<div className="logo-container">
					<Help className="icon" />
					<p>StreamSync</p>
					<div className={`${navPosition}`}></div>
				</div>
				{menuItems.map((item, i) => {
					return (
						<div key={i} className="icon-container" onClick={item.onClick}>
							{item.icon}
							<p>{item.text}</p>
						</div>);
				})}
			</div>
			<div className={`red ${navPosition}`}>
				{modals.map(modal => modal)}
				{props.children}
			</div>
		</div >);
};