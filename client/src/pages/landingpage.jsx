import Header from "../components/Header";
import Hero from "../components/Hero";
import Desc from "../components/Desc";
import { useState } from "react";
import axios from "../../api/axios";

export const LandingPage = () => {
  const [questions, setQuestions] = useState([]);
   const handleFileUpload = (event) => {
    event.preventDefault();
    console.log('Uploading file...');
    const file = event.target.files[0];
    if (!file) {
      console.error('No file selected.');
      return;
    }
    const formData = new FormData();
    formData.append('pdfFile', file);

    axios.post('/upload', 
      formData
    )
    .then(response => console.log(response.data))
    .then(data => {
      setQuestions(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };


  return (
    <>
      <Header />
      <Hero />
      <Desc />
      <div className="mt-64">
      <h2>PDF Uploader</h2>
      <input type="file" onChange={handleFileUpload} accept="application/pdf" required />
    </div>
    </>
  );
}
