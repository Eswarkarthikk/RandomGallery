import React from 'react'

const Gallery = ({data}) => {
    return (
<div style={{ backgroundColor: 'white', padding: '20px' }}>
      <div className="row">
        {data.map((image, index) => (
          <div key={image.id} className="col-md-3 mb-3">
            <div style={{ padding: '10px' }}>
              <img
                src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
                height="200"
                width="250"
                alt={image.title}
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    )
}

export default Gallery
