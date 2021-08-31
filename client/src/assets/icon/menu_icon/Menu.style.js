import styled from '@emotion/styled';

export default styled.svg`
    height: 1.6rem;
    width: 1.6rem;
`;

const minus = `
& #svgLineTop{
  animation: dashAnimation 400ms ease-in-out forwards;
}

& #svgLineBottom{
  animation: dashAnimationUp 400ms ease-in-out forwards;
}

@keyframes dashAnimation{
  0%{
     transform: translateY(0px);
  }
  100%{
     transform: translateY(25px);
  }
}

@keyframes dashAnimationUp{
  0%{
     transform: translateY(0px);
  }
  100%{
     transform: translateY(-25px);
  }
}

`; 

const threeMinus = `

& #svgLineTop{
  animation: threeAnimation 500ms ease-in-out forwards;
}

& #svgLineBottom{
  animation: threeAnimationUp 500ms ease-in-out forwards;
}

@keyframes threeAnimation{
  0%{
     transform: translateY(25px);
  }
  100%{
     transform: translateY(0px);
  }
}

@keyframes threeAnimationUp{
  0%{
     transform: translateY(-25px);
  }
  100%{
     transform: translateY(0px);
  }
}

`; 

const changeMenu = ({props}) =>{
  return props.showMenu?threeMinus:minus;
}

const changeColor = (props) =>{
  const {props:{color:direction}, theme:{colors:{green5, white}}} = props
  return direction==="/"?green5:white;
}

export const ContentLine = styled.g`
    
    ${changeMenu}

    & .line{
      stroke-opacity: 100%;
      stroke-width: 12;
      stroke: ${changeColor};
      fill: none;

      path {
        stroke-linecap: round;
      }

    }

`
