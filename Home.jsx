import Dropdown from 'react-bootstrap/Dropdown';


function Home ()

{
     const myfunction = ()=>{
        document.getElementById('refresh').innerHTML="new things added";
       }

 

 

    return (

       

     

       <div className="main">

   

     <div className="sectionone">

              <div className="header">

              <h1 id="read">SHAPEL</h1>

              <div className="container" onclick="myFunction(this)">

              <Dropdown >

      <Dropdown.Toggle variant="sucess" id="dropdown-basic">

              <div className="bar1"></div>

              <div className="bar2"></div>

              <div className="bar3"></div>

       

      </Dropdown.Toggle>

     

      <Dropdown.Menu className='list'>

       

       <li> <Dropdown.Item href='#read'>HOME</Dropdown.Item></li>

       <li>   <Dropdown.Item href="#/action-2">ABOUT</Dropdown.Item></li>

       <li> <Dropdown.Item href="#/action-3">GALLARY</Dropdown.Item></li>

       <li>  <Dropdown.Item href="#/action-3">SERVICE</Dropdown.Item></li>

       <li> <Dropdown.Item href="#/action-3">BLOG</Dropdown.Item>

       </li>

 

      </Dropdown.Menu>

     

    </Dropdown>

             </div>

           

   </div>

            <div className="center">

            <div className="c1">

            <p>INTERIOR DESIGN</p>

            <p> STUDIO</p>

            </div>

            <div className="c2">

             <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem</p>

             </div>

             <div className="c3">

              <button id="button"><a href="kh" class="none2"> CONTACTUS</a></button></div>

            </div>

            </div>

            <div className='sectiontwo'>

              <div className='about'>

              <div className="ab1"></div>

              <div className="ab2">

                <h1 id="jumb"> ABOUT US</h1>

                <p id="tx">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                <p id="tx">Corrupti dolorem eum consequuntur ipsam repellat</p>

                <p id="tx">dolor soluta aliquid laborum, eius odit consectetur vel</p>

                <p id="tx">quasi in quidem, eveniet ab est corporis tempore.</p>
                 </div>

                <div className="c33">

                    <a href="#hame" class="none22"> READ MORE</a>

                   

                </div>

              </div>

            </div>
            <div className='thirdsection'>
                <div className="gal">
                     <h1 id="g11"> GALLERY</h1>
                      <div className="g111">
                           <div className="im1"></div>
                               <div className="im2"></div>
                                    <div className="im3"></div>
                       </div>
                 </div>
                     <div className="g112">
                        <div className="im4"></div>
                           <div className="im5"></div>
                              <div className="im6"> </div>
                                 <div class="c333" >
                                    <a href="#read" class="none222"> VEIW ALL</a>
                                 </div>
                       </div>
            </div>
            <div className='fourthsection'>
                  <div className="ser">
                       <div className="ser1">
                           <h1 id="ser11"> SERVICES</h1> 
                         </div>
                         
                    <div class="r444"> 
                    <div class="s444">
                        <div class="edt">
                            <h1>Residential Decoration</h1>  
                            <p id="comeon"> &nbsp;Lorem ipsum dolor sit amet consectetur </p> 
                            </div>
                    </div>
                    <div class="t2">
                        <div class="c444">
                            <a href="#read" class="none333"> VEIW ALL</a>

                        </div>
                    </div>
                </div>
                       
                    
                    <div class="r444"> 
                    <div class="s444">
                        <div class="edt">
                            <h1>Ecommercial Decoration</h1>  
                            <p id="comeon"> &nbsp;Lorem ipsum dolor sit amet consectetur </p> 
                            </div>
                    </div>
                    <div class="t2">
                        <div class="c444">
                            <a href="#read" class="none333"> VEIW ALL</a>

                        </div>
                    </div>
                </div>
                <div class="r555">
                    <div class="s555">
                        <div class="edt"> 
                         <h1 >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Officeial &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Decoration</h1>  
                          
                            <p id="comeon">&nbsp;Lorem ipsum dolor sit amet consectetur </p>
                        </div>
                    </div>
                    <h1 id="vaa"></h1>
                        <a id="vaa3"></a>
                    <div class="t3">
                        
                        <div class="c444">
                        <a href="#read" class="none333"> VEIW ALL</a>
                    </div>
                    </div>
                </div> 
                    </div>
            </div>
            <div className='naveen'>
                <p id='refresh'></p>
                <button onClick={myfunction}>clickhere</button>
            </div>
        
    
            
                         

        </div>

       

       

 

    )

}

export default Home;