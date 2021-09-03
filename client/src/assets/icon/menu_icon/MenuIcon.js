import MenuStyles, {ContentLine} from './MenuIcon.style';

function MenuIcon(props) {
  return (
    <MenuStyles
      viewBox="0 0 130 60"
      xmlns="http://www.w3.org/2000/svg">
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
    </MenuStyles>
  )
}

export default MenuIcon;
