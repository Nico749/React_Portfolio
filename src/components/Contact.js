import React from 'react';
import { Columns } from 'react-bulma-components';
import { Notification } from 'react-bulma-components';
import { Form } from 'react-bulma-components';
import { Button } from 'react-bulma-components';

export default function Contact() {
  return (
    <div class="hero is-fullheight has-background-black ">
      <Columns class ="is-vcentered">
        <Columns.Column offset={4} size={4}>
          <Notification color="black">
            <article class="media notification has-background-black bordercol">
              <div class="media-content has-text-white">
                <div class="content">
                  <h1 class="title is-size-4 center"><a id="contacts" href="mailto:pasqualininic@gmail.com">Mail</a></h1>
                </div>
              </div>
            </article>
          </Notification>
        </Columns.Column>

        <Columns.Column offset={4} size={4}>
          <Notification color="black">
            <article class="media notification has-background-black bordercol">
              <div class="media-content has-text-white">
                <div class="content">
                  <h1 class="title is-size-4 center"><a id="contacts" href=" tel: +61 466505170">Phone</a></h1>
                </div>
              </div>
            </article>
          </Notification>
        </Columns.Column>

        <Columns.Column offset={4} size={4}>
          <Notification color="black">
            <article class="media notification has-background-black bordercol">
              <div class="media-content has-text-white">
                <div class="content">
                  <h1 class="title is-size-4 center"><a id="contacts" href="https://github.com/Nico749" target="_blank" rel="noopener noreferrer">GitHub Profile</a></h1>
                </div>
              </div>
            </article>
          </Notification>
        </Columns.Column>

        <Columns.Column offset={4} size={4}>
          <Notification color="black">
            <article class="media notification has-background-black bordercol">
              <div class="media-content has-text-white">
                <div class="content">
                  <h1 class="title is-size-4 center"><a id="contacts" href="https://www.linkedin.com/in/nico-pasqualini/" target="_blank" rel="noopener noreferrer">LinkedIn</a></h1>
                </div>
              </div>
            </article>
          </Notification>
        </Columns.Column>

        <Columns.Column offset={4} size={4}>
          <Notification color="black">
            <article class="media notification has-background-black bordercol">
              <div class="media-content has-text-white">
                <div class="content">
                  <h1 class="title is-size-4 center"><a id="contacts" href="/Demo_photos/Resume Pasqualini.pdf" target="_blank" rel="noopener noreferrer">Curriculum</a></h1>
                </div>
              </div>
            </article>
          </Notification>
        </Columns.Column>

        <Columns.Column offset={2} size={8}>
          <Notification color="black">

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

          </Notification>
        </Columns.Column>

      </Columns>
    </div>
  );
}
