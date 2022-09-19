import React,{useEffect} from 'react';
import { Columns } from 'react-bulma-components';
import { Form } from 'react-bulma-components';
import { Button } from 'react-bulma-components';
import '../styles/Contacts.css'
import '../styles/PortfolioContainer.css'
import Pdf from '../Demo_photos/Resume Pasqualini New.pdf';


export default function Contacts() {
  //loads the page at the top 
useEffect(() => {
  window.scrollTo(0, 0)
}, [])

  return (

    <div class="hero is-fullheight  ">
      
      <Columns class="is-vcentered">

        <h1 id="tit" className='lineUp'>CONTACTS</h1>
        <Columns.Column offset={4} size={4} className='col'>
          <div >
            <div class="content">
              <h1 class="title is-size-4 center"><a id="contacts" href="mailto:pasqualininic@gmail.com">Mail</a></h1>
            </div>
          </div>
        </Columns.Column>

        <Columns.Column offset={4} size={4} className='col'>
          <div >
            <div class="content">
              <h1 class="title is-size-4 center"><a id="contacts" href=" tel: +61 466505170">Phone</a></h1>
            </div>
          </div>
        </Columns.Column>

        <Columns.Column offset={4} size={4} className='col'>
          <div >
            <div class="content">
              <h1 class="title is-size-4 center"><a id="contacts" href="https://github.com/Nico749" target="_blank" rel="noopener noreferrer">GitHub Profile</a></h1>
            </div>
          </div>
        </Columns.Column>

        <Columns.Column offset={4} size={4} className='col'>
          <div >
            <div class="content">
              <h1 class="title is-size-4 center"><a id="contacts" href="https://www.linkedin.com/in/nico-pasqualini/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h1>
            </div>
          </div>
        </Columns.Column>

        <Columns.Column offset={4} size={4} className='col'>
          <div >
            <div class="content">
              <h1 class="title is-size-4 center"><a id="contacts" href={Pdf}  target="_blank" rel="noopener noreferrer">Curriculum</a></h1>
            </div>
          </div>
        </Columns.Column>
        <Columns.Column offset={4} size={4} className='col'>
          <div >
            <div class="content">
            <button onclick="window.dataLayer.push({'event': 'login'});" style={{"color":"white"}}>Button 1</button>

            </div>
          </div>
        </Columns.Column>


        {/* <Columns.Column offset={2} size={8} >

          <Form.Field>
            <Form.Label>Name</Form.Label>
            <Form.Control>
              <Form.Input />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Mail</Form.Label>
            <Form.Control>
              <Form.Input />
            </Form.Control>
          </Form.Field>

          <Form.Field>
            <Form.Label>Message</Form.Label>
            <Form.Control>
              <Form.Textarea />
            </Form.Control>
          </Form.Field>

          <Form.Field kind="group">
            <Form.Control>
              <Button color="link">Submit</Button>
            </Form.Control>
            <Form.Control>
              <Button color="link" colorVariant="light">
                Cancel
              </Button>
            </Form.Control>
          </Form.Field>

        </Columns.Column> */}

      </Columns>
    </div>
  );
}
