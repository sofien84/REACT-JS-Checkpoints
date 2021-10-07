import 'bootstrap';
import './App.css';



import  { Button, Form, FormLabel} from 'react-bootstrap'

function App() {
 
  return (
    <div className="App">
 
       <center> 
        <h1>YAHYAOUI Forms </h1>
        <h1>Write Your Informations </h1>
        <Form>
        <Form.Group style={{ width: '2000px'}} className="mb-3" controlId="formName" >
         <Form.Control type="text" placeholder="First Name" className="First Name"/>
         <br/>
         <Form.Control type="text" placeholder="Last Name" className="Last Name"/>
         <br/>
         <Form.Control type="text" placeholder="Age" className="Age"/>
         <br/>
         <Form.Control type="text" placeholder="Address" className="Address"/>
         <br/>
         <Form.Control type="text" placeholder="Phone" className="Phone"/>
         <br/>
         <Form.Control type="text" placeholder="City" className="city"/>
         
         <select id="country" name="country">
          <option value="Tunisia">Tunisia</option>
          <option value="canada">Canada</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="France">France</option>
          <option value="Egypt">Egypt</option>
          </select>

        </Form.Group>


        <Form.Group  style={{ width: '1000px'}} className="mb-3" controlId="formEmail">
            <Form.Control type="email" placeholder="E-mail"  />
        </Form.Group>
        <Form.Group style={{ width: '1000px'}} className="mb-3" controlId="Biography" >
          <Form.Control type="text" placeholder="Biography"  />
        </Form.Group>
        
        <FormLabel controlId="floatingTextarea2" label="Message">
          <Form.Control
              as="textarea"
              placeholder="create  your subject and message"
              style= {{ width: '500px', height: '300px' }}
          />
          </FormLabel>
          <br/>
        <FormLabel  className="mb-3" >
          <Button   variant="primary" type="submit">
          Submit 
          </Button>
        </FormLabel>
      </Form>
      </center>
    </div>
    );
  }


export default App;