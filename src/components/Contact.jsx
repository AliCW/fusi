import React, { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { v4 as uuidv4 } from "uuid";
import * as api from "../../api/api.js";
import LoaderBar from "./LoaderBar.jsx";

export default function EmailForm () {
    const [sending, setSending] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [hideSubmit, setHideSubmit] = useState(false);
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState(false);
    const [turnstileError, setTurnstileError] = useState(false);

    const onSubmit = (event) => {
        event.preventDefault();
        setHideSubmit(true);
        setSending(true);
        setSuccess(false);
        setError(false);

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        if(data["cf-turnstile-response"] === ""){
            setTurnstileError(true);
            setSending(false);
            setHideSubmit(false);
            return;
        };

        if(!/[@]/g.test(address) || !/[.]/g.test(address)){
            setAddressError(true);
            setSending(false);
            setHideSubmit(false);
            return;
        };

        data["idempotencyKey"] = uuidv4();
        data["testKey"] = uuidv4();

        return api.sendEmail(data).then((response) => {
            if(response.status === 401){
                setError(true);
            } else {
                setSuccess(true);
            };
            setSending(false);
        });
    };

    return (

        <div>
            <form onSubmit={onSubmit}>        
                <input
                    name="title"
                    aria-label="email title"
                    id="title"
                    placeholder="Title / Subject"
                    className="email-title"
                    required
                    autoComplete="on"
                    minLength={4}
                    maxLength={100}
                    ></input>
                <textarea
                    name="body"
                    aria-label="email message body"
                    id="email_body"
                    placeholder="Message"
                    rows={10}
                    className="email-body"
                    required
                    minLength={10}
                ></textarea>
                <input
                    name="address"
                    aria-label="sender's email address"
                    id="email"
                    placeholder="Reply Address"
                    className="email-address"
                    required
                    autoComplete="on"
                    minLength={4}
                    maxLength={100}
                    onChange={(event) => setAddress(event.target.value)}
                    >
                </input>
                {!hideSubmit &&
                <div className="submit-button-wrapper">
                    <div>
                      <script
                          src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback"
                          defer   
                      ></script>
                      <div id="my-turnstile"></div>
                          <Turnstile 
                          siteKey="0x4AAAAAACHC4iD09PrpQ55O" 
                          options={{
                              action: 'submit-form',
                              theme: 'light',
                              size: 'compact',
                              language: 'en',
                            }}
                          />
                      </div>
                    <div>
                        <button type="submit" className="submit-button">Submit</button>
                    </div>
                </div>
                }
            </form>

            <div className="email-status-wrapper">

                {error && 
                    <div>
                        <p>Error in sending email</p>
                    </div>    
                }
                {addressError &&
                    <div>
                        <p>Please enter a valid address</p>
                    </div>
                }
                {turnstileError &&
                    <div>
                        <p>Turnstile error</p>
                    </div>
                }
                {success &&
                    <div>
                        <p>Email sending successfull</p>
                    </div>  
                }
                {sending &&
                    <div>
                        <LoaderBar />
                    </div>             
                }

            </div>
        </div>
    );
};