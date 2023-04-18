import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Nav from '../../Navbar/Nav';

export default function () {

  const [base64String, setBase64String] = useState(null);

  const [formData, setFormData] = useState({
    propertyName: "",
    propertyType: "",
    rent: 0,
    securityDeposit: 0,
    description: "",
    imageList: "",
    locationName: "",
    googleMapLocation: ""
  })

  const fileSelectedHandler = (event) => {
    const file = event.target.files[0];

    // Read the selected file as a data URL
    const reader = new FileReader();
    reader.onload = () => {
      // Convert the data URL to a base64 string
      const base64 = reader.result;
      setBase64String(base64);
    };
    reader.readAsDataURL(file);
  };

  const handlePostPropertyDetails = async (propertyDetails) => {
    console.log("propertyDetails - ", propertyDetails)
    try {
      let response = await axios.post( "http://localhost:5001/api/save-property", propertyDetails );
      console.log("response - ", response);
      alert("Property Added ")
    } catch (error) {
      console.log("error - ", error);
      alert("something went wrong")

    }

  }

  const handleFormSubmit =(event) => {
    event.preventDefault();

    const {
      propertyName,
      propertyType,
      rent,
      securityDeposit,
      description,
      locationName,
      googleMapLocation
    } = event.target.elements;

    // setFormData
    handlePostPropertyDetails({
      propertyName: propertyName.value,
      propertyType: propertyType.value,
      rent: rent.value,
      securityDeposit: securityDeposit.value,
      description: description.value,
      imageList: base64String,
      locationName: locationName.value,
      googleMapLocation: googleMapLocation.value
    });
  }

  useEffect(() => {

    // console.log("formData: ", formData);
  }, [formData])

  return (
    <>
      <Nav />
    <div className={styles["root"]}>
      <form onSubmit={handleFormSubmit}>
        <label className={styles["input-block"]}>
          Property Name : <input name="propertyName" type="text" />
        </label>

        <label className={styles["input-block"]}>
          Property Type : <select name="propertyType">
            <option value="PG">PG</option>
            <option value="FLAT">FLAT</option>
            <option value="HOSTEL">HOSTEL</option>
            <option value="APARTMENT">APARTMENT</option>
          </select>
        </label>

        <label className={styles["input-block"]}>
          Monthly Rent : <input name="rent" type="number" />
        </label>

        <label className={styles["input-block"]}>
          Security Deposit : <input name="securityDeposit" type="number" />
        </label>

        <label className={styles["input-block"]}>
          Property Description : <input name="description" type="textarea" />
        </label>

        <label className={styles["input-block"]}>
          Location Name : <input name="locationName" type="text" />
        </label>
        <label className={styles["input-block"]}>
          Google Map Location : <input name="googleMapLocation" type="text" />
        </label>

        <label className={styles["input-block"]}>
          Property Image : <input name="imageList" onChange={fileSelectedHandler} type="file" />
        </label>

        {base64String && <img className={styles["image-preview"]} src={base64String} alt="Preview" />}

        <label className={styles["submit-button"]}>
          <input className={styles["submit-button"]} type="submit" value="Submit" />
        </label>
      </form>
    </div>
    </>
  )
}
