import MenuIcon, {ContentLine} from './Menu.style';

function Menu(props) {
  return (
    <MenuIcon
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* <path d="M464.883 64.267H47.117C21.137 64.267 0 85.403 0 111.416c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149zM464.883 208.867H47.117C21.137 208.867 0 230.003 0 256.016c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.013-21.137-47.149-47.117-47.149zM464.883 353.467H47.117C21.137 353.467 0 374.604 0 400.616c0 25.98 21.137 47.117 47.117 47.117h417.766c25.98 0 47.117-21.137 47.117-47.117 0-26.012-21.137-47.149-47.117-47.149z" /> */}
      <ContentLine id="svgMenu">
        <g id="svgLineTop" className="line">
        <path d="M 10 20 l 80 0"/>
        </g>
        <g id="svgLineMid" className="line">
        <path d="M 10 50 l 80 0"/>
        </g>
        <g id="svgLineBottom" className="line">
        <path d="M 10 80 l 80 0"/>
        </g>
      </ContentLine>
    </MenuIcon>
  )
}

export default Menu;
