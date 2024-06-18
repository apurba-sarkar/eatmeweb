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

a.active{
border-bottom: .5rem solid ${theme.colors.primary}
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


/* -----------about us-------------- */

.aboutus img {
width: 100vw
}

.aboutus-main{
display:flex;
justify-content:space-evenly;
padding-top:10rem;
/* align-items:baseline */
}
.aboutus-main img{
    height:20rem;
    width:20rem;

    
}

.abtus-cnt{
    width:100rem
}
/* .aboutus{
    display:flex;
    align-items:center;

} */


/* ---------------login------------------ */


.login div{
    display:flex;
 /* flex-direction:column; */
 /* align-items:center
  */
    
}

.login-head{
    display:flex;
    justify-content:center;
    /* flex-direction:row */
}

.login-card{
    display:flex;
display:flex;
align-items:center;
gap:20rem;
/* flex-direction:column  */
}

  .login-photo{
    background-image:url("./login.jpg");
    height:60rem;
    width:50vw;
    overflow:hidden;
   background-size:cover;
   background-position: 50% 50%;
  }  

.login-data{
   display:flex;
   flex-direction:column;
   gap:2rem;
   margin-top:-10rem;
   

}

/* -------------profile-------------- */


.profile{
    display:flex;
    justify-content:center;
    gap:10rem;
}

/* --pd */
.pd{
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:.5rem;
}

.profilelogo{
height:10rem;
aspect-ratio:1;
background-color:red;
border-radius:50%;

};

/* --wallet */

figure{
    height:20rem;
    background-color:red;
    width:35rem;
    background-image:url("./card.jpg");
    display:flex;
    flex-direction:column;
    justify-content:center;
    font-family: 'Credit Card';
    align-items:center;
    border:.2rem solid ${theme.colors.primary};
    border-radius:1rem;
    font-weight:bolder;
    
}
.card-number{

    /* margin-right:2rem; */
    font-size:2rem;
    
}

.card-data{
    margin-top:8rem;

}

.other-details{
    font-size:1.5rem;
    margin-top:2rem
}

.trans{
    display:grid;
    /* align-items:center;
    justify-content:center; */
    /* flex-direction:column; */
}


.last-details{
    display:flex;
    align-items:center;
    justify-content:space-between

}

.balance{
    font-size:3rem
}

/* -->orders */
.orders{
    width:40rem;
}

.support{
    margin-top:5rem;
}

/* --------------menu----------- */

.menu-container{
    display:grid;
    grid-template-columns:1fr 2fr 2fr;
    /* background-color:red; */
    padding:0 10rem;
    
}

.menu-list{
    display:flex;
    flex-direction:column;

}


/* -->filters */
.filters{
    display:flex;
    flex-direction:column;
    gap:2rem;
}

/* -->FullDetails */

.fd{
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column
}
.fd img{
    height:30rem;
    width:40rem;
    border:solid ${theme.colors.primary} .5rem;
    /* aspect-ratio:1; */
    object-fit:fill;
}
.fd-data{
    display:flex;
    flex-direction:column;
}

.fd-data > h1  {
   display:flex;
   align-items:center;

}
`;

export default GlobalStyle;
