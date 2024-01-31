
import Header from "./header";
import CommonDataFile from "./commondatafile";
import { Button, Select, Space } from 'antd';
import { Navigate, Outlet, useNavigate } from "react-router-dom";


export default function SurveyDashboard() {
  
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const navigate = useNavigate();
  function viewReport() {
   navigate('/home/surveyDashboard/report');
  }; 
  return(
    <>
    <div className="survey-dashboard-dd">
      <Select
      
        defaultValue=""
        style={{
          width: 200,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'kakinada',
            label: 'Kakinada Survey - Kakinada Rural',
          },
          {
            value: 'Tuni',
            label: 'Tuni-rural',
          },
          {
            value: 'Tenali',
            label: 'Tenali-Mandal',
          },
          {
            value: 'Vizag',
            label: 'Visakapatnam-rural',
            
          }, {
            value: 'vijayawada',
            label: 'vijayawada-IbrahimpatnamReport',
          },
          {
            value: 'mediacal',
            label: 'Medical Analytics',
            
          },
          {
            value: 'testing',
            label: 'Testing details - Ichapuram',
            
          }
        ]}
      />
      <Button type="primary" onClick={viewReport}>View Report</Button>
      </div>
      <br /><br />
      <div >
      <Outlet />
      </div>
      </>
    
 

  )
}
