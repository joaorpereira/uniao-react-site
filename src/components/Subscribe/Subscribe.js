import React from "react"
import { FooterContainer, FooterSubscription, FooterSubHeading, Form, FormInput} from './subStyle'
import { Button } from "../../globalStyles"

const Subscribe = () => {
    return (
        <FooterContainer>
                <FooterSubscription>
                    <FooterSubHeading>
                        Inscreva-se para receber nossos conteúdos!
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