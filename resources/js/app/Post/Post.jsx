import React from "react";
import ExampleComponent from "../ExampleComponent/ExampleComponent";

function Post() {
    return (
        <div>
            <div id="container-post">
                <figure>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0260/3037/4957/products/medium-plant-snake-white-pot_720x.jpg?v=1597702214"
                        alt=""
                    />
                    <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
                </figure>
                <section>
                    <div className="price_user">
                        <h1>150 KC</h1>
                        <img
                            src="https://i1.wp.com/nutrikiran.com/wp-content/uploads/2019/09/my_image.png?w=451&ssl=1"
                            alt=""
                        />
                    </div>
                    <h3>Description</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Dicta aut rem necessitatibus quam consequuntur,
                        repellendus non earum molestias dolorum officiis
                        quisquam esse, iure eos, officia voluptatum
                        exercitationem eum! Enim, veritatis?
                    </p>
                    <h3>Location:</h3>
                    <br />
                    <p>Prague, Cz</p>
                </section>
            </div>

            <ExampleComponent />
        </div>
    );
}

export default Post;
