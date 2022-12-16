import React from 'react'

const Map = () => {
    return (
        <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.741723265378!2d32.61038681457186!3d0.3550322997409743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dba3099d6aaa9%3A0x617f2f54a372666!2sFraine%20Supermarket%20(Ntinda)!5e0!3m2!1sen!2sug!4v1664260368323!5m2!1sen!2sug" style={{ width: `100%`, height: `500px`, border: 0, borderRadius: `5px` }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* <iframe width="425" height="350" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=32.55942106246949%2C0.32763541000624996%2C32.587015628814704%2C0.34194743294037866&amp;layer=mapnik"></iframe><br/><small><a href="https://www.openstreetmap.org/#map=16/0.3348/32.5732">View Larger Map</a></small> */}
        </div>
    )
}

export default Map