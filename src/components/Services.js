import { useState, useEffect, useParams } from 'react'
import { Link } from 'react-router-dom'
import sanityClient from '../Client'
import React from 'react'
import Service from './Service'
// import imageUrlBuilder from '@sanity/image-url'


// const builder = imageUrlBuilder(sanityClient)

// function urlFor(source) {
//   return builder.image(source)
// }

const Services = () => {

  const [serviceData, setService] = useState(null)

  useEffect(() => {
    sanityClient.fetch(`*[_type == "service"]{
      name,
      details,
      slug,
      "imageUrl": serviceImage.asset->url,
      "imageUrl2": serviceIcon.asset->url
    }`).then((data) => setService(data))
      .catch(console.error)
  }, [])

  if (!serviceData) return <h1 style={{ margin: '30vh auto', color: '#2b388f' }} className='container'>Loading...</h1>


  return (
    <div className='container'>
      <div className="services">
        {
          serviceData && serviceData.map((thisService, index) => (
            <Link to={`/services/${thisService.slug.current}`} key={thisService.slug.current}>
              <div key={index}>
                <Service
                  service={thisService.name}
                  img={thisService.imageUrl2}
                />
              </div>
            </Link>
          ))
        }

      </div>
    </div>
  )
}

export default Services