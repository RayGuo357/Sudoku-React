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
        `[
    {
        "_id": "63c025d743f9495e2bb09b9b",
        "solution": [
            [8,2,7,5,4,9,6,1,3],
            [6,4,9,8,3,1,2,5,7],
            [5,3,1,6,7,2,9,8,4],
            [2,1,8,3,9,6,7,4,5],
            [7,5,3,2,8,4,1,9,6],
            [4,9,6,1,5,7,8,3,2],
            [9,6,2,4,1,5,3,7,8],
            [1,8,5,7,6,3,4,2,9],
            [3,7,4,9,2,8,5,6,1]
        ],
        "puzzle": [
            [0,2,7,0,4,9,0,0,0],
            [0,4,0,0,0,0,0,5,0],
            [0,0,1,6,0,0,0,8,0],
            [0,0,8,3,0,6,0,0,5],
            [0,0,0,0,0,0,0,0,0],
            [0,0,6,1,0,7,0,3,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,4,0,9],
            [3,0,0,0,0,8,0,6,0]
        ],
        "author": "Sudoku.com",
        "dateSubmitted": "2023-01-12 10:23:03",
        "difficulty": 2,
        "__v": 0,
        "dailyBoard": "2023-02-23"
    },
    ...
]`

    let random_req =
        `curl --request GET \\
    --url ${process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/random`

    let random_res =
        `[
    {
        "_id": "63d92fffb0842502f47fcab6",
        "solution": [
            [9,2,6,7,8,1,4,3,5],
            [8,5,1,4,3,9,2,7,6],
            [4,7,3,5,2,6,9,8,1],
            [6,8,5,3,1,2,7,4,9],
            [7,3,4,9,5,8,6,1,2],
            [2,1,9,6,7,4,3,5,8],
            [3,4,2,1,9,5,8,6,7],
            [5,6,8,2,4,7,1,9,3],
            [1,9,7,8,6,3,5,2,4]
        ],
        "puzzle": [
            [9,0,0,7,8,0,0,3,0],
            [8,5,1,4,0,9,2,0,0],
            [4,0,3,5,0,0,0,0,0],
            [6,0,0,0,0,0,7,4,0],
            [0,0,4,0,0,8,6,1,0],
            [0,0,0,0,0,4,0,0,0],
            [3,4,2,1,9,5,8,0,7],
            [0,0,8,0,4,7,0,9,3],
            [1,0,7,0,6,0,5,0,0]
        ],
        "author": "Sudoku.com",
        "dateSubmitted": "2023-01-31 10:13:03",
        "difficulty": 2,
        "__v": 0,
        "dailyBoard": "2023-02-25"
    }
]`

    let daily_req =
        `curl --request GET \\
    --url ${process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/daily/2023-03-02`

    let daily_res =
        `[
    {
        "_id": "63d3f173b0842502f47fca80",
        "solution": [
            [1,2,3,4,5,6,7,8,9],
            [4,5,6,7,8,9,1,2,3],
            [7,8,9,1,2,3,4,5,6],
            [2,1,4,3,6,5,8,9,7],
            [3,6,5,8,9,7,2,1,4],
            [8,9,7,2,1,4,3,6,5],
            [5,3,1,6,4,2,9,7,8],
            [6,4,2,9,7,8,5,3,1],
            [9,7,8,5,3,1,6,4,2]
        ],
        "puzzle": [
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
        "author": "Anonymous",
        "dateSubmitted": "2023-01-27 10:44:51",
        "difficulty": 1,
        "__v": 0,
        "dailyBoard": "2023-03-02"
    }
]`

    let submit_req =
        `curl --request POST \\
    --url ${process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/submit \\
    --header 'Content-Type: application/json' \\
    --data '{"puzzle": [
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
    "msg": "Board was successfully added!"
}`

    return (
        <div className="container api">

            <h1>API</h1>

            <h2><span>GET</span> /all </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit doloremque
                exercitationem consequuntur laudantium ullam vero tempora, a aperiam harum?</p>

            <table>
                <thead>
                    <tr>
                        <th>Status Code</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>200 OK</td>
                        <td>Desc here</td>
                    </tr>
                    <tr>
                        <td>500 Server Error</td>
                        <td>Desc here</td>
                    </tr>
                </tbody>
            </table>

            <h3>Example Request</h3>

            <pre><code className="language-bash">{all_req}</code></pre>

            <h3>Example Response</h3>

            <pre><code className="language-json">{all_res}</code></pre>

            <hr />


            <h2><span>GET</span> /random </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit doloremque
                exercitationem consequuntur laudantium ullam vero tempora, a aperiam harum?</p>

            <table>
                <thead>
                    <tr>
                        <th>Status Code</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>200 OK</td>
                        <td>Desc here</td>
                    </tr>
                    <tr>
                        <td>500 Server Error</td>
                        <td>Desc here</td>
                    </tr>
                </tbody>
            </table>

            <h3>Example Request</h3>

            <pre><code className="language-bash">{random_req}</code></pre>

            <h3>Example Response</h3>

            <pre><code className="language-json">{random_res}</code></pre>

            <hr />


            <h2><span>GET</span> /daily/&#123;date&#125; </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit doloremque
                exercitationem consequuntur laudantium ullam vero tempora, a aperiam harum?</p>
            <p>YYYY-MM-DD</p>

            <table>
                <thead>
                    <tr>
                        <th>Status Code</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>200 OK</td>
                        <td>Desc here</td>
                    </tr>
                    <tr>
                        <td>400 Bad Request</td>
                        <td>Desc here</td>
                    </tr>
                    <tr>
                        <td>500 Server Error</td>
                        <td>Desc here</td>
                    </tr>
                </tbody>
            </table>

            <h3>Example Request</h3>

            <pre><code className="language-bash">{daily_req}</code></pre>

            <h3>Example Response</h3>

            <pre><code className="language-json">{daily_res}</code></pre>

            <hr />


            <h2><span>POST</span> /submit </h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit doloremque
                exercitationem consequuntur laudantium ullam vero tempora, a aperiam harum?</p>


            <table>
                <thead>
                    <tr>
                        <th>Status Code</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>200 OK</td>
                        <td>Desc here</td>
                    </tr>
                    <tr>
                        <td>400 Bad Request</td>
                        <td>Desc here</td>
                    </tr>
                    <tr>
                        <td>500 Server Error</td>
                        <td>Desc here</td>
                    </tr>
                </tbody>
            </table>

            <h3>Example Request</h3>

            <pre><code className="language-bash">{submit_req}</code></pre>

            <h3>Example Response</h3>

            <pre><code className="language-json">{submit_res}</code></pre>

            <hr />


        </div>
    )
}
