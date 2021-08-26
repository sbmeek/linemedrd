import styled from '@emotion/styled';

export default styled.svg`
    height: 2em;
    width: 2em;
`;

export const ContentLine = styled.g`
    

    & .line{
      stroke-opacity: 100%;
      stroke-width: 10;
      stroke: ${({theme}) => theme.colors.green5};
      fill: none;

      path {
        stroke-linecap: round;
      }

    }

    & #svgLineTop::active{
        animation: dashAnimation 1s ease-in-out 0s forwards;
      }
    
    & #svgLineBottom::active{
        animation: dashAnimationUp 1s ease-in-out 0s forwards;
      }

    @keyframes dashAnimation{
      0%{
         transform: translateY(0px);
      }
      100%{
         transform: translateY(30px);
      }
    }

    @keyframes dashAnimationUp{
      0%{
         transform: translateY(0px);
      }
      100%{
         transform: translateY(-30px);
      }
    }


`
