import React from "react";

export default function Api() {

    return (
        <div className="container">
            <h3><span>GET</span> /getAll </h3>
            <pre><code>curl -v {process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/getAll</code></pre>
            <hr />
            <h3><span>GET</span> /getRandom </h3>
            <pre><code>curl -v {process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/getRandom</code></pre>
            <hr />
            <h3><span>GET</span> /getDaily/&#123;date&#125; </h3>
            <pre><code>curl -v {process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/getDaily/'2023-03-02'</code></pre>
            <hr />
            <h3><span>POST</span> /postBoard </h3>
            <pre><code>curl -d 'author=asdfasdf' {process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/postBoard</code></pre>
            <hr />
        </div>
    )
}
