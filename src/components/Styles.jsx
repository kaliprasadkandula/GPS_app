import styled from "styled-components";
import background from "./../assets/bg.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-purple/theme.css";

import { FilterMatchMode } from "primereact/api";
import { InputText } from "primereact/inputtext";

import React from "react";
import { FiSearch } from "react-icons/fi";

export const colors = {
  primary: "#FFF",
  theme: "#BE185D",
  light1: "#F3F4F6",
  light2: "#E5E7EB",
  dark1: "#1f2937",
  dark2: "#4b5563",
  dark3: "#9ca3af",
  red: "#dc2626",
};

export const StyledContainer = styled.div`
  margin: 0;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  // background-image: url(${background});
  background-color: #1a2b3c;
  background-size: cover;
  background-attachment: fixed;
`;

export const StyledTitle = styled.h2`
  font-size: ${(props) => props.size}px;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "Black")};
  padding-bottom: 25px;
  padding-top: 25px;

  margin-bottom: 10px;
`;
/*export const StyledSubTitle = styled.p`
  font-size: ${(props) => props.size}px;
  text-align: center;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : "Black")};
  padding: 5px;
  margin-bottom: 15px;
`;
*/

export const StyledButton = styled(Link)`
  margin: 2px;
  padding: 10px;
  width: 80px;
  background-color: transparent;
  font-size: 10px;
  border: 2px solid ${colors.theme};
  border-radius: 10px;
  text-decoration: none;
  text-align: center;
  transition: ease-in-out 0.1s;
  background-color: ${colors.primary};
  color: ${colors.theme};
  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  margin-top: 15px;
  font-weight: bold;
`;

export const StyledTextInput = styled.input`
  width: 280px;
  padding: 10px;
  padding-left: 40px;
  font-size: 10px;
  letter-spacing: 1px;
  color: ${colors.dark1};
  border: 0;
  display: block;
  margin: 5px auto 10px auto;
  transition: ease-in-out 0.3s;
  border-radius: 8px;
  ${(props) =>
    props.invalid &&
    `
        background-color:${colors.red};
        color:${colors.primary};
        `}
  &:focus {
    background-color: ${colors.dark2};
    color: ${colors.primary};
  }
`;

export const StyledLabel = styled.p`
  padding-left: 5px;
  text-align: left;
  font-size: 13px;
  font-weight: bold;
  color: Black;
`;

export const StyledFormArea = styled.div`
  background-color: ${colors.light2};
  padding: 30px 55px;
  text-align: center;
  border-radius: 15px;
`;

export const StyledFormButton = styled(Link)`
  margin: 2px;
  padding: 10px;
  width: 80px;
  background-color: transparent;
  font-size: 10px;
  border: 2px solid ${colors.theme};
  border-radius: 10px;
  text-decoration: none;
  transition: ease-in-out 0.1s;
  background-color: ${colors.primary};
  color: ${colors.theme};
  &:hover {
    background-color: ${colors.theme};
    color: ${colors.primary};
    cursor: pointer;
  }
`;

export const StyledIcon = styled.p`
  color: ${colors.dark1};
  position: absolute;
  font-size: 15px;
  top: 30px;
  ${(props) => props.right && `right:15px;`}
  ${(props) => !props.right && `left:10px;`}
`;

export const StyledErrorMsg = styled.div`
  color: ${colors.red};
  font-size: 11px;
  margin-top: -5px;
  margin-bottom: 10px;
  text-align: left;
  font-weight: bold;
`;

export const StyledExtraText = styled.p`
  color: ${(props) => (props.color ? props.color : colors.dark2)};
  font-size: ${(props) => props.size}px;
  text-align: center;
  padding: 2px;
  margin-top: 10px;
  letter-spacing: 1px;
  display: inline-block;
`;

export const StyledTextLink = styled(Link)`
  font-size: ${(props) => props.size}px;
  font-weight: bold;
  color: ${colors.theme};
  transition: ease-in-out 0.3s;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 12px;
  }
`;

/*export const StyledCopyRight = styled.p`
  padding: 5px;
  margin: 2px;
  text-align: center;
  font-size: 10px;
  color: ${colors.dark1};
`;
*/

export const buttonn = {
  margin: "2px",
  padding: "10px",
  width: "80px",
  backgroundColor: "transparent",
  fontSize: "10px",
  border: `2px solid ${colors.theme}`,
  borderRadius: "10px",
  textDecoration: "none",
  transition: "ease-in-out 0.1s",
  backgroundColor: `${colors.primary}`,
  color: `${colors.theme}`,
};

/*
export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableHead = styled.thead`
  background-color: #ddd;
`;

export const TableHeadCell = styled.th`
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;

export const StyledTable = ({ data }) => {
  console.log(data)
  return (
    <TableWrapper>
      <TableHead>
        <TableRow>
          {
            Object.keys(data[0]).map((key,j) =>{
              return <TableHeadCell key={j}>{key}</TableHeadCell>
            })
          }
          <TableHeadCell> </TableHeadCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {
         data.map((row,i)=>{return ( <TableRow key={i}>
          {
            Object.values(row).map((key,j) =>{
              return <TableHeadCell key={j}>{key}</TableHeadCell>
            })
          }<TableHeadCell> <Link to={{
            pathname:`/dashboard/${row.DeviceId}`,
            
          }} state={{data:row.DeviceId}} >{`--`}</Link></TableHeadCell>
      
          </TableRow>)})
      }
           
                        
           
      </TableBody>
    </TableWrapper>
  );
};


export const StyledTable2 = ({ data }) => {
  console.log(data)
  return (
    <TableWrapper>
      <TableHead>
        <TableRow>
          {
            Object.keys(data[0]).map((key,j) =>{
              return <TableHeadCell key={j}>{key}</TableHeadCell>
            })
          }
          
        </TableRow>
      </TableHead>
      <TableBody>
      {
         data.map((row,i)=>{return ( <TableRow key={i}>
          {
            Object.values(row).map((key,j) =>{
              return <TableHeadCell key={j}>{key}</TableHeadCell>
            })
          }          
          </TableRow>)})
      }
           
                        
           
      </TableBody>
    </TableWrapper>
  );
};
*/

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

export const LeftDiv = styled.div`
  width: 40%;
  align-items: center;
  float: left;
`;

export const RightDiv = styled.div`
  width: 38%;
  float: right;
  border-radius: 10px;
  padding-top: 25px;
  background-color: #ffffff;
`;

export const MainTable2 = ({ data }) => {
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  return (
    <div style={{ width: "1000px", display: "grid", alignItems: "flex-start" }}>
      <span className="p-input-icon-left">
        <FiSearch style={{ paddingBottom: "5px" }} />
        <InputText
          placeholder="search by DeviceId/DeviceType"
          className="p-inputtext-sm"
          style={{ width: "250px", height: "40px", marginBottom: "10px" }}
          onInput={(e) => {
            setFilters({
              global: {
                value: e.target.value,
                matchMode: FilterMatchMode.CONTAINS,
              },
            });
          }}
        />
      </span>
      <div className="rounded-table">
        <DataTable
          value={data}
          paginator
          rows={5}
          rowsPerPageOptions={[3, 5]}
          totalRecords={data.length}
          filters={filters}
          selectionMode="single"
          removableSort
        >
          <Column
            field="DeviceId"
            header="DeviceId"
            style={{ width: "20%" }}
            sortable
          />
          <Column
            field="DeviceType"
            header="DeviceType"
            sortable
            style={{ width: "20%" }}
          />
          <Column
            field="Timestamp"
            header="Latest Timestamp"
            style={{ width: "20%" }}
          />
          <Column
            field="location"
            header="Latest Location"
            style={{ width: "20%" }}
          />
          <Column
            header={"View Details"}
            style={{ width: "10%" }}
            body={(rowData) => (
              <StyledLink
                to={{
                  pathname: `/dashboard/${rowData.DeviceId}`,
                  state: { data: rowData },
                }}
              >
                {" "}
                <FontAwesomeIcon
                  icon={faChevronRight}
                  style={{ marginLeft: 8 }}
                />
              </StyledLink>
            )}
          />
        </DataTable>
      </div>
    </div>
  );
};

export const MainTable3 = ({ data }) => {
  return (
    <DataTable value={data} responsiveLayout="scroll">
      {Object.keys(data[0]).map((key, j) => (
        <Column key={j} field={key} header={key} />
      ))}
    </DataTable>
  );
};

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;

  background-position: right 10px center;
  text-decoration: none;
  color: #333;

  &:focus {
    outline: none;
    background-color: #ddd;
  }
`;

export const ContainerDiv = () => (
  <InnerContainer>
    <Content>
      <StyledTitle size={25}>Welcome to GPS data analytics</StyledTitle>
      <ButtonGroup>
        <StyledButton to="/login">Login</StyledButton>
        <StyledButton to="/signup">Signup</StyledButton>
      </ButtonGroup>
    </Content>
  </InnerContainer>
);

export const InnerContainer = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: ${colors.light2};
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Content = styled.div`
  width: 250px;
  height: 250px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding-top: 50px;

  @media (max-width: 500px) {
    padding-top: 25px;

    width: 150px;
    height: 150px;
  }
`;
