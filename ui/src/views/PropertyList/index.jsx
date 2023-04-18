import { useEffect, useState } from "react";
import axios from 'axios';
import Nav from '../../Navbar/Nav';

export default function () {
  const [propertyArray, setPropertyArray] = useState([]);

  const getProperties = async () => {
    try {
      let response = await axios.get("http://localhost:5001/api/properties");
      setPropertyArray(response.data?.data || []);
    } catch(error) {
      console.log("error - ", error)
    }
  }

  useEffect(() => { getProperties(); }, []);

  return (
    <div>
      <Nav />
      <div style={{padding: '20px 50px'}}>
      {
        propertyArray.map(({
          description,
          propertyName,
          propertyType,
          securityDeposit,
          rent,
          imageList
        }) => <div key={propertyName}>
          {imageList && <img style={{width: '50vw', height: 'auto'}} src={imageList} alt="Preview" />}
          <h2>{propertyName}</h2>
          <p>{description}</p>
          <h3>{propertyType}</h3>
        <h5> Seurity Deposite {securityDeposit}</h5>
        <h5>Rent {rent}</h5>
        </div>)
      }
      </div>
    </div>
  )
}
