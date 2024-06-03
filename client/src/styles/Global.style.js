import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
body{
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
}

html{
    font-size:62.5%
}

.mainNav{
/* background-color:red; */
display:flex;
align-items:center;
justify-content:space-evenly;
font-size:3rem;
padding:2rem
}

.homeimg img{
    height:60rem

}
@media (width< 1000px) {
    .homeimg img{
    height:40rem;
    background-color:red
}
}

.links{
    display:flex;
    gap:6rem;
    /* background-color:green */
}

a{
    /* background-color:red; */
    text-decoration:none;
    color:${theme.colors.primary}
    
}

.home-hero{
    display:flex;
    align-items:center;
    justify-content:space-around;
    gap:4rem
}
`;

export default GlobalStyle;
