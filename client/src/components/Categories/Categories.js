import './Categories.scss'
import {Link} from 'react-router-dom'

const Categories = () => {
    return ( 
        <div className="categories">
           <div className="col">
              <div className="row">
                 <img src="https://images.pexels.com/photos/1620758/pexels-photo-1620758.jpeg?cs=srgb&dl=pexels-files-1620758.jpg&fm=jpg" alt="" />
                   <button>
                       <Link to="/products/3" className="link" >Children</Link>
                   </button>
              </div>
              <div className="row">
                 <img src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                  <button>
                      <Link to="/products/1" className="link">Women</Link>
                  </button>
              </div>
           </div>
           <div className="col">
                <div className="row">
                   {" "}
                   <img src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
                   <button>
                       <Link to="/products/4" className="link">Sports</Link>
                  </button>
               </div>
           </div>
           <div className="col col-l">
               <div className="row">
                  <div className="col">
                      <div className="row">
                          <img src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
                          <button>
                             <Link to="/products/2" className="link">Men</Link>
                          </button>
                      </div>
                  </div>
                   <div className="col">
                      <div className="row">
                          {" "}
                          <img src="https://png.pngitem.com/pimgs/s/247-2474633_transparent-electronics-items-png-png-download.png" alt=""/>
                          <button>
                              <Link to="/products/5" className="link">Electronics</Link>
                          </button>
                      </div>
                  </div>
               </div>
               <div className="row">
                   <img src="https://media.istockphoto.com/id/1293762741/photo/modern-living-room-interior-3d-render.jpg?s=612x612&w=0&k=20&c=iZ561ZIXOtPYGSzqlKUnLrliorreOYVz1pzu8WJmrnc=" alt=""/>
                   <button>
                      <Link to="/products/6" className="link">Home and Living</Link>
                  </button>
               </div>
           </div>
       </div>
     );
}
 
export default Categories;