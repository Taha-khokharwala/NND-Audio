import Image from "next/image"

const AboutUs = () => {
    return (
        <div className="container text-white text-center about_us_container">
            <div className="row">
                <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center">
                    <div className="about_img_div d-flex flex-column justify-content-center align-items-center gap-3">
                        <h3 className="m-0">Published with the Blessings of</h3>
                        <div className=" d-flex flex-row flex-wrap justify-content-center gap-4 text-center">
                            <Image src='/person_1.jpeg' alt="person1" className="about_us_img" width={150} height={150} />
                            <Image src='/person_2.jpeg' alt="person2" className="about_us_img" width={150} height={150} />
                            <Image src='/person_3.jpeg' alt="person3" className="about_us_img" width={150} height={150} />
                        </div>
                        <h4 className="m-0">H.H 1008 Acharya Koshalendraprasadji Maharajshree</h4>
                    </div>

                </div>
                <div className="col-sm-12 col-md-2">

                    <div className="vr about-divider"></div>
                </div>
                <div className="col-sm-12 col-md-5 d-flex align-items-center justify-content-center">
                    <div className="d-flex flex-column justify-content-center gap-3">
                        <h3 className="m-0">Published by</h3>
                        <div>
                            <img src='/swaminarayan_mandir_logo.png' alt="swaminarayan_logo" className="swaminarayan_mandir_logo" />
                        </div>
                        <h5>
                            Shree Swaminarayan Mandir Kalupur <br />
                            Swaminarayan Road, Kalupur <br />
                            Ahmedabad, Gujarat, <br />
                            380001, India <br />
                            Tel : +91 79221 32170 <br />
                            Email : info@swaminarayan.in
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs