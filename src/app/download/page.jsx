import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { Fragment } from "react";


const Download = () => {

  const noData = [{
    name: "Jay Sadguru Swami",
    id: "Expire",
    imageSrc: "/person_1.jpeg"
  }];

  return (
    <div className="container col-sm-6 col-sm-8 download_style">
      {noData.length === 0 ? (
        <div className="no_data">
          <Image src='/no_data_found.jpg' alt="No_data" width={400} height={400}></Image>
        </div>
      ) : (
        <Fragment>
          <div className="row">
              {noData.map((item, index) => (
                <div className="download-div col-sm-12 col-lg-6" key={index}>
                  <Image src={item.imageSrc} alt={item.name} className="download_img" width={80} height={80} />
                  <div className="text-2">
                    <h1 className="h-1">{item.name}</h1>
                    <p className="w-0">{item.id}</p>
                  </div>
                  <MdDelete className="svg-1" />
                </div>
              ))}
              {noData.map((item, index) => (
                <div className="download-div col-sm-12 col-lg-6" key={index}>
                  <Image src={item.imageSrc} alt={item.name} className="download_img" width={80} height={80} />
                  <div className="text-2">
                    <h1 className="h-1">{item.name}</h1>
                    <p className="w-0">{item.id}</p>
                  </div>
                  <MdDelete className="svg-1 " />
                </div>
              ))}
              {noData.map((item, index) => (
                <div className="download-div col-sm-12 col-lg-6" key={index}>
                  <Image src={item.imageSrc} alt={item.name} className="download_img" width={80} height={80} />
                  <div className="text-2">
                    <h1 className="h-1">{item.name}</h1>
                    <p className="w-0">{item.id}</p>
                  </div>
                  <MdDelete className="svg-1" />
                </div>
              ))}
              {noData.map((item, index) => (
                <div className="download-div col-sm-12 col-lg-6" key={index}>
                  <Image src={item.imageSrc} alt={item.name} className="download_img" width={80} height={80} />
                  <div className="text-2">
                    <h1 className="h-1">{item.name}</h1>
                    <p className="w-0">{item.id}</p>
                  </div>
                  <MdDelete className="svg-1 " />
                </div>
              ))}
            </div>
        </Fragment>
      )}
    </div>
  );
}

export default Download
