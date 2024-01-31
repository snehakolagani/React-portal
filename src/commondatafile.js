
import React, { useEffect, useState } from 'react';

import { Table } from 'antd';


   
    
      export default function CommonDataFile(props) {
        const [data, setData] = useState();
        const [columns, setColumns] = useState();
        
       
        const [loading, setLoading] = useState(false);
        const [tableParams, setTableParams] = useState({
          pagination: {
            current: 1,
            pageSize: 10,
          },
        });
        const fetchMetadata = async(reportId) => {

          // setLoading(true);
          const resp = await fetch(`/api/portal/reports/getTablemetadata/`+reportId);
           if(resp.ok){           
              const response =await resp.json();
              
              let columns = response.data.metadata.map(column => ({
                title: column.headerName,
                dataIndex: column.field,
                key: column.field,
              }));
              setColumns(columns);
            }
            
        };
        const fetchData = async(reportId) => {
          setLoading(true);
          const response = await fetch("/api/portal/reports/getDatabyquery/"+reportId, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({"rules": []})
            
          })
          if (response.ok) { 
            const result = await response.json();
            console.log("result",result)
            
            setData(result["serviceResult"]["results"]);
          }
              setLoading(false);
           
        };
        useEffect(() => {
          console.log("useEWffect calling")
          fetchMetadata(props.reportId);
          fetchData(props.reportId);
        }, [props.reportId]);
        const handleTableChange = (pagination, filters, sorter) => {
          setTableParams({
            pagination,
            filters,
            ...sorter,
          });
      
          // `dataSource` is useless since `pageSize` changed
          if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setData([]);
          }
        }
      

    return (
        <>
      
   
  <div className="data_table">
    
    <Table
      columns={columns}
     
      dataSource={data}
      pagination={tableParams.pagination}
      loading={loading}
      onChange={handleTableChange}
      
    />
    </div>
   
    </>
    )

        }
  