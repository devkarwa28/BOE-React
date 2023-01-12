import React from 'react'
import img1 from '../images/sec2-1.png';

const WelcomeToBOE = () =>{
    return(
        <>
            <section className="section-about-1 container-fluid">
        <div className="container">
            <h1>Welcome To Best Of Export</h1>
            <div className="row">
                <div className="col-md-6 col-lg-6">
                    <img src={img1} alt=""/>
                </div>
                <div className="col-md-6 col-lg-6">
                    <div className="content">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam culpa reprehenderit nobis
                            molestiae in sequi rerum hic quod nisi fugiat soluta accusantium, necessitatibus, quisquam
                            aut cum suscipit a iusto esse!
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi porro atque culpa,
                            perspiciatis numquam id at molestiae obcaecati quibusdam. Iste explicabo autem impedit?
                            Veniam consectetur ut quisquam tenetur, perferendis beatae.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates ex obcaecati repellat
                            aspernatur quia eligendi atque impedit neque cum vero iure, nemo distinctio voluptatum
                            consectetur, iusto repellendus modi nulla possimus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}
export default WelcomeToBOE;