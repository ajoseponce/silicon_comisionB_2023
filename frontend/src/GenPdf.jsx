import React, { useState } from "react";
import { MiPdf } from "./MiPdf";
// import { Document, Page } from 'react-pdf';
// import {  Document, PDFViewer } from '@react-pdf/renderer';
import ReactPDF from '@react-pdf/renderer';
export function GenPdf(){

    const [numPages, setNumPages] = useState(1);
  const [pageNumber, setPageNumber] = useState(1);

  ReactPDF.render('hola', 'example.pdf');
    // return(
    //     <>
        
    //     <PDFViewer>
    //         hola mundo
    //     </PDFViewer>
     
   
    //     </>
    // )
}