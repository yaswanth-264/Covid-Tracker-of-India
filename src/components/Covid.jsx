import React,{useState,useEffect} from 'react';
 
function Covid(){
    const [Data,setData]=useState({});
    const [LastRefreshed,setLastRefreshed]=useState();
    const getCovidData=async()=>{
        try{
        const res=await fetch("https://api.rootnet.in/covid19-in/stats/latest");
        const wholedata=await res.json();
        setData(wholedata.data.summary);
        setLastRefreshed(wholedata.lastOriginUpdate.slice(0,10));
        }
        catch(err){
            console.log(err);
        }
       
    }
  

useEffect(()=>{
 getCovidData();
},[]);

return(
    <div>
    <ul>
    <div className="Confirmed" style={{backgroundColor:"green"}}>
    <h3>Total Active Cases</h3>
      <li>{Data.total}</li>
      </div>
      <div className="Confirmed" style={{backgroundColor:"red"}}>
      <h3>Deaths</h3>
      <li>{Data.deaths}</li>
      </div>
      <div className="Confirmed" style={{backgroundColor:"blue"}}>
      <h3>ConfirmedCasesIndian</h3>
      <li>{Data.confirmedCasesIndian}</li>
      </div>
      <div className="Confirmed" style={{backgroundColor:"black"}}>
      <h3>confirmedCasesForeign</h3>
      <li>{Data.confirmedCasesForeign}</li>
      </div>
      <div className="Confirmed" style={{backgroundColor:"violet"}}>
      <h3>Discharged</h3>
      <li>{Data.discharged}</li>
      </div>
      <div className="Confirmed" style={{backgroundColor:"orange"}}>
      <h3>LastRefreshed</h3>
      <li>{LastRefreshed}</li>
      </div>
  
    </ul>



    </div>
)

}
export default Covid;