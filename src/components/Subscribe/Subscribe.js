import React from "react"
import { FooterContainer, FooterSubscription, FooterSubHeading, Form, FormInput} from './subscribeStyle'
import { Button } from "../../globalStyles"

const Subscribe = () => {
    return (
        <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Entre em contato conosco!
                    </FooterSubHeading>
                    <Form>
                        <FormInput name="email" type="email" placeholder="Email" />
                        <Button fontBig>Enviar</Button>
                    </Form>
                </FooterSubscription>
        </FooterContainer>
    )
}

export default Subscribe;