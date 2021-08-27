import MenuIcon, {ContentLine} from './Menu.style';

function Menu(props) {
  return (
    <MenuIcon
      viewBox="0 0 130 60"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ContentLine id="svgMenu" {...{props}}>

        <g id="svgLineTop" className="line">
        <path d="M 20 25 l 85 0"/>
        </g>

        <g id="svgLineMid" className="line">
        <path d="M 20 25 l 85 0"/>
        </g>

        <g id="svgLineBottom" className="line">
        <path d="M 20 25 l 85 0"/>
        </g>
      </ContentLine>
    </MenuIcon>
  )
}

export default Menu;
