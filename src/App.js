import './App.css';

function App() {
  return (
    <div className="App">
       <h1>Welcome To Bucket Suggestion App</h1>
       <div className='row'>
          <div className='col-12'>
               <div className='col-md-6' style={{textAlign:'left'}}>
                  <h5> Bucket Form </h5>
                  <div className='col-md-10 wrapper'>
                     
                      <div className="row ">

                        <div className="col-lg-10" style={{margin:"8px"}}>
                          <div className="input-group">
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button">Bucket Name</button>
                            </span>
                            <input type="text" className="form-control" placeholder="Search for..." />
                          </div>
                        </div>

                        <div className="col-lg-10" style={{margin:"8px"}}>
                          <div className="input-group">
                            <span className="input-group-btn">
                              <button className="btn btn-default" type="button">Volume (In Inches) </button>
                            </span>
                            <input type="text" className="form-control" placeholder="Search for..." />
                          </div>
                        </div>

                        <div className='col-lg-10' style={{margin:"8px"}}>
                           <button type="button" className="btn btn-default navbar-btn">Save </button>
                        </div>
                       
                      </div>

                  </div>
               </div>

               <div className='col-md-6' style={{textAlign:'left'}}>
                  <h5> Ball Form </h5>
                  <div className='col-md-10 wrapper'>

                  <div className="row ">

                    <div className="col-lg-10" style={{margin:"8px"}}>
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button">Ball Name</button>
                        </span>
                        <input type="text" className="form-control" placeholder="Search for..." />
                      </div>
                    </div>

                    <div className="col-lg-10" style={{margin:"8px"}}>
                      <div className="input-group">
                        <span className="input-group-btn">
                          <button className="btn btn-default" type="button">Volume (In Inches) </button>
                        </span>
                        <input type="text" className="form-control" placeholder="Search for..." />
                      </div>
                    </div>

                    <div className='col-lg-10' style={{margin:"8px"}}>
                      <button type="button" className="btn btn-default navbar-btn">Save </button>
                    </div>

                    </div>

                  </div>
                
              </div>

          </div>
          <div className='col-12'>
             <div className='col-md-10'  style={{textAlign:'left'}}>
                 <h5> Bucket Suggestion </h5>
                 <div className='col-lg-12 wrapper'>

                       <div className='col-lg-4'>
                            <div className="row" style={{borderRight:"1px solid black"}}>
                            <div className="col-lg-10" style={{margin:"8px"}}>
                              <div className="input-group">
                                <span className="input-group-btn">
                                  <button className="btn btn-default" type="button">Ball Name</button>
                                </span>
                                <input type="text" className="form-control" placeholder="Search for..." />
                              </div>
                            </div>

                            <div className="col-lg-10" style={{margin:"8px"}}>
                              <div className="input-group">
                                <span className="input-group-btn">
                                  <button className="btn btn-default" type="button">Volume (In Inches) </button>
                                </span>
                                <input type="text" className="form-control" placeholder="Search for..." />
                              </div>
                            </div>

                            <div className='col-lg-10' style={{margin:"8px"}}>
                              <button type="button" className="btn btn-default navbar-btn">Place Ball In Bucket </button>
                            </div>

                            </div>
                       </div>
                       <div className='col-lg-8' style={{textAlign:'left'}}>
                               <h3> Result </h3>
                               <span className='p-2'> Following are the suggested buckets: </span>

                               <table className='table table-bordered'>
                                 <tbody>
                                  <tr>
                                     <td> Bucket A </td>
                                     <td> 50 Green Balls, 40 Orange Balls and 20 Blue Balls </td>
                                  </tr>

                                  <tr>
                                     <td> Bucket B </td>
                                     <td> 50 Green Balls, 40 Orange Balls and 20 Blue Balls </td>
                                  </tr>
                                 
                                 </tbody>
                               </table>
                               <p style={{ textAlign:'end'}}><span> *(Numbers of balls are just for reference) </span> </p>
                       </div>

                 </div>
             </div>
             
          </div>
       </div>
       
    </div>
  );
}

export default App;
