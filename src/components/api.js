import React, { useEffect } from "react";

export default function Api() {

    useEffect(() => {
        // eslint-disable-next-line no-undef
        hljs.configure({
            ignoreUnescapedHTML: true
        });
        // eslint-disable-next-line no-undef
        hljs.highlightAll()
    })

    let all_req =
        `curl --request GET \\
    --url ${process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/all`

    let all_res =
        `{
    "data": data
}`

    let random_req =
        `curl --request GET \\
    --url ${process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/random`

    let random_res =
        `{
    "data": data
}`

    let daily_req =
        `curl --request GET \\
    --url ${process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/daily/2023-03-02`

    let daily_res =
        `{
    "data": data
}`

    let submit_req =
        `curl --request POST \\
    --url ${process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/submit \\
    --header 'Content-Type: application/json' \\
    --data '{"puzzle": 
        [
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]
        ], 
        "author": "", 
        "difficulty": 1
    }'`

    let submit_res =
        `{
    "data": data
}`

    return (
        <div className="container api">

            <h1>API</h1>

            <h2><span>GET</span> /all </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit doloremque
                exercitationem consequuntur laudantium ullam vero tempora, a aperiam harum?</p>

            <table>
                <tr>
                    <th>Status Code</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>200 OK</td>
                    <td>Desc here</td>
                </tr>
                <tr>
                    <td>500 Server Error</td>
                    <td>Desc here</td>
                </tr>
            </table>

            <h3>Example Request</h3>

            <pre><code className="language-bash">{all_req}</code></pre>

            <h3>Example Response</h3>

            <pre><code className="language-json">{all_res}</code></pre>

            <hr />


            <h2><span>GET</span> /random </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit doloremque exercitationem consequuntur laudantium ullam vero tempora, a aperiam harum?</p>

            <table>
                <tr>
                    <th>Status Code</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>200 OK</td>
                    <td>Desc here</td>
                </tr>
                <tr>
                    <td>500 Server Error</td>
                    <td>Desc here</td>
                </tr>
            </table>

            <h3>Example Request</h3>

            <pre><code className="language-bash">{random_req}</code></pre>

            <h3>Example Response</h3>

            <pre><code className="language-json">{random_res}</code></pre>

            <hr />


            <h2><span>GET</span> /daily/&#123;date&#125; </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit doloremque exercitationem consequuntur laudantium ullam vero tempora, a aperiam harum?</p>

            <table>
                <tr>
                    <th>Status Code</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>200 OK</td>
                    <td>Desc here</td>
                </tr>
                <tr>
                    <td>500 Server Error</td>
                    <td>Desc here</td>
                </tr>
            </table>

            <h3>Example Request</h3>

            <pre><code className="language-bash">{daily_req}</code></pre>

            <h3>Example Response</h3>

            <pre><code className="language-json">{daily_res}</code></pre>

            <hr />


            <h2><span>POST</span> /submit </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit doloremque exercitationem consequuntur laudantium ullam vero tempora, a aperiam harum?</p>

            <table>
                <tr>
                    <th>Status Code</th>
                    <th>Description</th>
                </tr>
                <tr>
                    <td>200 OK</td>
                    <td>Desc here</td>
                </tr>
                <tr>
                    <td>500 Server Error</td>
                    <td>Desc here</td>
                </tr>
            </table>

            <h3>Example Request</h3>

            <pre><code className="language-bash">{submit_req}</code></pre>

            <h3>Example Response</h3>

            <pre><code className="language-json">{submit_res}</code></pre>

            <hr />


        </div>
    )
}
