import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CertificateAfterS.css';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import QRCode from 'qrcode.react';
import focal from './../../assets/focal X 1 (1).png';
import axios from 'axios';

export default function CertificateAfterS() {

      const { id } = useParams();
      let NameOfIntern = { id }

      const [Data, setData] = useState();

      useEffect(() => {
            const fetchUsers = async () => {
                  try {
                        const response = await axios.get(`https://test.black-analysis-solutions.com/api/search?search=${encodeURIComponent(NameOfIntern.id)}`,
                              {
                                    headers: {
                                          'Content-Type': 'application/json',
                                    }
                              }
                        );
                        setData(response.data);
                        console.log(Data);
                  } catch (error) {
                        console.error('Error fetching users:', error);
                  }
            };
            fetchUsers();
      }, []);


      return (
            <section className='Certifi-fq-f'>
                  {
                      Data ?
                      <section>
                            {
                                  Data.map((Data) => (
                                    <div>
                                          {
                                                Data.certificate_type == "graduation" ?
                                                      <div className='box-certificate'>
                                                            <div id="pdf-content2" className='PDF-containar'>
                                                                  <div className='Border border2'>
                                                                        <div className='top'>
                                                                              <p>INTERNSHIP CERTIFICATE</p>
                                                                              <div><img src={focal} alt="focal-x" /></div>
                                                                        </div>
                                                                        <div className='Mid mid2'>
                                                                              <span>This is to certify that</span>
                                                                              <p>{Data.name}</p>
                                                                              <span className='midmid'>successfully completed four months internship program<br /> and received passing grades for certificate in</span>
                                                                              <p>{Data.specialization}</p>
                                                                              <span>a program offered by focal X (L.L.C)</span>
                                                                        </div>
                                                                        <div className='End'>
                                                                              <div className='left'>
                                                                                    <div className='qr'>
                                                                                          <QRCode
                                                                                                value="https://www.example.com"
                                                                                                size={78}
                                                                                                bgColor={"#ffffff"}
                                                                                                fgColor={"#000000"}
                                                                                                level={"L"}
                                                                                                includeMargin={false}
                                                                                                renderAs={"svg"}
                                                                                          />
                                                                                    </div>
                                                                                    <div className='description'>
                                                                                          <span className='xxx'>Scan To Search</span>
                                                                                          <span>Issued 2024-December</span>
                                                                                          <span>VALID CERTIFICATE ID</span>
                                                                                          <span>9PED0SS3Z08</span>
                                                                                    </div>
                                                                              </div>
                                                                              <div className='right'>
                                                                                    <div className='CEOName'>Alaa Darwish</div>
                                                                                    <div className='ceo'>Founder & CEO</div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                                      :
                                                      <div className='box-certificate'>
                                                            <div id="pdf-content" className='PDF-containar'>
                                                                  <div className='Border'>
                                                                        <div className='top'>
                                                                              <p>INTERNSHIP CERTIFICATE</p>
                                                                              <div><img src={focal} alt="focal-x" /></div>
                                                                        </div>
                                                                        <div className='Mid'>
                                                                              <span>This is to certify that</span>
                                                                              <p>{Data.name}</p>
                                                                              <span>attend 4 months internship program in</span>
                                                                              <p>{Data.specialization}</p>
                                                                              <span>a program offered by focal X (L.L.C)</span>
                                                                        </div>
                                                                        <div className='End'>
                                                                              <div className='left'>
                                                                                    <div className='qr'>
                                                                                          <QRCode
                                                                                                value="https://www.example.com"
                                                                                                size={78}
                                                                                                bgColor={"#ffffff"}
                                                                                                fgColor={"#000000"}
                                                                                                level={"L"}
                                                                                                includeMargin={false}
                                                                                                renderAs={"svg"}
                                                                                          />
                                                                                    </div>
                                                                                    <div className='description'>
                                                                                          <span className='xxx'>Scan To Search</span>
                                                                                          <span>Issued 2024-December</span>
                                                                                          <span>VALID CERTIFICATE ID</span>
                                                                                          <span>9PED0SS3Z08</span>
                                                                                    </div>
                                                                              </div>
                                                                              <div className='right'>
                                                                                    <div className='CEOName'>Alaa Darwish</div>
                                                                                    <div className='ceo'>Founder & CEO</div>
                                                                              </div>
                                                                        </div>
                                                                  </div>
                                                            </div>
                                                      </div>
                                          }
                                    </div>
                              ))
                            }
                      </section>
                      :
                      <></>  
                  }
            </section>
      )
}


const createPDF = () => {
      const input = document.getElementById('pdf-content');

      html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                  orientation: 'landscape',
                  unit: 'mm',
                  format: [222, 157.6]
            });
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('شهادة حضور');
      });
};

const createPDF2 = () => {
      const input = document.getElementById('pdf-content2');

      html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
                  orientation: 'landscape',
                  unit: 'mm',
                  format: [223, 157.6]
            });
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save('شهادة تخرج');
      });
};

