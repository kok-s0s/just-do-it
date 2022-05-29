import styled from 'styled-components'

export const BG = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: -1;
  --c1: #bcf0f5;
  --c2: #37cde1;
  --s: 150px;
  --_g:
    var(--c1) 0%  5% ,var(--c2) 6%  15%,var(--c1) 16% 25%,var(--c2) 26% 35%,var(--c1) 36% 45%,
    var(--c2) 46% 55%,var(--c1) 56% 65%,var(--c2) 66% 75%,var(--c1) 76% 85%,var(--c2) 86% 95%,
    #0000 96%;
  background:
    radial-gradient(50% 50% at 100% 0, var(--_g)),
    radial-gradient(50% 50% at 0 100%, var(--_g)),
    radial-gradient(50% 50%, var(--_g)),
    radial-gradient(50% 50%, var(--_g)) calc(var(--s)/2) calc(var(--s)/2),
    var(--c1);
  background-size: var(--s) var(--s);
`
