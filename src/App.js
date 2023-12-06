import './App.css';

function App() {
  return (
    <>
      <div id='top-container'>

        <div class="container-fluid header-top">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <p>Welcome to the National Institute of Fine Arts</p>
              </div>
              <div class="col-md-4 d-inline-flex header-col-rit">
                <div class="top-mail">
                  <a href="tel:9555112200" target="_top"><i class="fas fa-phone-alt mr-2"></i>9555112200</a>
                  <a href="tel:9810130552" target="_top"><i class="fas fa-phone-alt mr-2"></i>9810130552</a>

                </div>

              </div>
              <div class="col-md-4 d-inline-flex header-col-rit">
                <div class="top-mail">

                  <a href="mailto:admission@nifafinearts.com" target="_top"><i class="fas fa-envelope mr-2"></i>admission@nifafinearts.com</a>
                </div>
                <ul class="header-social">
                  <li><a href="https://www.facebook.com/nifafinearts" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                  <li><a href="https://twitter.com/artsnifa?lang=en" target="_blank"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed" target="_blank"><i class="fab fa-instagram"></i></a></li>
                  <li><a href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw" target="_blank"><i class="fab fa-youtube"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div id="logo">
            <a href="./"><img src="./images/nifa-new-logo.png" class="img-responsive" /></a>
          </div>

          <div class="responsive">
            <ul>
              <li><img src="./images/email.png" /><a href="mailto:admission@nifafinearts.com">admission@nifafinearts.com</a></li>
              <li class="margin-right-0"><img src="images/phone.png" /><a href="#">+91-9555112200/9810130552</a></li>
            </ul>
          </div>

          <div class="responsive-menu">
            <select name="page_name" onChange="location = this.options[this.selectedIndex].value;">
              <option value="./" selected="selected">Home</option>
              <option value="#" >About us</option>
              <option value="#" >&nbsp;-Facilities</option>

              <option value="#">Courses
                <option value="#">&nbsp;-B.F.A from UGC Recognised University</option>
                <option value="#">&nbsp;-M.A from UGC Recognised University </option>
                <option value="#">&nbsp;-Two years Advance Diploma in Fine Arts</option>
                <option value="#">&nbsp;-One Year Diploma in Fine Arts</option>
                <option value="#">&nbsp;-6 Months Diploma in Fine Arts</option>
                <option value="#">&nbsp;-Entrance Preparation For N.I.D</option>
                <option value="#">&nbsp;-Entrance Preparation for NIFT</option>
                <option value="#">&nbsp;-Animation Sketching</option>
                <option value="#">&nbsp;-Entrance Preparation for B.F.A</option>
                <option value="#">&nbsp;- 1 to 3 Months Certificate Hobby Course </option>
                <option value="#">&nbsp;-Kids Diploma (L-2)</option>
                <option value="#">&nbsp;-Kids Diploma (L-1)</option>
                <option value="#">&nbsp;-Hobby Certificate Course For Kids</option>
              </option>
              <option value="#" >Activities
                <option value="#">&nbsp;-Workshops</option>
                <option value="#">&nbsp;-Outdoor</option>
                <option value="#">&nbsp;-National Art Seminar & Award Show, 2018</option>
                <option value="#">&nbsp;-Media Coverage</option>
                <option value="#">&nbsp;-Judging Art Events</option>
                <option value="#">&nbsp;-Exhibition</option>
                <option value="#">&nbsp;-Daily Activities</option>
              </option>
              <option value="#" >Admission</option>
              <option value="#" >Art Gallery
                <option value="#">&nbsp;-Work by Kids Level-2</option>
                <option value="#">&nbsp;-Work by Kids Level-1</option>
                <option value="#">&nbsp;-Sketching</option>
                <option value="#">&nbsp;-Paintings done by Students of Level-3</option>
              </option>
              <option value="#" >Franchisee</option>
              <option value="#" >Online Classes</option>
              <option value="#" >Videos</option>
              <option value="#" >Pay Fee</option>
              <option value="#" >Contact Us</option>
            </select>
          </div>

          <div id="menu">
            <div class="button-menu">
              <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a>
                  <ul>

                    <li><a href="#">Facilities</a></li>
                  </ul>
                </li>
                <li><a href="#">Courses</a>
                  <ul>
                    <li><a href="#">B.F.A from UGC Recognised University</a></li>
                    <li><a href="#">M.A from UGC Recognised University </a></li>
                    <li><a href="#">Two years Advance Diploma in Fine Arts</a></li>
                    <li><a href="#">One Year Diploma in Fine Arts</a></li>
                    <li><a href="#">6 Months Diploma in Fine Arts</a></li>
                    <li><a href="#">Entrance Preparation For N.I.D</a></li>
                    <li><a href="#">Entrance Preparation for NIFT</a></li>
                    <li><a href="#">Animation Sketching</a></li>
                    <li><a href="#">Entrance Preparation for B.F.A</a></li>
                    <li><a href="#"> 1 to 3 Months Certificate Hobby Course </a></li>
                    <li><a href="#">Kids Diploma (L-2)</a></li>
                    <li><a href="#">Kids Diploma (L-1)</a></li>
                    <li><a href="#">Hobby Certificate Course For Kids</a></li>
                  </ul>
                </li>

                <li><a href="#">Activities</a>
                  <ul>
                    <li><a href="#">Workshops</a></li>
                    <li><a href="#">Outdoor</a></li>
                    <li><a href="#">National Art Seminar & Award Show, 2018</a></li>
                    <li><a href="#">Media Coverage</a></li>
                    <li><a href="#">Judging Art Events</a></li>
                    <li><a href="#">Exhibition</a></li>
                    <li><a href="#">Daily Activities</a></li>
                  </ul>
                </li>

                <li><a href="#">Admission</a></li>
                <li><a href="#">Art Gallery</a>
                  <ul>
                    <li><a href="#">Work by Kids Level-2</a></li>
                    <li><a href="#">Work by Kids Level-1</a></li>
                    <li><a href="#">Sketching</a></li>
                    <li><a href="#">Paintings done by Students of Level-3</a></li>
                  </ul>
                </li>

                <li><a href="#">Franchise</a></li>

                <li><a href="#">Online Classes</a></li>
                <li><a href="#">Videos</a></li>
                <li><a href="#">Pay Fee</a></li>

                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>


      </div>

      <div id="boxes">
        <div style={{ top: "-226.5px", left: "620px !important", display: "none", height: "600px", width: "500px", marginLeft: "185px" }} id="dialog" class="window pop-up">
          <div id="lorem">
            <a href="#"><img src="./images/online-classes.JPG" width="90%" height="80%" style={{ position: "relative", left: "26px" }} /></a>
          </div>
          <div class="close">
            <a href="#"><img src="./images/closes.png" /></a>
          </div>
        </div>
        <div style={{ width: "900px", fontSize: "32pt", color: "white", height: "602px", display: "none", opacity: "0.8" }} id="mask"></div>
      </div>

      <div id="banner">
        <ul id="slider4">
          <li>
            <img src="banner-images/1550551577home-banner1.jpg" alt="" style={{ width: "100vw", height: "50vw" }} />
            <p class="caption">Banner 1</p>
          </li>

        </ul>
      </div>

      <div id="markque-container">
        <div class="container">
          <div id="part-marq">
            <div id="headingdd">
              <h3 style={{ fontWeight: "bold" }}>Nifa Updates:: </h3>
            </div>
            <div id="marqueeq">
              <marquee behavior="scroll" direction="left" scrollamount="3" scrolldelay='1' onmouseover='this.stop()' onmouseout='this.start()'>
                <p><strong>All NIFA courses are now available worldwide through our Live and Interactive Online Classes. Please&nbsp;download the NIFA app from our online classes page to register for a complimentary trial class.</strong></p>
              </marquee>
            </div>
          </div>
        </div>
      </div>
 

      <div id="welcome-container">
        <div class="container">
          <div id="heading">
            <h1>Welcome To <span>National Institute of Fine Arts </span></h1>
          </div>
          <p>National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists and advancing art to create a more human world. National Institute of Fine Arts&nbsp; (NIFA) was
            established by MRS&nbsp;RENU KHERA in Delhi and&nbsp;NCR of Delhi on July 2005.&nbsp;Institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and Arts University (Gwalior). Its aim is to provide education
            and training to students on a wide spectrum of Fine Arts.</p>

          <p>National Institute of Fine Arts<strong>&nbsp;</strong>is a place where the creative expression of individuals is nurtured and a sense of community flourishes. We seek to shape the global future of arts with an emphasis on excellence that allows
            its members to reach for the highest artistic standards as individuals while recognizing that the Art&nbsp;is&nbsp;one of the foundations of a healthy and creative society. This is a place where national and international leaders in the
            arts gather, teach, show and perform their work. The institute&nbsp;prides itself on its openness and on creating an environment that is safe, welcoming, and built on mutual respect.</p>

          <p><strong>National Institute of Fine Arts&nbsp;is a place where the creative expression of individuals is nurtured and a sense of community flourishes.</strong></p>
          <button type="button" class="btn btn-outline" onclick="window.location.href='#'">Read More</button>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>

      <section class="container-fluid downapp">
        <div class="container">
          <div class="row onclassec">
            <div class="col-md-5">
              <div class="lmore-content">
                <h2>Online Classes</h2>
                <p>Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many amazing features Like: Step-by-step recorded demo videos prepared by your faculty members. Regular assessment of your
                  practise through assignment section. Live class section from same app. Attendance, payment invoice, art news, announcements, important information and direct connect with the management team are some more features. So hurry
                  up n join now to experience personalised coaching by experts sitting at your home.</p>
                <p>We wish u Happy Learning. Stay Safe n Healthy.</p>
                <button type="button" class="btn btn-outline" onclick="window.location.href='#'">Read More</button>

                <p class="nfothed">Download the app</p>
                <ul class="list-inline nappimg">
                  <li class="list-inline-item"><a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr"><img src="./images/gplay.png" class="img-responsive" /></a></li>
                  <li class="list-inline-item"><a href="https://apps.apple.com/us/app/apple-store/id1472483563"><img src="images/appstore.png" class="img-responsive" /></a></li>
                </ul>
              </div>
            </div>

            <div class="col-md-7">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/-9cJjaLXKqE?rel=0" frameborder="0" allowfullscreen></iframe>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div style={{ clear: "both" }}></div>
      <div id="course-program-container" class="coursec">
        <div class="container">
          <div class="left-container">
            <div id="head">
              <h2>Our Courses</h2>
            </div>

            <div class="package-cont">
              <div class="row equal">
                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/animation-sketching.jpg" class="img-responsive" />
                    <div>
                      <p>6 Months Diploma in Sketching & Oil Painting - Regular/Part time</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/3mchc.jpg" class="img-responsive" />
                    <div>
                      <p>1 to 3 Months Certificate Hobby Course (Regular and Weekend)</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/1ydfa.jpg" class="img-responsive" />
                    <div>
                      <p>One Year Diploma in Fine Arts-Regular/Part Time-Level-3</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/2ydfa.jpg" class="img-responsive" />
                    <div>
                      <p>Two years Advance Diploma in Fine Arts - Regular/Part time</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row equal">
                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/entrance-prepration.jpg" class="img-responsive" />
                    <div>
                      <p>Entrance Preparation For N.I.D</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/bfa.jpg" class="img-responsive" />
                    <div>
                      <p>B.F.A from UGC Recognised University</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/ma.jpg" class="img-responsive" />
                    <div>
                      <p>M.A in Painting from UGC Recognised University</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/entrance-prepration3.jpg" class="img-responsive" />
                    <div>
                      <p>Entrance preparation for B.F.A</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row equal ccard-lrow">
                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/kidl1.jpg" class="img-responsive" />
                    <div>
                      <p>Kids 1 year Diploma (Level-1)</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/kidl2.jpg" class="img-responsive" />
                    <div>
                      <p>Kids 1 year Diploma (Level-2)</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/entrance-prepration2.jpg" class="img-responsive" />
                    <div>
                      <p>Entrance Preparation for NIFT</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>

                <div class="col-md-3">
                  <div class="pac-col4">
                    <img src="images/hccfk.jpg" class="img-responsive" />
                    <div>
                      <p>3 Months Hobby Certificate Course For Kids</p>
                      <button type="button" onclick="window.location.href='#'" class="pacbt">Know More</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ clear: "both" }}></div>

      <div class="container-fluid">
        <div id="gallery-container" class="container">
          <div id="head">
            <h2>Students Work</h2>
          </div>
          <div class="container">
            <div class="row">
              <ul class="galul">
                <li class="gallery-item"><a href="images/homegallery/img1.jpg" data-fancybox="images"><img src="images/homegallery/img1.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img2.jpg" data-fancybox="images"><img src="images/homegallery/img2.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img3.jpg" data-fancybox="images"><img src="images/homegallery/img3.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img4.jpg" data-fancybox="images"><img src="images/homegallery/img4.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img5.JPG" data-fancybox="images"><img src="images/homegallery/img5.JPG" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img6.JPG" data-fancybox="images"><img src="images/homegallery/img6.JPG" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img7.jpg" data-fancybox="images"><img src="images/homegallery/img7.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img8.jpg" data-fancybox="images"><img src="images/homegallery/img8.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img9.jpg" data-fancybox="images"><img src="images/homegallery/img9.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img10.jpg" data-fancybox="images"><img src="images/homegallery/img10.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img11.jpg" data-fancybox="images"><img src="images/homegallery/img11.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img12.jpg" data-fancybox="images"><img src="images/homegallery/img12.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img13.jpg" data-fancybox="images"><img src="images/homegallery/img13.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img14.jpeg" data-fancybox="images"><img src="images/homegallery/img14.jpeg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img15.jpeg" data-fancybox="images"><img src="images/homegallery/img15.jpeg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img16.jpeg" data-fancybox="images"><img src="images/homegallery/img16.jpeg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img17.jpg" data-fancybox="images"><img src="images/homegallery/img17.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img18.jpeg" data-fancybox="images"><img src="images/homegallery/img18.jpeg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img19.jpg" data-fancybox="images"><img src="images/homegallery/img19.jpg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img20.jpeg" data-fancybox="images"><img src="images/homegallery/img20.jpeg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img21.jpeg" data-fancybox="images"><img src="images/homegallery/img21.jpeg" /></a></li>
                <li class="gallery-item"><a href="images/homegallery/img22.jpg" data-fancybox="images"><img src="images/homegallery/img22.jpg" /></a></li>
              </ul>
            </div>
          </div>


        </div>
      </div>

      <div id="student-container">
        <div class="container">
          <h2>Student's Testimonial</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="testimonial-content">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/VrGcY2k5zuc"></iframe>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial-content">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/EnYCmNGoySc"></iframe>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial-content">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/iX6KgBTH__E"></iframe>
                </div>

              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="testimonial-content">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/hvjJv1zVl2k"></iframe>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial-content">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/GfialCtEAYk"></iframe>
                </div>

              </div>
            </div>
            <div class="col-md-4">
              <div class="testimonial-content">
                <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/S5AUDt6999o"></iframe>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="footer-container2">
        <footer>
          <div class="container-fluid nfotcont">
            <div class="container">
              <div class="row">
                <div class="col-md-3 col-lg-3 col-xs-6">
                  <p class="nfothed">Company</p>
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">About</a></li>
                    <li class="list-group-item"><a href="#">Facilities</a></li>
                    <li class="list-group-item"><a href="#">Career</a></li>
                    <li class="list-group-item"><a href="#">Contact us</a></li>
                    <li class="list-group-item"><a href="#">Terms & Conditions</a></li>
                    <li class="list-group-item"><a href="#">Refund Policy</a></li>
                    <li class="list-group-item"><a href="#">Privacy Policy</a></li>
                  </ul>
                </div>

                <div class="col-md-3 col-lg-3 col-xs-6 fotcol4">
                  <p class="nfothed">Activities</p>
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">Art Gallery</a></li>
                    <li class="list-group-item"><a href="#">Workshops</a></li>
                    <li class="list-group-item"><a href="#">Outdoor Activities</a></li>
                    <li class="list-group-item"><a href="#">Media Coverage</a></li>
                    <li class="list-group-item"><a href="#">Art Events</a></li>
                    <li class="list-group-item"><a href="#">Exhibition</a></li>
                    <li class="list-group-item"><a href="#">Daily Activities</a></li>
                  </ul>
                </div>

                <div class="col-md-3 col-lg-3 col-xs-6 fotcol4">
                  <p class="nfothed">Popular Course</p>
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">Diploma in Fine Arts</a></li>
                    <li class="list-group-item"><a href="#">Certificate Hobby Course</a></li>
                    <li class="list-group-item"><a href="#">Entrance Preparation</a></li>
                    <li class="list-group-item"><a href="#">BFA</a></li>
                    <li class="list-group-item"><a href="#">Animation Sketching</a></li>
                    <li class="list-group-item"><a href="#">Kids Diploma</a></li>
                  </ul>
                </div>
                <div class="col-md-3 col-lg-3 col-xs-6 fotcol4">
                  <p class="nfothed">Our Locations</p>
                  <ul class="list-group">
                    <li class="list-group-item"><a href="#">Gurgaon (Dlf Phase - 4)</a></li>
                    <li class="list-group-item"><a href="#">Mumbai (Andheri West)</a></li>
                    <li class="list-group-item"><a href="#">South Delhi (Kailash Colony)</a></li>
                    <br />
                    <p class="nfothed">International Branches</p>
                    <li class="list-group-item"><a href="#">London</a></li>
                    <li class="list-group-item"><a href="#">USA</a></li>
                    <li class="list-group-item"><a href="#">Dubai, UAE</a></li>
                  </ul>


                </div>
              </div>
              <div class="row nfotrow2">
                <div class="col-md-5 col-lg-5 col-xs-12">
                  <p class="nfothed mt-4 mt-sm-0">NIFA is a unit of Nifaedutech Pvt Ltd.</p>
                  <p class="nfothed mt-4 mt-sm-0">Connect with us</p>
                  <p><a href="tel:9555112200" target="_top">9555112200</a>,<a href="tel:9810130552" target="_top">9810130552</a> </p>
                  <p><a href="mailto:admission@nifafinearts.com" target="_top">admission@nifafinearts.com</a></p>
                  <ul class="list-inline nfot-soclist">
                    <li class="list-inline-item"><a href="https://www.facebook.com/nifafinearts" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                    <li class="list-inline-item"><a href="https://twitter.com/artsnifa?lang=en" target="_blank"><i class="fab fa-twitter"></i></a></li>
                    <li class="list-inline-item"><a href="https://instagram.com/nifafinearts?igshid=9ni7d0aogzed" target="_blank"><i class="fab fa-instagram"></i></a></li>
                    <li class="list-inline-item"><a href="https://www.youtube.com/channel/UCud0pfiZT-Ph2JX1_tN6rbw" target="_blank"><i class="fab fa-youtube"></i></a></li>
                  </ul>
                </div>

                <div class="col-md-7 col-lg-7 col-xs-12">
                  <p class="nfothed text-right">Download the app</p>
                  <ul class="list-inline nappimg text-right mb-0">
                    <li class="list-inline-item"><a href="https://play.google.com/store/apps/details?id=co.thanos.fljvr"><img src="images/gplay.png" class="img-fluid" /></a></li>
                    <li class="list-inline-item"><a href="https://apps.apple.com/us/app/apple-store/id1472483563"><img src="images/appstore.png" class="img-fluid" /></a></li>
                  </ul>
                  <p class="nfotbotline text-right mb-0">© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="whatsapp">
            <a target="_blank" href="https://api.whatsapp.com/send?phone=919555112200"><i class="fab fa-whatsapp"></i></a>
          </div>
        </footer>
      </div>
    </>
  );
}
export default App;
