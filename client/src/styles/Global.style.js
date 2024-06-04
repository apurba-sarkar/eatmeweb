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

/* -------------nav---------------- */
.mainNav{
/* background-color:red; */
display:flex;
align-items:center;
justify-content:space-evenly;
font-size:3rem;
padding-top: 2rem;
margin-bottom:2rem
/* padding-bottom:2rem */
}

a{
    /* background-color:red; */
    text-decoration:none;
    color:${theme.colors.primary};
    padding:.5rem 3rem
    
}


.links{
    display:flex;
    /* gap:4rem; */
    /* background-color:green */
}

a:hover{
    background-color:${theme.colors.primary};
    color:${theme.colors.other}
    
}


/* ⁡------home--------- */


.homeimg img{
    height:60rem;
    /* background-color:red */

}
@media (width< 1000px) {
    .homeimg img{
    height:40rem;
    /* background-color:red */
}
}



.home-hero{
    display:flex;
    align-items:center;
    justify-content:center;
    gap:10rem;
    padding-top:2rem
}

p{
font-size:2rem;
text-align:justify;
margin-top:-2rem;
padding-bottom:3rem
/* word-wrap: break-word; */
}

.herobar-one{
    width:70rem;
    /* background-color:red */
}




/* ---------contactus------------- */

.contactus{
    /* height:80vh;
    aspect-ratio:1; */
    /* margin-top:2rem; */
    background-image:url("./cbbnr.jpg");
    }

.contactus img{
    /* object-fit:cover */

}


.form{
    display:flex;
    /* align-items:center; */
    justify-content:center;
    padding-top:2rem;

    
}
form{
    display:flex;
    /* justify-content:center; */
    flex-direction:column;
    align-items:center;
    gap:1.5rem

}
`;

export default GlobalStyle;
