import { Card, Row, Select } from "antd";
import { Link, Outlet } from "react-router-dom";

export default function ViewReport (){
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
    return(
        <>
        
<Card

style={{
  width: 300,
 
}}
>
<div className="survey-dashboard-dd">
    <label>Select Chart :</label>
      <Select
      defaultValue=""
        style={{
          width: 100,
        }}
        onChange={handleChange}
        options={[
          {
            value: 'linechart',
            label: <Link to="/home/surveyDashboard/report/linechart">Line Chart</Link>
          },
          {
            value: 'piechart',
            label: <Link to="/home/surveyDashboard/report/piechart">Pie Chart</Link>
          },
          {
            value: 'barchart',
            label: <Link to="/home/surveyDashboard/report/barchart">Bar Chart</Link>
          },
          {
            value: 'doghnutchart',
           
            label: <Link to="/home/surveyDashboard/report/dognutchart">Doghnut Chart</Link>
            
          },
        ]}
      />
      </div>
</Card>
    
    <Outlet />
    </>
    )
}