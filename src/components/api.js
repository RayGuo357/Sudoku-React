import React from "react";

export default function Api() {

    return (
        <div className="container">
            <h3> getAll </h3>
            <pre><code>curl -v {process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/getAll</code></pre>
            <hr />
            <h3> getRandom </h3>
            <pre><code>curl -v {process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/getRandom</code></pre>
            <hr />
            <h3> getDaily </h3>
            <pre><code>curl -v {process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/getDaily/:date</code></pre>
            <hr />
            <h3> postBoard </h3>
            <pre><code>curl -d 'author=asdfasdf' {process.env.API_LINK === undefined ? "{Missing Link}" : process.env.API_LINK}/api/postBoard</code></pre>
            <hr />
        </div>
    )
}
