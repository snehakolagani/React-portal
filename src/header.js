import { FilterOutlined, ReloadOutlined, SearchOutlined } from "@ant-design/icons"
import { Button, Modal, Select } from "antd"

import { useEffect, useState } from "react";



import AddUserForm from "./addUserForm";
import AddSurveyForm from "./addSurveyForm";
import VolunteerForm from "./VolunteerForm";


const Header = (props)=> {
    /* console.log("props",props)
    const headerData =props;  */
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [showFilter, setShowFilter] = useState(false);
    const [inputValue, setInputValue] = useState('');

    
    

      const handleFilter = async() =>{
        const response = await fetch("/api/portal/reports/getFilters/"+props.reportId, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({"rules": []})
          
        })
        if (response.ok) { 
          const result = await response.json();
          console.log("filter result",result)
          let filters = result.data.filtets.map(filter => ({
            title: filter.id,
            dataIndex: filter.id,
            key: filter.id,
          }));
          setShowFilter(true);
         
        }

      }
    
     // Simulating a delay, replace this with your actual data fetching logic
 

  const handleRefresh = () => {
    
  }; 
  
     const handleSearchClick = () => {
      setShowInput(true);
    };
    const handleFilterClick = () => {
      setShowFilter(false);
    }
   

    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    const handleInputBlur = () => {
      // You can perform actions when the input field loses focus
      setShowInput(false);
    };
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    return (
        <>
        
    <div className="container_header">
        
        <h3>{props.name}</h3>
      
       
        
      
         <div class="header_actions">
         <Button icon={<SearchOutlined />} onClick={handleSearchClick}></Button>

            {showInput && (
                <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                onBlur={handleInputBlur}
                placeholder=""
                />
            )}

        <Button  icon={<FilterOutlined />} onClick={handleFilter}></Button>
       
    
        <Button  icon={<ReloadOutlined />} onClick={handleRefresh}></Button>

        {(props.buttonText || "") !== "" && (
          <button onClick={showModal}>{props.buttonText}</button>
        )}
       
        </div>   
     
      
       <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        {props.buttonText === 'Add User' && <AddUserForm /> }
        {props.buttonText === 'Add Survey' && <AddSurveyForm  />}
        {props.buttonText === 'Add Volunter' && <VolunteerForm />}
     

</Modal> 
       
       
    </div>
    <div>
    {showFilter && (<Select
      
      defaultValue=""
      onChange={handleFilterClick}
      style={{
        width: 200,
      }}
      
      options={[
        {
          value:" filters.key",
          label: "filters.title",
        },
       
      ]}
    />
          
                
            )}

    </div>
    
    </>
    )

}
export default Header;