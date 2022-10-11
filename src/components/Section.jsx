import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #DCDCDC;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <div>
    <left>Men Shoes</left>
    <centre>Woman Shoes</centre>
    <right>Unisex Shoes</right>
    </div>;
};

export default Section;
