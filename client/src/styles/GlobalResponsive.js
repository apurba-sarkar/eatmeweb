import { createGlobalStyle } from "styled-components";

const GlobalResposive = createGlobalStyle`






@media (max-width:1440px) {
    /* ----------home----------- */
    .home{
        background-color:red;
        padding:0 4rem;
    }

    .home-hero{
        gap:5rem;
    }

}










@media (max-width:1024px) {

/* ----------home----------- */
.home{
    background-color:yellow;
    
    /* padding:0 4rem; */
}

.herobar-one h1{
    font-size:6rem;
} 

.home-hero{
    gap:4rem;
}



.homeimg img{
    height:35rem;
}



}






/* ----------home----------- */

@media (max-width:768px){
    .home{
        background-color:green;
        
        /* padding:0 4rem; */
    }

    .home-hero{
        flex-wrap:wrap-reverse;
    }

    .homeimg img{
height:40rem;
    }

    /* ---------nav----------- */
/* .links{
        flex-wrap:wrap;
    }
    .mainNav{
        flex-direction:column;
    } */

}

@media (max-width:425px){


}


`;
export default GlobalResposive;
