import styled from "styled-components";

interface ContainerProps {
    isVisible: boolean;
  }


export const Container = styled.div<ContainerProps>`
    display: ${props => props.isVisible ? 'block' : 'none'};
    background-color: blue;
    width: 34%;
    height: 100%;
    position: fixed; 
    top: 0; 
    right: 0; 
    z-index: 9999; 
    justify-content: space-between;
    border-radius: 8px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    @media screen and (max-width: 750px){
        width: 410px;
        height: 650px;
        margin-right:0px ;
        margin-right: 5px;
        
    }

    ul{
       
    }

    button.comprar{
                width: 100%;
                height: 139px;
                font-size: 50px;
                color: white;
                margin-top: 499px;
                background-color: #000000;
                @media screen and (max-width: 750px){
                    height: 72px;
                    margin-top: 408px;
                    font-size: 20px;
                }
            }
        


    div.totals{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 40px;
        margin-top: 499px;
        margin-bottom: -410px;
        

       
    }
    p.total1{
        color: aliceblue;
        font-size: 30px;
        font-weight: bold;
        @media screen and (max-width: 750px){
            margin-top:-60px;
        }
    }
    p.total{
        color: aliceblue;
        margin-left: 380px;
        font-size: 30px;
        font-weight: bold;
        @media screen and (max-width: 750px){
            margin-left: 40px;
            margin-top:-60px;
        }
        
    }
    
    div.titulo{
        width:50%;
        height: 20%;
        
        
        
    }
    div.btn{
        
        width: 30%;
        height: 20%;
        margin-left: 450px;
        margin-top: -230px;
    }
    div.itens{
        width: 500px;
        height: 500px;
        margin-left: 80px;
        align-items: center;
        justify-content: center;
        display: flex;
        @media screen and (max-width: 750px){
            margin-top: -70px;
            height: 420px;
        }
        ul {

            li{
                width: 600px;
                height: 150px;
                gap: 1px;
                display: flex;
                justify-content: space-between;
                margin-bottom: 35px;
                border: 2px solid black;
                border-radius: 50px;
                background-color: white;
                margin-right: 40px;
                @media screen and (max-width: 750px){
                    width: 320px;
                    margin-right: 350px;
                    margin-bottom: 10px;
                }
                
            }
            img{
                width: 150px;
                height: 150px;
                border-radius: 50px;
                @media screen and (max-width: 750px){
                    width: 130px;
                }

            }
            p.vazio{
                font-size: 15px;
                font-weight: bolder;
                margin-top: 50px;  
                @media screen and (max-width: 750px){
                    font-size:15px;
                    
                    font-weight: bolder;
                    margin-right: 310px;
                }

            }
            p.preço{
                font-size: 15px;
                font-weight: bolder;
                margin-top: 50px;  
                @media screen and (max-width: 750px){
                    font-size:15px;
                    margin-bottom: 2500px;
                    font-weight: bolder;
                    margin-left:-50px;
                }
                 
            }
            p.name{
                @media screen and (max-width: 750px){
                    display: none;
                }                    
                
            }
            button.btn1{
                border: 1px solid;
                background-color: aliceblue;
                color: #000000;
                margin-top: 50px;
                &:hover{
                    background-color: #bdbdbd;
                }
                @media screen and (max-width: 750px){
                    margin-top: 20px;
                    margin-bottom: -50px;
                    width: 80px;
                    font-size: 20px;
                }
             
                
            }
            div.quantity-controls{
                @media screen and (max-width: 750px){
                    display: flex;
                    flex-direction: column;
                    
                }

            }
            button.btn2{
                border: 1px solid;
                background-color: aliceblue;
                color: #000000;
                margin-top: 50px;
                &:hover{
                    background-color: #bdbdbd;
                }
                @media screen and (max-width: 750px){
                    width: 80px;
                    font-size: 20px;
                    margin-top: 10px;
                    margin-right: 40px;
                }
                
            }

            button{
                background-color: #000000;
                color: white;
                width: 40px;
                height: 30px;
                border-radius: 180px;
                &:hover{
                    background-color: red;
                }
                @media screen and (max-width: 750px){
                    margin-left: -10px;
                }
                
            }
            input{
                width: 30px;
                height: 25px;
                margin-top: 50px;
                @media screen and (max-width: 750px){
                    font-size: 20px;
                    margin-left: 10px;
                    margin-top: 60px;
                }
            }
        }
    }
    
`;

export const Title = styled.h1`
    font-size: 35px;
    margin-bottom: 20px;
    margin-top: 50px;
    margin-left: 50px;
    word-break: break-word;
    color:white;
    @media screen and (max-width: 750px){
        font-size: 20px;
    }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px; 
`;

export const CloseButton = styled.button`
    background-color: black;
    margin-left: 50px;
    margin-top: 80px;
    color: #ffffff;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    cursor: pointer;
  

    &:hover {
        background-color: #ff3e1a;
    }
    @media screen and (max-width: 750px){
        margin-left: -140px;
        margin-top:110px;
    }
    
`;

