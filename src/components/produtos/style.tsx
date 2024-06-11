import styled from 'styled-components';



export const ProductList = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr); 
  gap: 20px; 
  width: 100%;
  max-width: 1200px; 
  margin: 100px auto;
  @media screen and (max-width: 750px) {
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(2, 4fr);
    margin-left: 140px;
    width: 50px;
    margin-left: 150px;

  }
  
`;


export const ProductCard = styled.div`
  background-color: white;
  padding: 20px; 
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 90%;
  @media screen and (max-width: 750px){
    width: 116px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px; 
`;

export const ProductDetails = styled.div`
  display: flex;
  justify-content:space-between;
  flex-grow: 1; 
`;

export const ProductName = styled.h2`
  font-size: 1.2rem;
  margin-bottom: 5px;
  @media screen and (max-width: 750px){
    font-size: 15px;
  }
`;

export const ProductPrice = styled.p`
  border-radius: 10px;
  font-weight: bolder;
  width: 80px;
  height: 30px;
  font-size: 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  @media screen and (max-width: 750px){
    font-size: 14px;
    margin-left: 10px;
    
  }
`;

export const PoductDescription = styled.p`
  font-size: 0.7rem;
  color: #888;
  margin-top: -1px;
  margin-bottom: 5px;
`;

export const AddToCartButton = styled.button`
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%; 
  height: 35px;
  margin-top: auto; 
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
  @media screen and (max-width: 750px){
    font-size: 15px;
  }
`;
